import { daysFromNow } from './_helpers.js';

export const announcements = [
  { id: 'a1', title: 'إجازة بمناسبة العطلة الرسمية', body: 'يُعلن المركز عن إجازة يوم الخميس القادم، وتعود الحلقات يوم السبت.', date: daysFromNow(-1), important: true },
  { id: 'a2', title: 'اختبار التقييم الدوري', body: 'يبدأ اختبار التقييم الدوري لطلاب حلقة النور الأسبوع القادم.', date: daysFromNow(-3), circle: 'حلقة النور' },
  { id: 'a3', title: 'تغيير موعد حلقة الفرقان', body: 'تم تقديم موعد الحلقة ساعة واحدة ابتداءً من الأسبوع القادم.', date: daysFromNow(-2), circle: 'حلقة الفرقان' },
  { id: 'a4', title: 'تكريم الطالب عبد الله', body: 'تم اختيار عبد الله ضمن المكرَّمين هذا الشهر لإتمامه سورة آل عمران.', date: daysFromNow(-5), childId: 'c1' },
  { id: 'a5', title: 'نشاط ترفيهي للبراعم', body: 'يقام نشاط تعليمي ترفيهي لأطفال حلقة البراعم يوم السبت.', date: daysFromNow(-4), circle: 'حلقة البراعم' },
  { id: 'a6', title: 'تذكير بسداد الاشتراك', body: 'نرجو سداد اشتراك هذا الشهر قبل موعد التجديد.', date: daysFromNow(-1), childId: 'c2', important: true },
];