import { getParent } from '../../../services/portalService.js';
import s from './home.module.css';

export default function WelcomeSection({ child }) {
  const parent = getParent();
  return (
    <section className={s.welcome}>
      <h2 className={s.welcomeTitle}>أهلاً بك، {parent.name}</h2>
      <p className={s.welcomeSub}>
        تعرض هذه الصفحة متابعة الابن <span className={s.hl}>{child.name}</span> في {child.circle}.
      </p>
    </section>
  );
}