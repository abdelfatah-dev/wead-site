import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../../config/navigation.js';
import { useSelectedChild } from '../../context/ChildContext.jsx';
import Avatar from './Avatar.jsx';
import NotificationsMenu from './NotificationsMenu.jsx';
import styles from './Header.module.css';

export default function Header({ onOpenMenu }) {
  const { pathname } = useLocation();
  const { parent } = useSelectedChild();
  const current = NAV_ITEMS.find(
    (i) => pathname === i.to || (!i.end && pathname.startsWith(`${i.to}/`))
  );

  return (
    <header className={styles.header}>
      <button type="button" className={styles.menuBtn} onClick={onOpenMenu} aria-label="فتح القائمة">
        <Menu size={22} aria-hidden="true" />
      </button>

      <h1 className={styles.title}>{current?.label ?? 'الرئيسية'}</h1>

      <div className={styles.actions}>
        <NotificationsMenu />
        <Link to="/dashboard/settings" className={styles.account} aria-label="إعدادات الحساب">
          <Avatar name={parent?.name || 'ولي الأمر'} size={38} />
          <span className={styles.accountText}>
            <strong>{parent?.name || 'ولي الأمر'}</strong>
            <small>ولي أمر</small>
          </span>
        </Link>
      </div>
    </header>
  );
}
