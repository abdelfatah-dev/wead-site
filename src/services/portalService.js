import { parent } from '../data/parent.js';
import { children } from '../data/children.js';
import { progressByChild } from '../data/progress.js';
import { attendanceByChild } from '../data/attendance.js';
import { reportsByChild } from '../data/reports.js';
import { events } from '../data/schedule.js';
import { paymentsByChild } from '../data/payments.js';
import { announcements } from '../data/announcements.js';
import { notifications } from '../data/notifications.js';
import { daysFromNow } from '../data/_helpers.js';

/* ملاحظة للمستقبل: الدوال هنا متزامنة. عند الانتقال لـ API هتبقى async،
   وهنعدّل ChildContext لتحميل البيانات (loading/error) دون تغيير شكل الكروت. */

const audienceOf = (item) => (item.childId ? 'child' : item.circle ? 'circle' : 'general');

const isForChild = (item, child) => {
  const audience = audienceOf(item);
  if (audience === 'general') return true;
  return audience === 'child' ? item.childId === child.id : item.circle === child.circle;
};

const byDateDesc = (a, b) => b.date.localeCompare(a.date);
const byDateAsc = (a, b) => a.date.localeCompare(b.date);

/** الأيام غير المسجلة لا تدخل في الحساب (مش غياب تلقائي) */
function summarizeAttendance(records) {
  const count = (s) => records.filter((r) => r.status === s).length;
  const present = count('present');
  const late = count('late');
  const absent = count('absent');
  const recorded = present + late + absent;
  const percent = recorded ? Math.round(((present + late) / recorded) * 100) : null;
  return { present, late, absent, recorded, percent };
}

export const getParent = () => parent;
export const getChildren = () => children;
export const getNotifications = () => notifications.map((n) => ({ ...n }));

export function getChildOverview(childId) {
  const child = children.find((c) => c.id === childId);
  if (!child) return null;

  const progress = progressByChild[childId] ?? null;
  const reports = [...(reportsByChild[childId] ?? [])].sort(byDateDesc);
  const today = daysFromNow(0);

  return {
    child,
    progress,
    lastAchievement: progress?.lastAchievement ?? null,
    attendance: summarizeAttendance(attendanceByChild[childId] ?? []),
    lastReport: reports[0] ?? null,
    upcoming: events
      .filter((e) => e.date >= today && isForChild(e, child))
      .sort(byDateAsc)
      .slice(0, 4),
    announcements: announcements
      .filter((a) => isForChild(a, child))
      .map((a) => ({ ...a, audience: audienceOf(a) }))
      .sort(byDateDesc)
      .slice(0, 3),
    payments: paymentsByChild[childId] ?? null,
  };
}