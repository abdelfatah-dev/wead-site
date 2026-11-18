import { CalendarX } from 'lucide-react';
import Card from '../Card.jsx';
import EmptyState from '../EmptyState.jsx';
import s from './home.module.css';

export default function AttendanceCard({ attendance, className }) {
  if (!attendance.recorded) {
    return (
      <Card title="ملخص الحضور" className={className}>
        <EmptyState icon={CalendarX}>لا توجد أيام حضور مسجلة بعد.</EmptyState>
      </Card>
    );
  }

  const items = [
    ['أيام الحضور', attendance.present, s.good],
    ['أيام الغياب', attendance.absent, s.bad],
    ['مرات التأخير', attendance.late, s.warn],
    ['نسبة الحضور', `${attendance.percent}%`, s.main],
  ];

  return (
    <Card title="ملخص الحضور" className={className}>
      <div className={s.attGrid}>
        {items.map(([label, value, tone]) => (
          <div key={label} className={s.attItem}>
            <small>{label}</small>
            <strong className={tone}>{value}</strong>
          </div>
        ))}
      </div>
      <p className={s.footnote}>الأيام التي لم تُسجَّل لها حالة لا تُحسب غيابًا.</p>
    </Card>
  );
}