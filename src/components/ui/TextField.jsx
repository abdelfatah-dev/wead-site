import { forwardRef, useId } from 'react';
import styles from './TextField.module.css';

/**
 * حقل إدخال عام: تسمية + أيقونة + رسالة خطأ.
 * labelExtra: عنصر يظهر في نفس سطر التسمية (مثل رابط "نسيت كلمة المرور؟")
 * endAction: عنصر في نهاية الحقل (مثل زر إظهار كلمة المرور)
 */
const TextField = forwardRef(function TextField(
  { label, icon: Icon, error, labelExtra, endAction, ...inputProps },
  ref
) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {labelExtra}
      </div>

      <div className={`${styles.control} ${error ? styles.invalid : ''}`}>
        {Icon && <Icon className={styles.icon} size={18} aria-hidden="true" />}
        <input
          ref={ref}
          id={id}
          className={styles.input}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          {...inputProps}
        />
        {endAction}
      </div>

      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default TextField;