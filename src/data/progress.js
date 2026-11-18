import { daysFromNow } from './_helpers.js';

// memorizedJuz / reviewJuz بالجزء. lastAchievement ممكن تكون null
export const progressByChild = {
  c1: {
    memorizedJuz: 8, target: { label: 'إتمام الجزء العاشر', juz: 10 },
    currentSurah: 'سورة النساء', reviewJuz: 3,
    recitationsThisMonth: 14, lastRating: 'ممتاز',
    lastAchievement: {
      title: 'إتمام حفظ سورة آل عمران',
      date: daysFromNow(-6),
      note: 'أتمّ السورة كاملة واجتاز التسميع النهائي من غير أخطاء.',
    },
  },
  c2: {
    memorizedJuz: 3, target: { label: 'إتمام الجزء الخامس', juz: 5 },
    currentSurah: 'سورة آل عمران', reviewJuz: 1.5,
    recitationsThisMonth: 11, lastRating: 'جيد جدًا',
    lastAchievement: {
      title: 'اجتياز تقييم التجويد',
      date: daysFromNow(-12),
      note: 'حصلت على تقدير جيد جدًا في تقييم أحكام النون الساكنة والتنوين.',
    },
  },
  c3: {
    memorizedJuz: 0.5, target: { label: 'حفظ جزء عمّ', juz: 1 },
    currentSurah: 'سورة الشمس', reviewJuz: 0.5,
    recitationsThisMonth: 6, lastRating: 'جيد',
    lastAchievement: null,
  },
};