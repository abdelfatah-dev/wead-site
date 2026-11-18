import styles from './Avatar.module.css';

const TONES = ['#0c4d61', '#0f7986', '#a8691a', '#4f6b2e'];

export default function Avatar({ name = '', size = 40 }) {
  const hash = [...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, fontSize: size * 0.42, background: TONES[hash % TONES.length] }}
      aria-hidden="true"
    >
      {name.trim().charAt(0)}
    </span>
  );
}