import styles from './Button.module.css';

export default function Button({ children, icon: Icon, ...props }) {
  return (
    <button className={styles.button} {...props}>
      <span>{children}</span>
      {Icon && <Icon size={20} aria-hidden="true" />}
    </button>
  );
}