import { useState } from 'react';
import { CreditCard } from 'lucide-react';
import Card from '../Card.jsx';
import Badge from '../Badge.jsx';
import EmptyState from '../EmptyState.jsx';
import Modal from '../Modal.jsx';
import { formatCurrency, formatDate } from '../../../utils/format.js';
import { SUBSCRIPTION_STATUS } from '../../../utils/labels.js';
import s from './home.module.css';

function Rows({ rows }) {
  return (
    <dl className={`${s.dl} ${s.payRows}`}>
      {rows.map(([label, value, className]) => (
        <div key={label} className={s.dlRow}>
          <dt>{label}</dt>
          <dd className={className}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function PaymentCard({ payments, childName, className }) {
  const [open, setOpen] = useState(false);

  if (!payments) {
    return (
      <Card title="ملخص المدفوعات" className={className}>
        <EmptyState icon={CreditCard}>لا توجد بيانات اشتراك.</EmptyState>
      </Card>
    );
  }

  const status = SUBSCRIPTION_STATUS[payments.status];

  return (
    <Card title="ملخص المدفوعات" className={className} action={<Badge tone={status.tone}>{status.label}</Badge>}>
      <Rows
        rows={[
          ['قيمة الاشتراك', formatCurrency(payments.amount)],
          ['موعد التجديد', formatDate(payments.renewalDate)],
          ['آخر دفعة', formatDate(payments.lastPayment?.date)],
          ['المبلغ المستحق', payments.dueAmount > 0 ? formatCurrency(payments.dueAmount) : 'لا يوجد', payments.dueAmount > 0 ? s.due : ''],
        ]}
      />

      <button type="button" className={s.btn} onClick={() => setOpen(true)}>
        عرض التفاصيل
      </button>

      {open && (
        <Modal title={`تفاصيل اشتراك ${childName}`} onClose={() => setOpen(false)}>
          <div className={s.stack}>
            <Rows
              rows={[
                ['نوع الاشتراك', payments.plan],
                ['القيمة', formatCurrency(payments.amount)],
                ['تاريخ البداية', formatDate(payments.startDate)],
                ['موعد التجديد', formatDate(payments.renewalDate)],
                ['الخصم', payments.discount ? `${payments.discount.label} (${payments.discount.percent}%)` : 'لا يوجد'],
                ['المبلغ المستحق', payments.dueAmount > 0 ? formatCurrency(payments.dueAmount) : 'لا يوجد', payments.dueAmount > 0 ? s.due : ''],
              ]}
            />
            <div>
              <h3 className={s.subTitle}>سجل المدفوعات</h3>
              <div className={s.tableWrap}>
                <table className={s.table}>
                  <thead>
                    <tr><th>التاريخ</th><th>المبلغ</th><th>طريقة الدفع</th></tr>
                  </thead>
                  <tbody>
                    {payments.history.map((p) => (
                      <tr key={p.id}>
                        <td>{formatDate(p.date)}</td>
                        <td>{formatCurrency(p.amount)}</td>
                        <td>{p.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Card>
  );
}