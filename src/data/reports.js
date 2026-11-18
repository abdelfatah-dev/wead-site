import { daysFromNow } from './_helpers.js';

export const reportsByChild = {
  c1: [
    {
      id: 'r-c1-2', date: daysFromNow(-4), teacher: 'الشيخ أحمد السيد', period: 'تقرير أسبوعي',
      levels: { memorization: 'ممتاز', review: 'جيد جدًا', tajweed: 'جيد جدًا', fluency: 'جيد', commitment: 'ممتاز' },
      strengths: ['حفظ متقن وسريع', 'التزام بالحضور والواجبات', 'حسن الأدب في الحلقة'],
      improvements: ['الطلاقة في القراءة المتصلة', 'مراجعة الأجزاء القديمة بانتظام'],
      teacherNote: 'عبد الله يسير بخطى ممتازة في الحفظ، ويحتاج فقط إلى مزيد من التدريب على القراءة المتصلة دون توقف.',
      recommendations: ['قراءة صفحة يوميًا بصوت مرتفع في البيت', 'مراجعة الجزء السادس مرتين هذا الأسبوع'],
    },
    {
      id: 'r-c1-1', date: daysFromNow(-18), teacher: 'الشيخ أحمد السيد', period: 'تقرير أسبوعي',
      levels: { memorization: 'جيد جدًا', review: 'جيد', tajweed: 'جيد جدًا', fluency: 'جيد', commitment: 'ممتاز' },
      strengths: ['اهتمام واضح بالتجويد'],
      improvements: ['انتظام المراجعة'],
      teacherNote: 'أداء جيد مع حاجة لتنظيم وقت المراجعة.',
      recommendations: ['تخصيص عشر دقائق للمراجعة بعد كل صلاة'],
    },
  ],
  c2: [
    {
      id: 'r-c2-1', date: daysFromNow(-7), teacher: 'الأستاذة هدى كمال', period: 'تقرير أسبوعي',
      levels: { memorization: 'جيد جدًا', review: 'جيد', tajweed: 'ممتاز', fluency: 'جيد جدًا', commitment: 'جيد' },
      strengths: ['إتقان أحكام التجويد', 'صوت جميل وأداء واضح'],
      improvements: ['الانتظام في الحضور'],
      teacherNote: 'مريم متميزة في التجويد، ونأمل انتظامًا أكبر في الحضور للحفاظ على مستواها.',
      recommendations: ['الحرص على الحضور في المواعيد المحددة'],
    },
  ],
};