import { CalendarDays } from 'lucide-react';
import Card from '../Card.jsx';
import Badge from '../Badge.jsx';
import EmptyState from '../EmptyState.jsx';
import { formatDate } from '../../../utils/format.js';
import { EVENT_TYPES } from '../../../utils/labels.js';
import s from './home.module.css';

export default function UpcomingCard({ events, className }) {
  return (
    <Card title="المواعيد القادمة" className={className}>
      {events.length === 0 ? (
        <EmptyState icon={CalendarDays}>لا توجد مواعيد قادمة.</EmptyState>
      ) : (
        <ul className={s.list}>
          {events.map((e) => (
            <li key={e.id} className={s.item}>
              <div className={s.dateBox}>
                <b>{formatDate(e.date, { day: 'numeric' })}</b>
                <span>{formatDate(e.date, { month: 'short' })}</span>
              </div>
              <div className={s.itemBody}>
                <div className={s.itemRow}>
                  <h3 className={s.itemTitle}>{e.title}</h3>
                  <Badge tone="info">{EVENT_TYPES[e.type]}</Badge>
                </div>
                <p className={s.itemMeta}>
                  {formatDate(e.date, { weekday: 'long' })} • {e.time} • {e.place}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}