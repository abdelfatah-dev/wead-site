import { useRef, useState } from 'react';
import { User, ArrowLeft } from 'lucide-react';
import TextField from '../components/ui/TextField.jsx';
import PasswordField from '../components/ui/PasswordField.jsx';
import Button from '../components/ui/Button.jsx';
import Notice from '../components/ui/Notice.jsx';
import TopBar from '../components/layout/TopBar.jsx';
import Footer from '../components/layout/Footer.jsx';
import BrandPanel from '../components/layout/BrandPanel.jsx';
import styles from './LoginPage.module.css';

function validate({ username, password }) {
  const errors = {};
  if (!username.trim()) errors.username = 'من فضلك أدخل اسم المستخدم أو رقم الهاتف.';
  if (!password) errors.password = 'من فضلك أدخل كلمة المرور.';
  return errors;
}

export default function LoginPage() {
  const [values, setValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    setNotice('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (found.username) return usernameRef.current?.focus();
    if (found.password) return passwordRef.current?.focus();

    // TODO: ربط المصادقة الفعلية لاحقًا. لا نُظهر نجاح الدخول قبل ذلك.
    setNotice('خدمة تسجيل الدخول غير مفعّلة بعد.');
  };

  return (
    <div className={styles.page}>
      <TopBar />

      <main className={styles.main}>
        <div className={styles.card}>
          <section className={styles.formSide}>
            <header className={styles.header}>
              <h1 className={styles.title}>أهلاً بك في مركز واعد</h1>
              <p className={styles.subtitle}>تابع رحلة ابنك التعليمية وتقدمه مع واعد.</p>
            </header>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <TextField
                ref={usernameRef}
                label="اسم المستخدم"
                icon={User}
                name="username"
                value={values.username}
                onChange={handleChange}
                error={errors.username}
                placeholder="أدخل اسم المستخدم أو رقم الهاتف"
                autoComplete="username"
              />

              <PasswordField
                ref={passwordRef}
                label="كلمة المرور"
                name="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="••••••••"
                autoComplete="current-password"
                labelExtra={
                  <a href="#" className={styles.forgot}>
                    نسيت كلمة المرور؟
                  </a>
                }
              />

              <Button type="submit" icon={ArrowLeft}>
                تسجيل الدخول
              </Button>

              {notice && (
                <p className={styles.status} role="status">
                  {notice}
                </p>
              )}
            </form>

            <div className={styles.noticeWrap}>
              <Notice title="تنبيه لولي الأمر:">
                يتم تزويدكم ببيانات الدخول مسبقاً من إدارة المركز. في حال وجود أي
                استفسار، يُرجى التواصل مع مشرف الحلقة أو الدعم الفني للمركز.
              </Notice>
            </div>
          </section>

          <BrandPanel />
        </div>
      </main>

      <Footer />
    </div>
  );
}