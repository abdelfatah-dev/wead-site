import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PasswordField from '../components/ui/PasswordField.jsx';
import Button from '../components/ui/Button.jsx';
import Notice from '../components/ui/Notice.jsx';
import TopBar from '../components/layout/TopBar.jsx';
import Footer from '../components/layout/Footer.jsx';
import BrandPanel from '../components/layout/BrandPanel.jsx';
import { changePassword } from '../services/api.js';
import styles from './LoginPage.module.css';

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setNotice('');
  };

  const submit = async (event) => {
    event.preventDefault();
    if (values.newPassword.length < 8) return setNotice('كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف.');
    if (values.newPassword !== values.confirmPassword) return setNotice('تأكيد كلمة المرور غير مطابق.');

    try {
      setLoading(true);
      await changePassword(values.currentPassword, values.newPassword);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      setNotice(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <TopBar />
      <main className={styles.main}>
        <div className={styles.card}>
          <section className={styles.formSide}>
            <header className={styles.header}>
              <h1 className={styles.title}>غيّر كلمة المرور المؤقتة</h1>
              <p className={styles.subtitle}>اختر كلمة مرور جديدة لحماية حسابك قبل متابعة بيانات الأبناء.</p>
            </header>
            <form className={styles.form} onSubmit={submit}>
              <PasswordField label="كلمة المرور المؤقتة" name="currentPassword" value={values.currentPassword} onChange={update} autoComplete="current-password" />
              <PasswordField label="كلمة المرور الجديدة" name="newPassword" value={values.newPassword} onChange={update} autoComplete="new-password" />
              <PasswordField label="تأكيد كلمة المرور" name="confirmPassword" value={values.confirmPassword} onChange={update} autoComplete="new-password" />
              <Button type="submit" icon={ArrowLeft} disabled={loading}>
                {loading ? 'جاري الحفظ...' : 'حفظ كلمة المرور'}
              </Button>
              {notice && <p className={styles.status} role="alert">{notice}</p>}
            </form>
            <div className={styles.noticeWrap}>
              <Notice title="مهم">لن تتمكن من فتح لوحة المتابعة قبل تغيير كلمة المرور المؤقتة.</Notice>
            </div>
          </section>
          <BrandPanel />
        </div>
      </main>
      <Footer />
    </div>
  );
}
