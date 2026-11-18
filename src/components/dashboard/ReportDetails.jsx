import { LEVEL_LABELS } from '../../utils/labels.js';
import { formatDate } from '../../utils/format.js';
import styles from './ReportDetails.module.css';

const List = ({ title, items }) => (
  <section>
    <h3 className={styles.sub}>{title}</h3>
    {items.length ? (
      <ul className={styles.list}>
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    ) : <p>لا توجد بيانات.</p>}
  </section>
);

export default function ReportDetails({ report, childName }) {
  return (
    <div className={styles.wrap}>
      <dl className={styles.meta}>
        <div><dt>الابن</dt><dd>{childName}</dd></div>
        <div><dt>المعلم</dt><dd>{report.teacher}</dd></div>
        <div><dt>التاريخ</dt><dd>{formatDate(report.date)}</dd></div>
      </dl>

      <div className={styles.levels}>
        {Object.entries(LEVEL_LABELS).map(([key, label]) => (
          <div key={key} className={styles.level}>
            <small>{label}</small>
            <strong>{report.levels[key]}</strong>
          </div>
        ))}
      </div>

      <div className={styles.cols}>
        <List title="نقاط القوة" items={report.strengths} />
        <List title="نقاط تحتاج إلى تحسين" items={report.improvements} />
      </div>

      <section>
        <h3 className={styles.sub}>ملاحظات المعلم</h3>
        <p className={styles.note}>{report.teacherNote}</p>
      </section>

      <List title="توصيات للفترة القادمة" items={report.recommendations} />
    </div>
  );
}
