import Card from '../Card.jsx';
import Avatar from '../Avatar.jsx';
import { formatAge } from '../../../utils/format.js';
import s from './home.module.css';

export default function ChildProfileCard({ child, className }) {
  const rows = [
    ['العمر', formatAge(child.age)],
    ['الحلقة', child.circle],
    ['المعلم', child.teacher],
    ['المستوى الحالي', child.level],
  ];
  return (
    <Card title="بطاقة الابن" className={className}>
      <div className={s.profileTop}>
        <Avatar name={child.name} size={56} />
        <strong className={s.profileName}>{child.name}</strong>
      </div>
      <dl className={s.dl}>
        {rows.map(([label, value]) => (
          <div key={label} className={s.dlRow}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}