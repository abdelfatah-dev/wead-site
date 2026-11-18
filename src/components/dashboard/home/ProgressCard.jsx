import Card from '../Card.jsx';
import EmptyState from '../EmptyState.jsx';
import { formatJuz } from '../../../utils/format.js';
import s from './home.module.css';

export default function ProgressCard({ progress, className }) {
  if (!progress) {
    return (
      <Card title="تقدم رحلة الحفظ" className={className}>
        <EmptyState>لا توجد بيانات حفظ بعد.</EmptyState>
      </Card>
    );
  }

  const percent = Math.min(100, Math.round((progress.memorizedJuz / progress.target.juz) * 100));

  return (
    <Card title="تقدم رحلة الحفظ" className={className}>
      <div className={s.percentRow}>
        <span className={s.bigPercent}>{percent}%</span>
        <span className={s.target}>الهدف: {progress.target.label}</span>
      </div>

      <div className={s.track} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="نسبة التقدم نحو الهدف">
        <div className={s.fill} style={{ width: `${percent}%` }} />
      </div>

      <div className={s.metaGrid}>
        <div className={s.metaItem}>
          <small>المحفوظ حاليًا</small>
          <strong>{formatJuz(progress.memorizedJuz)}</strong>
        </div>
        <div className={s.metaItem}>
          <small>المراجعة هذا الشهر</small>
          <strong>{formatJuz(progress.reviewJuz)}</strong>
        </div>
      </div>
    </Card>
  );
}