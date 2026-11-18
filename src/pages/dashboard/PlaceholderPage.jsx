import { Hammer } from 'lucide-react';
import Card from '../../components/dashboard/Card.jsx';
import EmptyState from '../../components/dashboard/EmptyState.jsx';

const PHASES = { 2: 'الثانية', 3: 'الثالثة', 4: 'الرابعة' };

export default function PlaceholderPage({ item }) {
  return (
    <Card title={item.label}>
      <EmptyState icon={Hammer}>
        هذه الصفحة قيد التطوير، وستُضاف في المرحلة {PHASES[item.phase]}.
      </EmptyState>
    </Card>
  );
}