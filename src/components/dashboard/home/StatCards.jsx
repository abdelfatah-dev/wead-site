import { BookOpen, CalendarCheck, Mic, Star } from 'lucide-react';
import s from './home.module.css';

function Stat({ icon: Icon, tone, label, value, hint }) {
  return (
    <div className={s.stat}>
      <span className={`${s.statIcon} ${tone === 'yellow' ? s.toneYellow : s.toneTeal}`}>
        <Icon size={22} aria-hidden="true" />
      </span>
      <div>
        <span className={s.statLabel}>{label}</span>
        <strong className={s.statValue}>{value}</strong>
        <span className={s.statHint}>{hint}</span>
      </div>
    </div>
  );
}

export default function StatCards({ progress, attendance }) {
  return (
    <div className={s.stats}>
      <Stat
        icon={BookOpen}
        label="الحفظ الحالي"
        value={progress?.currentMemorization ?? '—'}
        hint={progress?.revision ? `المراجعة: ${progress.revision}` : 'لا توجد بيانات'}
      />
      <Stat
        icon={CalendarCheck} tone="yellow" label="نسبة الحضور"
        value={attendance.percent !== null ? `${attendance.percent}%` : '—'}
        hint={attendance.recorded ? `من ${attendance.recorded} يومًا مسجلًا` : 'لا توجد أيام مسجلة'}
      />
      <Stat icon={Mic} label="عدد مرات التسميع" value={progress?.recitationsThisMonth ?? '—'} hint="هذا الشهر" />
      <Stat icon={Star} tone="yellow" label="آخر تقييم" value={progress?.lastRating ?? '—'} hint="من آخر تسميع" />
    </div>
  );
}
