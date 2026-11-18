import { useCallback, useRef, useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { getNotifications } from '../../services/portalService.js';
import { formatDate } from '../../utils/format.js';
import useDismiss from '../../hooks/useDismiss.js';
import EmptyState from './EmptyState.jsx';
import styles from './NotificationsMenu.module.css';

export default function NotificationsMenu() {
  const [items, setItems] = useState(() => getNotifications());
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const unread = items.filter((n) => !n.read).length;
  const markRead = (id) =>
    setItems((list) => list.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const markAll = () => setItems((list) => list.map((n) => ({ ...n, read: true })));

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={unread ? `الإشعارات، ${unread} غير مقروءة` : 'الإشعارات'}
      >
        <Bell size={20} aria-hidden="true" />
        {unread > 0 && <span className={styles.count}>{unread}</span>}
      </button>

      {open && (
        <div className={styles.panel} role="region" aria-label="الإشعارات">
          <header className={styles.head}>
            <strong>الإشعارات</strong>
            {unread > 0 && (
              <button type="button" className={styles.markAll} onClick={markAll}>
                تعليم الكل كمقروء
              </button>
            )}
          </header>

          {items.length === 0 ? (
            <EmptyState icon={BellOff}>لا توجد إشعارات حاليًا</EmptyState>
          ) : (
            <ul className={styles.list}>
              {items.map((n) => (
                <li key={n.id}>
                  <button
                    type="button"
                    className={`${styles.item} ${n.read ? '' : styles.unread}`}
                    onClick={() => markRead(n.id)}
                  >
                    <span className={styles.dot} aria-hidden="true" />
                    <span>
                      <span className={styles.text}>{n.text}</span>
                      <small className={styles.date}>{formatDate(n.date)}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}