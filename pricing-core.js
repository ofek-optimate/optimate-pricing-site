(function (root, factory) {
  const api = factory();
  root.PricingCore = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(globalThis, function () {
  function calculateTotals(selections) {
    const totals = { '₪': 0, '$': 0, '€': 0 };
    const quoted = [];

    for (const item of selections) {
      if (!item || !Object.prototype.hasOwnProperty.call(totals, item.currency)) continue;
      if (item.monthlyPrice == null || !Number.isFinite(item.monthlyPrice)) quoted.push(item.id);
      else totals[item.currency] += item.monthlyPrice;
    }

    return { totals, quoted };
  }

  function normalizeExchangeRates(usdResponse, eurResponse) {
    const validUsd = usdResponse
      && usdResponse.base === 'USD'
      && usdResponse.quote === 'ILS'
      && Number.isFinite(usdResponse.rate)
      && usdResponse.rate > 0
      && typeof usdResponse.date === 'string'
      && usdResponse.date;
    const validEur = eurResponse
      && eurResponse.base === 'EUR'
      && eurResponse.quote === 'ILS'
      && Number.isFinite(eurResponse.rate)
      && eurResponse.rate > 0
      && typeof eurResponse.date === 'string'
      && eurResponse.date;
    if (!validUsd || !validEur) return null;
    return {
      usdIls: usdResponse.rate,
      eurIls: eurResponse.rate,
      date: usdResponse.date === eurResponse.date
        ? usdResponse.date
        : `${usdResponse.date} / ${eurResponse.date}`,
    };
  }

  function calculateTotalInIls(totals, rates) {
    if (!totals) return null;
    const ils = Number.isFinite(totals['₪']) ? totals['₪'] : 0;
    const usd = Number.isFinite(totals.$) ? totals.$ : 0;
    const eur = Number.isFinite(totals['€']) ? totals['€'] : 0;
    if (usd === 0 && eur === 0) return Math.round(ils * 100) / 100;
    if (!rates
      || !Number.isFinite(rates.usdIls) || rates.usdIls <= 0
      || !Number.isFinite(rates.eurIls) || rates.eurIls <= 0) return null;
    return Math.round((ils + (usd * rates.usdIls) + (eur * rates.eurIls)) * 100) / 100;
  }

  function calculatePeriodPrice(plan, billing) {
    if (!plan || !Object.prototype.hasOwnProperty.call(plan, 'p')) return null;
    const value = plan.p;
    if (value && typeof value === 'object') {
      const period = billing === 'm' ? 'm' : 'a';
      return Number.isFinite(value[period]) ? value[period] : null;
    }
    return Number.isFinite(value) ? value : null;
  }

  function calculateSeatUnitPrice(plan, quantity, billing) {
    const rates = plan && Array.isArray(plan.rates) ? plan.rates : [];
    const safeQuantity = Math.max(0, Number(quantity) || 0);
    let result = calculatePeriodPrice(plan, billing);
    for (const rate of rates) {
      if (!Array.isArray(rate) || safeQuantity < Number(rate[0])) continue;
      const ratePrice = calculatePeriodPrice({ p: rate[1] }, billing);
      if (ratePrice != null) result = ratePrice;
    }
    return result;
  }

  function calculateLookupPrice(plan, tierIndex, billing) {
    const tiers = plan && Array.isArray(plan.tiers) ? plan.tiers : [];
    if (!tiers.length) return { quantity: null, price: null };
    const safeIndex = Math.max(0, Math.min(tiers.length - 1, Number.isFinite(Number(tierIndex)) ? Number(tierIndex) : 0));
    const tier = tiers[safeIndex];
    if (Array.isArray(tier)) return { quantity: tier[0], price: Number.isFinite(tier[1]) ? tier[1] : null };
    const period = billing === 'm' ? 'm' : 'a';
    return { quantity: tier.q, price: Number.isFinite(tier[period]) ? tier[period] : null };
  }

  function calculateOptionLookupPrice(plan, tierIndex, optionIndex) {
    const tiers = plan && Array.isArray(plan.tiers) ? plan.tiers : [];
    if (!tiers.length) return { quantity: null, emails: null, price: null };
    const safeTier = Math.max(0, Math.min(tiers.length - 1, Number.isFinite(Number(tierIndex)) ? Number(tierIndex) : 0));
    const tier = tiers[safeTier];
    const options = Array.isArray(tier.options) ? tier.options : [];
    if (!options.length) return { quantity: tier.q, emails: null, price: null };
    const safeOption = Math.max(0, Math.min(options.length - 1, Number.isFinite(Number(optionIndex)) ? Number(optionIndex) : 0));
    const option = options[safeOption];
    return {
      quantity: tier.q,
      emails: option.emails,
      price: Number.isFinite(option.price) ? option.price : null,
    };
  }

  function evaluatePlanCapacity(plans, selectedIndex, quantity) {
    const list = Array.isArray(plans) ? plans : [];
    const index = Math.max(0, Math.min(list.length - 1, Number(selectedIndex) || 0));
    const selected = list[index] || null;
    const value = Math.max(0, Number(quantity) || 0);
    const overLimit = Boolean(selected && Number.isFinite(selected.q) && value > selected.q);
    const recommended = overLimit
      ? (list.find((plan) => !Number.isFinite(plan.q) || value <= plan.q) || list[list.length - 1] || null)
      : selected;
    return { overLimit, selected, recommended };
  }

  function sanitizeHomeState(value, allowedIds) {
    const valid = value
      && value.version === 1
      && value.selected
      && typeof value.selected === 'object'
      && !Array.isArray(value.selected);
    if (!valid) return { selected: {}, version: 1 };

    const allowed = new Set(Array.isArray(allowedIds) ? allowedIds : []);
    const selected = {};
    for (const [key, item] of Object.entries(value.selected)) {
      if (!allowed.has(key) || !item || typeof item !== 'object') continue;
      if (item.id !== key || typeof item.plan !== 'string' || !item.plan.trim()) continue;
      if (item.billing !== 'a' && item.billing !== 'm') continue;
      const controlValue = item.controlValue;
      const safeControl = typeof controlValue === 'string'
        || (typeof controlValue === 'number' && Number.isFinite(controlValue));
      if (!safeControl) continue;
      selected[key] = {
        id: key,
        plan: item.plan.trim(),
        billing: item.billing,
        controlValue,
      };
    }
    return { selected, version: 1 };
  }

  return {
    calculateLookupPrice,
    calculateOptionLookupPrice,
    calculatePeriodPrice,
    calculateSeatUnitPrice,
    calculateTotalInIls,
    calculateTotals,
    evaluatePlanCapacity,
    normalizeExchangeRates,
    sanitizeHomeState,
  };
});
