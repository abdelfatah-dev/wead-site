import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../styles/dashboard-tokens.css';
import { ChildProvider } from '../../context/ChildContext.jsx';
import Sidebar from '../../components/dashboard/Sidebar.jsx';
import Header from '../../components/dashboard/Header.jsx';
import ChildSwitcher from '../../components/dashboard/ChildSwitcher.jsx';
import styles from './DashboardLayout.module.css';

export default function DashboardLayout() {
  // على الشاشات المتوسطة تبدأ القائمة مطوية لتوفير مساحة للمحتوى
  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 1100);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  return (
    <ChildProvider>
      <div className={styles.shell}>
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onToggleCollapse={() => setCollapsed((c) => !c)}
          onCloseMobile={() => setMobileOpen(false)}
        />
        {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} aria-hidden="true" />}

        <div className={styles.body}>
          <Header onOpenMenu={() => setMobileOpen(true)} />
          <main className={styles.content}>
            <ChildSwitcher />
            <Outlet />
          </main>
        </div>
      </div>
    </ChildProvider>
  );
}