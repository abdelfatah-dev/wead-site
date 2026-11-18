import { Inbox } from 'lucide-react';
import styles from './EmptyState.module.css';

export default function EmptyState({ icon: Icon = Inbox, children }) {
  return (
    <div className={styles.empty}>
      <Icon size={24} aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}