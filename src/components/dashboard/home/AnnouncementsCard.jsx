import { Megaphone } from 'lucide-react';
import Card from '../Card.jsx';
import Badge from '../Badge.jsx';
import EmptyState from '../EmptyState.jsx';
import { formatDate } from '../../../utils/format.js';
import { AUDIENCE_LABELS } from '../../../utils/labels.js';
import s from './home.module.css';

export default function AnnouncementsCard({ items, className }) {
  return (
    <Card title="الإعلانات" className={className}>
      {items.length === 0 ? (
        <EmptyState icon={Megaphone}>لا توجد إعلانات حاليًا.</EmptyState>
      ) : (
        <ul className={s.list}>
          {items.map((a) => (
            <li key={a.id} className={s.itemBody}>
              <div className={s.itemRow}>
                <h3 className={s.itemTitle}>{a.title}</h3>
                {a.important && <span className={s.importantDot} title="مهم" aria-label="إعلان مهم" />}
              </div>
              <p className={s.itemText} style={{ marginTop: 4 }}>{a.body}</p>
              <p className={s.itemMeta} style={{ marginTop: 6 }}>
                <Badge tone="neutral">{AUDIENCE_LABELS[a.audience]}</Badge> {formatDate(a.date)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}