import { Trophy } from 'lucide-react';
import Card from '../Card.jsx';
import EmptyState from '../EmptyState.jsx';
import { formatDate } from '../../../utils/format.js';
import s from './home.module.css';

export default function AchievementCard({ achievement, className }) {
  return (
    <Card title="آخر إنجاز" className={className}>
      {achievement ? (
        <div className={s.achievement}>
          <span className={s.trophy}><Trophy size={24} aria-hidden="true" /></span>
          <div>
            <h3 className={s.itemTitle}>{achievement.title}</h3>
            <p className={s.itemMeta}>{formatDate(achievement.date)}</p>
            <p className={s.itemText}>{achievement.note}</p>
          </div>
        </div>
      ) : (
        <EmptyState icon={Trophy}>لا توجد إنجازات مسجلة بعد.</EmptyState>
      )}
    </Card>
  );
}