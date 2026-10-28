import styles from './BrandPanel.module.css';
import logo from '../../assets/logo.png';

function LogoSlot() {
  return (
    <div className={styles.logoBox}>
      <img src={logo} alt="شعار مركز واعد" className={styles.logoImg} />
    </div>
  );
}

function Ornament() {
  return (
    <svg
      className={styles.ornament}
      viewBox="0 0 410 615"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* دوائر باهتة */}
      <circle cx="201" cy="308" r="190" fill="none" stroke="#fff" strokeOpacity="0.05" />
      <circle cx="201" cy="308" r="150" fill="none" stroke="#fff" strokeOpacity="0.05" />
      {/* الشكل الخارجي */}
      <path
        d="M201 102 C 290 190 316 270 316 312 C 316 410 268 478 201 514 C 134 478 86 410 86 312 C 86 270 112 190 201 102 Z"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      {/* الشكل الداخلي */}
      <path
        d="M201 204 C 240 250 258 300 258 330 C 258 395 232 435 201 461 C 170 435 140 395 140 330 C 140 300 162 250 201 204 Z"
        fill="none"
        stroke="var(--color-yellow)"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function BrandPanel() {
  return (
    <section className={styles.panel} aria-label="هوية مركز واعد">
      <div className={styles.glow} aria-hidden="true" />
      <Ornament />

      <LogoSlot />

      <div className={styles.message}>
        <h2 className={styles.tagline}>«نبني جيلاً واعدًا»</h2>
        <p className={styles.sub}>تابع رحلة ابنك التعليمية مع واعد.</p>
      </div>

      <div className={styles.bottom}>
        <span>شراكة واعية بين البيت والمركز</span>
        <span className={styles.accent}>بوابة وليّ الأمر</span>
      </div>
    </section>
  );
}