import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronsLeft, ChevronsRight, LogOut, X } from 'lucide-react';
import { NAV_ITEMS } from '../../config/navigation.js';
import styles from './Sidebar.module.css';

export default function Sidebar({ collapsed, mobileOpen, onToggleCollapse, onCloseMobile }) {
  const navigate = useNavigate();
  const CollapseIcon = collapsed ? ChevronsLeft : ChevronsRight;

  const classes = [styles.sidebar, collapsed && styles.collapsed, mobileOpen && styles.open]
    .filter(Boolean)
    .join(' ');

  return (
    <aside className={classes} aria-label="القائمة الرئيسية">
      <div className={styles.brand}>
        {/* TODO: استبدال النص بالشعار الحقيقي بعد الاتفاق على نسخته للخلفية الداكنة */}
        <div className={styles.brandText}>
          <strong>مركز واعد</strong>
          <small>بوابة وليّ الأمر</small>
        </div>

        <button
          type="button"
          className={`${styles.iconBtn} ${styles.desktopOnly}`}
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'توسيع القائمة' : 'طي القائمة'}
          aria-expanded={!collapsed}
        >
          <CollapseIcon size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={`${styles.iconBtn} ${styles.mobileOnly}`}
          onClick={onCloseMobile}
          aria-label="إغلاق القائمة"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="التنقل">
        <ul className={styles.list}>
          {NAV_ITEMS.map(({ key, label, to, icon: Icon, end }) => (
            <li key={key}>
              <NavLink
                to={to}
                end={end}
                data-tooltip={label}
                aria-label={collapsed ? label : undefined}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                <Icon size={20} className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        {/* لا توجد مصادقة فعلية بعد: الخروج يرجّع لصفحة الدخول فقط */}
        <button
          type="button"
          className={styles.link}
          data-tooltip="تسجيل الخروج"
          aria-label={collapsed ? 'تسجيل الخروج' : undefined}
          onClick={() => navigate('/')}
        >
          <LogOut size={20} className={styles.icon} aria-hidden="true" />
          <span className={styles.label}>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}