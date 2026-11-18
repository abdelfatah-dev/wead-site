import { useState } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import Card from '../Card.jsx';
import Badge from '../Badge.jsx';
import EmptyState from '../EmptyState.jsx';
import Modal from '../Modal.jsx';
import ReportDetails from '../ReportDetails.jsx';
import { formatDate } from '../../../utils/format.js';
import s from './home.module.css';

const Chips = ({ items, tone }) => (
  <ul className={s.chips}>
    {items.map((t) => (
      <li key={t} className={`${s.chip} ${tone === 'good' ? s.chipGood : s.chipImprove}`}>{t}</li>
    ))}
  </ul>
);

export default function ReportCard({ report, childName, className }) {
  const [open, setOpen] = useState(false);

  return (
    <Card title="آخر تقرير من المعلم" className={className}>
      {report ? (
        <>
          <div className={s.reportMeta}>
            <span>{formatDate(report.date)}</span>
            <span>المعلم: {report.teacher}</span>
            <Badge tone="success">مستوى الحفظ: {report.levels.memorization}</Badge>
          </div>

          <p className={s.note}>{report.teacherNote}</p>

          <div className={s.twoCols}>
            <div>
              <h3 className={s.subTitle}>نقاط القوة</h3>
              <Chips items={report.strengths} tone="good" />
            </div>
            <div>
              <h3 className={s.subTitle}>نقاط تحتاج إلى تحسين</h3>
              <Chips items={report.improvements} tone="improve" />
            </div>
          </div>

          <button type="button" className={s.btn} onClick={() => setOpen(true)}>
            عرض التقرير كاملًا
            <ArrowLeft size={16} aria-hidden="true" />
          </button>

          {open && (
            <Modal title="التقرير الكامل" onClose={() => setOpen(false)}>
              <ReportDetails report={report} childName={childName} />
            </Modal>
          )}
        </>
      ) : (
        <EmptyState icon={FileText}>لا توجد تقارير من المعلم حتى الآن.</EmptyState>
      )}
    </Card>
  );
}