import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './Modal.module.css';

export default function Modal({ title, onClose, children }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);

  // نحدّث المرجع بعد الـ render (مش أثناءه) عشان نحتفظ بآخر نسخة من onClose
  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    const previous = document.activeElement;
    dialogRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && closeRef.current();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, []);

  return createPortal(
    <div className={styles.backdrop} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={dialogRef} className={styles.dialog} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1}>
        <header className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <button type="button" className={styles.close} onClick={onClose} aria-label="إغلاق">
            <X size={20} aria-hidden="true" />
          </button>
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body
  );
}