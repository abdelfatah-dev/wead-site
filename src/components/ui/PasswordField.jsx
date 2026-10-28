import { forwardRef, useState } from 'react';
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';
import TextField from './TextField.jsx';
import styles from './TextField.module.css';

const PasswordField = forwardRef(function PasswordField(props, ref) {
  const [visible, setVisible] = useState(false);
  const ToggleIcon = visible ? EyeOff : Eye;

  return (
    <TextField
      ref={ref}
      icon={LockKeyhole}
      type={visible ? 'text' : 'password'}
      endAction={
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
        >
          <ToggleIcon size={18} aria-hidden="true" />
        </button>
      }
      {...props}
    />
  );
});

export default PasswordField;