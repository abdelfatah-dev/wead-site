import { useCallback, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useSelectedChild } from '../../context/ChildContext.jsx';
import useDismiss from '../../hooks/useDismiss.js';
import Avatar from './Avatar.jsx';
import styles from './ChildSwitcher.module.css';

export default function ChildSwitcher() {
  const { kids, child, selectChild } = useSelectedChild();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  if (!child) return null;

  return (
    <div className={styles.wrap} ref={ref}>
      <span className={styles.caption}>الابن المحدد</span>

      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Avatar name={child.name} size={44} />
        <span className={styles.info}>
          <strong>{child.name}</strong>
          <small>{child.circle}</small>
        </span>
        <ChevronDown size={18} className={`${styles.chev} ${open ? styles.chevOpen : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <ul className={styles.list} role="listbox" aria-label="اختيار الابن">
          {kids.map((k) => {
            const selected = k.id === child.id;
            return (
              <li key={k.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`${styles.option} ${selected ? styles.selected : ''}`}
                  onClick={() => {
                    selectChild(k.id);
                    close();
                  }}
                >
                  <Avatar name={k.name} size={36} />
                  <span className={styles.info}>
                    <strong>{k.name}</strong>
                    <small>{k.circle}</small>
                  </span>
                  {selected && <Check size={18} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}