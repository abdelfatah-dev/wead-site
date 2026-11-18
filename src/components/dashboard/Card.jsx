import styles from './Card.module.css';

export default function Card({ title, action, className = '', children }) {
  return (
    <section className={`${styles.card} ${className}`}>
      {(title || action) && (
        <header className={styles.head}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}