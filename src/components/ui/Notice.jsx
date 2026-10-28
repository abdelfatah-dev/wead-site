import { Info } from 'lucide-react';
import styles from './Notice.module.css';

export default function Notice({ title, children }) {
  return (
    <aside className={styles.notice}>
      <Info className={styles.icon} size={16} aria-hidden="true" />
      <p className={styles.text}>
        <strong>{title}</strong> {children}
      </p>
    </aside>
  );
}