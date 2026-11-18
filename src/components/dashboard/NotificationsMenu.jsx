import { useCallback, useRef, useState } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { useSelectedChild } from '../../context/ChildContext.jsx';
import { formatDate } from '../../utils/format.js';
import useDismiss from '../../hooks/useDismiss.js';
import EmptyState from './EmptyState.jsx';
import styles from './NotificationsMenu.module.css';

export default function NotificationsMenu() {
  const { notifications } = useSelectedChild();
  const [readIds, setReadIds] = useState([]);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const items = notifications.map((item) => ({ ...item, read: item.read || readIds.includes(item.id) }));
  const unread = items.filter((n) => !n.read).length;
  const markRead = (id) =>
    setReadIds((list) => (list.includes(id) ? list : [...list, id]));
  const markAll = () => setReadIds(notifications.map((item) => item.id));

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
