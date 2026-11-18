import { daysFromNow } from './_helpers.js';

// بدون circle/childId = حدث عام. مع circle = لحلقة. مع childId = لابن واحد
export const events = [
  { id: 'e1', type: 'halaqa', title: 'حلقة التحفيظ', date: daysFromNow(1), time: '4:00 م', place: 'القاعة الأولى', circle: 'حلقة النور' },
  { id: 'e2', type: 'halaqa', title: 'حلقة التحفيظ', date: daysFromNow(2), time: '4:00 م', place: 'القاعة الثانية', circle: 'حلقة الفرقان' },
  { id: 'e3', type: 'halaqa', title: 'حلقة التحفيظ', date: daysFromNow(2), time: '3:00 م', place: 'قاعة البراعم', circle: 'حلقة البراعم' },
  { id: 'e4', type: 'activity', title: 'مسابقة الحفظ الشهرية', date: daysFromNow(6), time: '5:00 م', place: 'مسرح المركز' },
  { id: 'e5', type: 'activity', title: 'ورشة التجويد للأطفال', date: daysFromNow(9), time: '4:30 م', place: 'القاعة الثانية', circle: 'حلقة الفرقان' },
  { id: 'e6', type: 'trip', title: 'رحلة ترفيهية للمركز', date: daysFromNow(14), time: '9:00 ص', place: 'نقطة التجمع أمام المركز' },
];