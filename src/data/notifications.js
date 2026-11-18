import { daysFromNow } from './_helpers.js';

export const notifications = [
  { id: 'n1', text: 'تم إضافة تقرير جديد من المعلم', date: daysFromNow(-4), read: false },
  { id: 'n2', text: 'إعلان جديد: إجازة بمناسبة العطلة الرسمية', date: daysFromNow(-1), read: false },
  { id: 'n3', text: 'تذكير: موعد تجديد الاشتراك يقترب', date: daysFromNow(-2), read: true },
];