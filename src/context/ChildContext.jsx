import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { getChildren, getChildOverview } from '../services/portalService.js';

const ChildContext = createContext(null);
const STORAGE_KEY = 'waed:selectedChild';

export function ChildProvider({ children }) {
  const kids = useMemo(() => getChildren(), []);

  const [selectedId, setSelectedId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && kids.some((k) => k.id === saved)) return saved;
    } catch {
      /* التخزين غير متاح: نكمل بدونه */
    }
    return kids[0]?.id ?? null;
  });

  const selectChild = useCallback((id) => {
    setSelectedId(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* تجاهل */
    }
  }, []);

  const overview = useMemo(
    () => (selectedId ? getChildOverview(selectedId) : null),
    [selectedId]
  );

  const value = useMemo(
    () => ({ kids, child: overview?.child ?? null, overview, selectChild }),
    [kids, overview, selectChild]
  );

  return <ChildContext.Provider value={value}>{children}</ChildContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export function useSelectedChild() {
  const ctx = useContext(ChildContext);
  if (!ctx) throw new Error('useSelectedChild must be used inside ChildProvider');
  return ctx;
}