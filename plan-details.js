(function (root, factory) {
  const api = factory();
  root.PricingPlanDetails = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(globalThis, function () {
  const V = '2026-09-22';
  const detail = (sourceUrl, features, caveat, intro) => ({ sourceUrl, features, verifiedAt: V, ...(caveat ? { caveat } : {}), ...(intro ? { intro } : {}) });

  const PLAN_DETAILS = {
    make: {
      Free: detail('https://www.make.com/en/pricing', ['1,000 קרדיטים בחודש', 'בונה תרחישים ללא קוד', 'יותר מ־3,000 אפליקציות', 'נתבים ומסננים', 'תמיכת לקוחות', 'אינטרוול מינימלי של 15 דקות']),
      Core: detail('https://www.make.com/en/pricing', ['כל היכולות של Free', 'תרחישים פעילים ללא הגבלה', 'תזמון תרחישים עד דקה', 'העברת נתונים מוגדלת', 'גישה ל-Make API']),
      Pro: detail('https://www.make.com/en/pricing', ['כל היכולות של Core', 'הרצה בעדיפות גבוהה', 'משתנים מותאמים', 'חיפוש מלא בלוג ההרצות']),
      Teams: detail('https://www.make.com/en/pricing', ['כל היכולות של Pro', 'צוותים ותפקידי צוות', 'יצירה ושיתוף של תבניות תרחישים', 'ניהול משתמשים והרשאות']),
      Enterprise: detail('https://www.make.com/en/pricing', ['כל היכולות של Teams', 'פונקציות מותאמות ואינטגרציות ארגוניות', 'תמיכת Enterprise מסביב לשעון', 'Value Engineering', 'הגנת חריגה', 'אבטחה מתקדמת']),
    },
    n8n: {
      Starter: detail('https://n8n.io/pricing/', ['2,500 הרצות workflow בחודש', 'צעדים ללא הגבלה בכל workflow', 'פרויקט משותף אחד', 'עד 5 הרצות מקבילות']),
      Pro: detail('https://n8n.io/pricing/', ['10,000 הרצות בחודש', 'עד 20 הרצות מקבילות', '3 פרויקטים משותפים', 'היסטוריה וחיפוש הרצות']),
      Business: detail('https://n8n.io/pricing/', ['40,000 הרצות בחודש', '6 פרויקטים משותפים', 'SSO וסביבות נפרדות', 'Scaling וניהול גרסאות ב-Git'], 'חבילה זו מוצגת באתר הרשמי כ-Self-hosted.'),
      Enterprise: detail('https://n8n.io/pricing/', ['מספר הרצות מותאם', 'יותר מ-200 הרצות מקבילות', 'Log streaming ושמירת נתונים מורחבת', 'תמיכה עם SLA']),
    },
    monday: {
      Free: detail('https://monday.com/pricing', ['חינם לעד 2 מושבים', 'עד 3 לוחות', 'מסמכים ללא הגבלה', 'יותר מ-200 תבניות']),
      Basic: detail('https://monday.com/pricing', ['פריטים ללא הגבלה', 'צופים חינמיים ללא הגבלה', 'דשבורד המבוסס על לוח אחד', 'כלי AI בסיסיים וקרדיטים חודשיים']),
      Standard: detail('https://monday.com/pricing', ['תצוגות ציר זמן ו-Gantt', 'גישה לאורחים', 'תצוגת לוח שנה', 'אוטומציות ואינטגרציות במכסה חודשית']),
      Pro: detail('https://monday.com/pricing', ['לוחות פרטיים', 'מעקב זמן', 'עמודת נוסחה', 'מכסה מוגדלת לאוטומציות ואינטגרציות']),
      Enterprise: detail('https://monday.com/pricing', ['הרשאות ואבטחה ארגוניות', 'SSO וניהול משתמשים מתקדם', 'תמיכה ארגונית', 'דשבורדים ודיווח בהיקף מורחב']),
    },
    fireberry: {
      Professional: detail('https://www.fireberry.com/he/pricing', [
        'עד 200,000 לקוחות',
        '50 תהליכים אוטומטיים',
        'יצירת עמודים בהתאמה אישית',
        'הצעות מחיר עם חתימה אלקטרונית',
        'יצירת אובייקטים מותאמים אישית',
        'יצירת שדות חישוביים ושדות נוסחה',
        'תיבת דוא״ל צוותית Google ו־Office 365',
        'התניית שדות בטופס',
      ], 'מינימום 5 משתמשים; המחיר אינו כולל מע״מ.', 'כל היתרונות של תוכנית Standard, ובנוסף:'),
      Enterprise: detail('https://www.fireberry.com/he/pricing', [
        'לקוחות ללא הגבלה',
        '500 תהליכים אוטומטיים',
        'אוטומציות תלויות זמן',
        'קריאות שירות ללא הגבלה',
        'אפשרויות אבטחת מידע מתקדמות',
        'יצירת כפתורים בהתאמה אישית',
        '50 משאבי יומן',
        'הרשאות שיתוף מותאמות אישית',
        'יצירת תפקידים ללא הגבלה',
      ], 'מינימום 10 משתמשים; המחיר אינו כולל מע״מ.', 'כל היתרונות של תוכנית Professional, ובנוסף:'),
    },
    zoho: {
      Free: detail('https://www.zoho.com/crm/zohocrm-pricing.html', ['ניהול אנשי קשר', 'תזכורות למעקב', 'אוטומציית workflow', 'תבניות דוא״ל מותאמות', 'משימות, פגישות ושיחות', 'ייבוא וייצוא נתונים', 'דוחות רגילים', 'API ואפליקציות מובייל']),
      Standard: detail('https://www.zoho.com/crm/zohocrm-pricing.html', ['כללי הקצאה ו-workflow', 'סוכני AI', 'Cadences', 'דוחות ודשבורדים', 'תחזית מכירות', 'קיוסק לשירות עצמי']),
      Professional: detail('https://www.zoho.com/crm/zohocrm-pricing.html', ['CPQ', 'מודיעין דוא״ל', 'אוטומציית תהליכים', 'Widgets', 'ניהול מלאי', 'אינטגרציית Google Ads']),
      Enterprise: detail('https://www.zoho.com/crm/zohocrm-pricing.html', ['עוזר מכירות AI', 'ניהול מסע לקוח', 'ניהול טריטוריות', 'פונקציות מותאמות', 'Wizard', 'פורטלים ללקוחות']),
      Ultimate: detail('https://www.zoho.com/crm/zohocrm-pricing.html', ['מגבלות שימוש מוגדלות', 'ייעוץ', 'סיוע בהגירה', 'AI ו-ML מותאמים', 'הכנת נתונים']),
    },
    glassix: {
      Starter: detail('https://www.glassix.com/pricing', ['אימייל וצ׳אט', 'חיבור ערוצי הודעות', 'בוטים ואוטומציה בסיסיים', 'דוחות ודשבורד בזמן אמת']),
      Growth: detail('https://www.glassix.com/pricing', ['צ׳אטבוטים מתקדמים', 'דוחות וסקרים', 'אבטחה משופרת', 'גישה מוגבלת ל-REST API']),
      Enterprise: detail('https://www.glassix.com/pricing', ['חבילת Conversational AI מלאה', 'תמיכת Premium', 'אבטחה ארגונית ו-BI', 'גישה ללא הגבלה ל-REST API']),
    },
    manychat: {
      Free: detail('https://manychat.com/pricing', ['עד 25 אנשי קשר פעילים', 'עד 4 אוטומציות', 'חיבור ערוצים בסיסי', 'כלי Inbox בסיסיים']),
      Essential: detail('https://manychat.com/pricing', ['250 אנשי קשר פעילים כלולים', '2 משתמשים', 'חיבור עד 2 ערוצים', 'אוטומציות מותאמות ללא הגבלה']),
      Pro: detail('https://manychat.com/pricing', ['2,500 אנשי קשר פעילים כלולים', '3 משתמשים', 'WhatsApp, SMS ואימייל', 'אוטומציות ויכולות AI מתקדמות']),
      Business: detail('https://manychat.com/pricing', ['7,500 אנשי קשר פעילים כלולים', '5 משתמשים', 'ערוצים ללא הגבלה', 'Team Inbox וניתוב לידים']),
      Advanced: detail('https://manychat.com/pricing', ['25,000 אנשי קשר פעילים כלולים', '10 משתמשים', 'גישה ל-API ואינטגרציות מותאמות', 'תמיכה מתקדמת']),
    },
    heyy: {
      Hobby: detail('https://www.heyy.io/pricing', ['משתמש אחד', '1,000 קרדיטים ועובד AI אחד', 'חיבור 3 ערוצים וקמפיינים', 'Mini-CRM וגישה ל-API']),
      Pro: detail('https://www.heyy.io/pricing', ['5 משתמשים', '6,000 קרדיטים', '2 עובדי AI', 'ערוצים ללא הגבלה ו-Journeys']),
      Ultra: detail('https://www.heyy.io/pricing', ['10 משתמשים', '20,000 קרדיטים', '3 עובדי AI', 'הסרת מיתוג ויכולות בהיקף מוגדל']),
      Enterprise: detail('https://www.heyy.io/pricing', ['תמחור מותאם לארגון', 'יכולות ומכסות מותאמות', 'SLA ומנהל הצלחה', 'ליווי הגירה']),
    },
    wati: {
      Growth: detail('https://www.wati.io/pricing/', ['3 משתמשים', '1,000 טריגרי אוטומציה', '10,000 קריאות API בחודש', 'קמפיינים, תיבת צוות ו-2 אינטגרציות נבחרות'], 'מחיר והודעות משתנים לפי אזור; חיובי הודעות מתווספים.'),
      Pro: detail('https://www.wati.io/pricing/', ['5 משתמשים', '2,000 טריגרי אוטומציה', '200,000 קריאות API בחודש', 'בוטים מתקדמים, Webhooks ו-5 אינטגרציות'], 'מחיר והודעות משתנים לפי אזור; חיובי הודעות מתווספים.'),
      Business: detail('https://www.wati.io/pricing/', ['5,000 טריגרי אוטומציה', '20 מיליון קריאות API', 'אינטגרציות ומספרי WhatsApp מרובים', 'ניתוב Round-robin ותמיכה בעדיפות'], 'מחיר מותאם; חיובי הודעות מתווספים.'),
    },
    greenapi: {
      Developer: detail('https://green-api.com/en/', ['עד 3 צ׳אטים', '100 בדיקות מספר', '100MB לקבצים', 'עד 10 סטטוסים']),
      Business: detail('https://green-api.com/en/', ['צ׳אטים ללא הגבלה', '30,000 בדיקות מספר', '100MB לקבצים', 'עד 100 סטטוסים']),
      Chatbot: detail('https://green-api.com/en/', ['צ׳אטים ללא הגבלה', '30,000 בדיקות מספר', '100MB לקבצים', 'סטטוסים ללא הגבלה']),
      Partner: detail('https://green-api.com/en/', ['מסלול לשותפים ולנפח גבוה', 'White-label', 'חיוב יומי', 'הנחות כמות']),
    },
    activecampaign: {
      Starter: detail('https://www.activecampaign.com/pricing', ['Active Intelligence במכסה', 'שיווק בדוא״ל ואוטומציות', 'סגמנטציה מוגבלת', 'עד 5 פעולות בכל אוטומציה', 'אינטגרציות CRM ו-eCommerce סטנדרטיות', 'משתמש אחד']),
      Plus: detail('https://www.activecampaign.com/pricing', ['Active Intelligence במכסה', 'שיווק בדוא״ל ואוטומציות', 'סגמנטציה סטנדרטית', 'פעולות אוטומציה ללא הגבלה', 'אינטגרציות CRM ו-eCommerce', 'דפי נחיתה ומשתמש אחד']),
      Pro: detail('https://www.activecampaign.com/pricing', ['Active Intelligence', 'סגמנטציה מתקדמת', 'פעולות אוטומציה ללא הגבלה', 'אינטגרציות CRM ו-eCommerce מתקדמות', 'תוכן חזוי ומותנה', 'Attribution ומעקב המרות', '3 משתמשים']),
      Enterprise: detail('https://www.activecampaign.com/pricing', ['Active Intelligence', 'סגמנטציה פרימיום', 'פעולות אוטומציה ללא הגבלה', 'אינטגרציות CRM ו-eCommerce פרימיום', 'תוכן חזוי ומותנה', 'אובייקטים מותאמים ו-SSO', 'צוות חשבון ייעודי ו-5 משתמשים']),
    },
    activetrail: {
      Basic: detail('https://www.activetrail.co.il/pricing/', [
        'דיוורים ללא הגבלה',
        'דפי נחיתה',
        'טפסי הרשמה ופופ־אפים',
        'דו״חות וסטטיסטיקות',
        'אוטומציות מתקדמות',
        'מערכת סקרים',
        'אינטגרציית API מלאה',
        'סגמנטציה ויצירת קבוצות דינמיות',
        'A/B Testing',
        'תוכן דינמי ופרסונלי',
        'מגוון תבניות מעוצבות',
        'אינטגרציית Zapier',
        'תמיכה בטלפון, בצ׳אט ובמייל',
        'משתמש אחד',
      ], null, 'מה התוכנית כוללת:'),
      Plus: detail('https://www.activetrail.co.il/pricing/', [
        'רימרקטינג לסושיאל',
        'אוטומציות eCommerce מובנות',
        'הטמעת פיקסל חכם',
        'שליחה לפי חיזוי זמן אופטימלי',
        'שליחה מדורגת לפי צורך',
        'אפליקציית דו״חות במובייל',
        'Webhooks',
        'ייבוא FTP מתוזמן',
        'אימות דו־שלבי והגבלת כניסות לפי IP',
        'עד 10 משתמשים',
      ], null, 'כל הפיצ׳רים בתוכנית Basic, ובנוסף:'),
      Premium: detail('https://www.activetrail.co.il/pricing/', [
        'מנהל לקוחות אישי',
        'הקמת חשבון וייבוא נתונים',
        'דו״ח חודשי והמלצות לשיפור',
        'הדרכה אישית על המערכת לפי דרישה',
        'תמיכת VIP',
        'כמות משתמשים בלתי מוגבלת',
      ], null, 'כל הפיצ׳רים בתוכנית Plus, ובנוסף:'),
    },
    smoove: {
      Free: detail('https://www.smoove.io/pricing/', ['דפי נחיתה', 'שיווק בדוא״ל', 'אוטומציה שיווקית ו-CRM', 'קורסים דיגיטליים וסקרים']),
      Basic: detail('https://www.smoove.io/pricing/', ['כל היכולות של Free', 'שליחת SMS', 'אפשרויות תשלום ו-Smart Link', 'WhatsApp בתוספת תשלום', 'הטמעת קודי מעקב']),
      Standard: detail('https://www.smoove.io/pricing/', ['כל היכולות של Basic', 'כלי eCommerce ועד 5 משתמשים', 'דומיין מותאם לדפי נחיתה ולמיילים', 'רשימות דינמיות ואינטגרציות אוטומציה', 'A/B Testing לאימיילים']),
      Pro: detail('https://www.smoove.io/pricing/', ['כל היכולות של Standard', 'Footer מותאם', 'תמונות פתיחה', 'שירות לקוחות חודשי וקו תמיכה ייעודי', 'שיתוף תבניות', 'עד 10 משתמשים'], 'המחירים אינם כוללים מע״מ.'),
    },
    ravmesser: {
      '1,000 נמענים': detail('https://www.responder.co.il/מחירים/', ['עד 1,000 נמענים', '6,000 מיילים בחודש במסלול הבסיס', 'דפי נחיתה ואוטומציות מתקדמות', 'Schooler לקורסים ו-Kesher לניהול לקוחות'], 'מנוי שנתי גמיש; המחירים אינם כוללים מע״מ.'),
      '5,000 נמענים': detail('https://www.responder.co.il/מחירים/', ['עד 5,000 נמענים', 'עד 30,000 מיילים בחודש במסלול המוצג', 'דפי נחיתה ואוטומציות מתקדמות', 'Schooler ו-Kesher כלולים'], 'החיוב מתאים את החבילה לפעילות בפועל.'),
      '10,000 נמענים': detail('https://www.responder.co.il/מחירים/', ['עד 10,000 נמענים', 'עד 60,000 מיילים בחודש במסלול המוצג', 'דפי נחיתה ואוטומציות מתקדמות', 'Schooler ו-Kesher כלולים']),
      '20,000 נמענים': detail('https://www.responder.co.il/מחירים/', ['עד 20,000 נמענים', 'עד 120,000 מיילים בחודש במסלול המוצג', 'כל כלי רב מסר כלולים', 'מעל 20,000 נמענים נדרשת הצעה מותאמת']),
    },
    powerdoc: {
      Power: detail('https://powerdoc.co.il/prices/', ['עד 200 שליחות בשנה', 'משתמש אחד', '10 תבניות מסמך', 'סבב חתימות', '2 דפי נחיתה', '250 אנשי קשר', 'מדפסת וירטואלית', 'מודול Make וממשקי API', 'תמיכה בצ׳אט ובטלפון'], 'המחיר אינו כולל מע״מ; יתרת השליחות מתאפסת בסוף התקופה.'),
      'Power Plus': detail('https://powerdoc.co.il/prices/', ['עד 360 שליחות בשנה', 'משתמש אחד', '10 תבניות מסמך', 'סבב חתימות', '2 דפי נחיתה', '450 אנשי קשר', 'מדפסת וירטואלית', 'מודול Make וממשקי API', 'תמיכה בצ׳אט ובטלפון'], 'המחיר אינו כולל מע״מ; יתרת השליחות מתאפסת בסוף התקופה.'),
      'Power Pro': detail('https://powerdoc.co.il/prices/', ['עד 840 שליחות בשנה', 'משתמש אחד', '10 תבניות מסמך', 'סבב חתימות', '2 דפי נחיתה', '1,000 אנשי קשר', 'מדפסת וירטואלית', 'מודול Make וממשקי API', 'תמיכה בצ׳אט ובטלפון'], 'המחיר אינו כולל מע״מ; יתרת השליחות מתאפסת בסוף התקופה.'),
      'Full Power': detail('https://powerdoc.co.il/prices/', ['כמויות שליחה גדולות', 'משתמשים רבים והרשאות פעולה אישיות', 'כמות גדולה של תבניות', 'כמות גדולה של דפי נחיתה', 'כמות גדולה של אנשי קשר', 'ממשקים למערכות שונות', 'מדפסת וירטואלית מותאמת', 'חיבורים למערכות צד שלישי', 'התאמות לארגונים']),
    },
    twosign: {
      Starter: detail('https://www.2sign.co.il/pricing/', ['25 שליחות מסמכים בחודש', 'תבנית קבועה אחת', '50 אנשי קשר קבועים', '12 שדות מילוי פרטים', 'קוד סודי להגנת המסמך', 'סבב חתימות טורי או מקבילי', 'מעקב אחרי החתימה', 'שמירה כטיוטה', 'מיזוג קבצים לשליחה מרוכזת']),
      Pro: detail('https://www.2sign.co.il/pricing/', ['100 שליחות מסמכים בחודש', '20 תבניות קבועות', '2 משתמשי משנה', '1,000 אנשי קשר קבועים', 'שליחה ב-WhatsApp', 'מחיקה אוטומטית של מסמכים', 'אימות חותם בצילום תעודה', 'נעילת מסמכים מרחוק', 'מיתוג עסקי', 'API מלא', 'תזמון שליחה עתידית'], null, 'כל מה שבמסלול Starter, ובנוסף:'),
      Business: detail('https://www.2sign.co.il/pricing/', ['250 שליחות מסמכים בחודש', '30 תבניות קבועות', '3 משתמשי משנה', '2,500 אנשי קשר קבועים', 'לינק לטופס דיגיטלי', 'אימות OTP', 'Signature Trail', 'כלים מתקדמים לאימות חותמים', 'צירוף קבצים על ידי החותם', 'התראת יתרה נמוכה', 'שליחה אוטומטית', 'טעינת מסמך לשליחה במייל'], null, 'כל מה שבמסלול Pro, ובנוסף:'),
      Enterprise: detail('https://www.2sign.co.il/pricing/', ['1,000 שליחות מסמכים בחודש ומעלה', '50 תבניות ומעלה', '5 משתמשי משנה ומעלה', '10,000 אנשי קשר ומעלה', 'שליחה ללא הגבלה ב-API', 'רמות משתמשים נוספות', 'סירוב חתימה ותיעוד הסיבה', 'ניהול משימות המשך אוטומטיות'], 'המחירים אינם כוללים מע״מ; יתרת המסמכים מתאפסת מדי חודש.', 'כל מה שבמסלול Business, ובנוסף:'),
    },
    easydo: {
      Free: detail('https://easydo.co.il/מחירון/', ['אפליקציה לאייפון ולאנדרואיד', '10 שליחות בחודש', '250 אנשי קשר', 'ללא תבניות', 'חתימה דיגיטלית מאובטחת', 'שליחה ב-WhatsApp']),
      Basic: detail('https://easydo.co.il/מחירון/', ['כל היכולות של Free', '20 שליחות בחודש', '500 אנשי קשר', '2 תבניות', 'קוד סודי למסמך', 'טופס פומבי', 'סבב חתימות']),
      Pro: detail('https://easydo.co.il/מחירון/', ['כל היכולות של Basic', '100 שליחות בחודש', '2,000 אנשי קשר', '10 תבניות', '2 מנהלים', 'מעטפות', 'נתוני LOG']),
      Business: detail('https://easydo.co.il/מחירון/', ['כל היכולות של Pro', '250 שליחות בחודש', 'אנשי קשר ללא הגבלה', '30 תבניות', '4 מנהלים', 'API'], 'המחירים אינם כוללים מע״מ.'),
    },
    fillout: {
      Free: detail('https://www.fillout.com/pricing', ['משתמשים ללא הגבלה', 'טפסים ללא הגבלה', '1,000 תגובות בחודש', 'כל יכולות הבסיס']),
      Starter: detail('https://www.fillout.com/pricing', ['משתמשים ללא הגבלה', '2,000 תגובות בחודש', 'כל סוגי השאלות', 'מסכי סיום מותאמים', 'טפסי התחברות', 'הפניה בסיום']),
      Pro: detail('https://www.fillout.com/pricing', ['משתמשים ללא הגבלה', '5,000 תגובות בחודש', 'ללא מיתוג Fillout', 'קישורי שיתוף מותאמים', 'גופנים ו-favicon מותאמים', 'CSS מותאם']),
      Business: detail('https://www.fillout.com/pricing', ['משתמשים ללא הגבלה', 'תגובות ללא הגבלה', 'אנליטיקת טפסים', 'דומיין מותאם', 'קוד מותאם', 'שליחות חלקיות', 'טעינת נתונים מראש', 'תמיכה בעדיפות']),
    },
  };

  function isValidPlanDetail(value) {
    if (!value || typeof value !== 'object' || !Array.isArray(value.features) || value.features.length === 0) return false;
    if (!value.features.every((item) => typeof item === 'string' && item.trim().length > 0)) return false;
    if (typeof value.sourceUrl !== 'string' || !value.sourceUrl.startsWith('https://')) return false;
    try { new URL(value.sourceUrl); } catch (_) { return false; }
    if (typeof value.verifiedAt !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value.verifiedAt)) return false;
    if (value.caveat != null && (typeof value.caveat !== 'string' || !value.caveat.trim())) return false;
    if (value.intro != null && (typeof value.intro !== 'string' || !value.intro.trim())) return false;
    return true;
  }

  function getPlanDetail(systemId, planName) {
    if (typeof systemId !== 'string' || typeof planName !== 'string') return null;
    const value = PLAN_DETAILS[systemId] && PLAN_DETAILS[systemId][planName];
    return isValidPlanDetail(value) ? value : null;
  }

  return { PLAN_DETAILS, getPlanDetail, isValidPlanDetail };
});
