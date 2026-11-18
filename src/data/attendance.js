import { daysFromNow } from './_helpers.js';

// [عدد الأيام قبل اليوم, الحالة]. اليوم غير المسجل مش موجود هنا = مش بيتحسب غياب
const toRecords = (rows) =>
  rows.map(([offset, status]) => ({ date: daysFromNow(offset), status }));

export const attendanceByChild = {
  c1: toRecords([
    [-1, 'present'], [-3, 'present'], [-5, 'present'], [-8, 'late'],
    [-10, 'present'], [-12, 'present'], [-15, 'absent'], [-17, 'present'],
    [-19, 'present'], [-22, 'present'], [-24, 'present'], [-26, 'present'],
  ]),
  c2: toRecords([
    [-1, 'present'], [-3, 'absent'], [-5, 'present'], [-8, 'present'],
    [-10, 'late'], [-12, 'late'], [-15, 'present'], [-17, 'absent'],
    [-19, 'present'], [-22, 'present'],
  ]),
  c3: toRecords([[-1, 'present'], [-3, 'present'], [-5, 'present'], [-8, 'present']]),
};