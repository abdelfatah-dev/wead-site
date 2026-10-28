import styles from '../../pages/LoginPage.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>جميع الحقوق محفوظة لمركز واعد © 2026</span>
      <nav className={styles.footerLinks} aria-label="روابط التذييل">
        <a href="#">سياسة الخصوصية</a>
        <a href="#">شروط الاستخدام</a>
        <a href="#">مساعدة الدخول</a>
      </nav>
    </footer>
  );
}