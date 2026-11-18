import { useSelectedChild } from '../../../context/ChildContext.jsx';
import s from './home.module.css';

export default function WelcomeSection({ child }) {
  const { parent } = useSelectedChild();
  return (
    <section className={s.welcome}>
      <h2 className={s.welcomeTitle}>أهلاً بك، {parent?.name || 'ولي الأمر'}</h2>
      <p className={s.welcomeSub}>
        تعرض هذه الصفحة متابعة الابن <span className={s.hl}>{child.name}</span> في {child.circle}.
      </p>
    </section>
  );
}
