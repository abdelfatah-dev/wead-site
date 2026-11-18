import Card from '../Card.jsx';
import EmptyState from '../EmptyState.jsx';
import s from './home.module.css';

export default function ProgressCard({ progress, className }) {
  if (!progress) {
    return (
      <Card title="تقدم رحلة الحفظ" className={className}>
        <EmptyState>لا توجد بيانات حفظ بعد.</EmptyState>
      </Card>
    );
  }

  return (
    <Card title="تقدم رحلة الحفظ" className={className}>
      <div className={s.metaGrid}>
        <div className={s.metaItem}>
          <small>الحفظ الجديد</small>
          <strong>{progress.currentMemorization || '—'}</strong>
        </div>
        <div className={s.metaItem}>
          <small>المراجعة</small>
          <strong>{progress.revision || '—'}</strong>
        </div>
        <div className={s.metaItem}>
          <small>تسميعات هذا الشهر</small>
          <strong>{progress.recitationsThisMonth ?? 0}</strong>
        </div>
        <div className={s.metaItem}>
          <small>آخر تقييم</small>
          <strong>{progress.lastRating || '—'}</strong>
        </div>
      </div>
    </Card>
  );
}
