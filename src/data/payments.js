import { daysFromNow } from './_helpers.js';

// بيانات تجريبية فقط. status: active | due | overdue
export const paymentsByChild = {
  c1: {
    status: 'active', plan: 'اشتراك شهري', amount: 350,
    startDate: daysFromNow(-200), renewalDate: daysFromNow(14),
    discount: { label: 'خصم الأخوة', percent: 10 }, dueAmount: 0,
    lastPayment: { amount: 350, date: daysFromNow(-16), method: 'تحويل بنكي' },
    history: [
      { id: 'p3', date: daysFromNow(-16), amount: 350, method: 'تحويل بنكي' },
      { id: 'p2', date: daysFromNow(-46), amount: 350, method: 'تحويل بنكي' },
      { id: 'p1', date: daysFromNow(-76), amount: 350, method: 'نقدًا في المركز' },
    ],
  },
  c2: {
    status: 'due', plan: 'اشتراك شهري', amount: 350,
    startDate: daysFromNow(-150), renewalDate: daysFromNow(3),
    discount: { label: 'خصم الأخوة', percent: 10 }, dueAmount: 350,
    lastPayment: { amount: 350, date: daysFromNow(-27), method: 'نقدًا في المركز' },
    history: [
      { id: 'p2', date: daysFromNow(-27), amount: 350, method: 'نقدًا في المركز' },
      { id: 'p1', date: daysFromNow(-57), amount: 350, method: 'نقدًا في المركز' },
    ],
  },
  c3: {
    status: 'active', plan: 'اشتراك شهري', amount: 300,
    startDate: daysFromNow(-40), renewalDate: daysFromNow(20),
    discount: null, dueAmount: 0,
    lastPayment: { amount: 300, date: daysFromNow(-10), method: 'تحويل بنكي' },
    history: [{ id: 'p1', date: daysFromNow(-10), amount: 300, method: 'تحويل بنكي' }],
  },
};