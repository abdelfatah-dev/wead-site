import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getParentDashboard } from '../services/portalService.js';

const ChildContext = createContext(null);
const STORAGE_KEY = 'waed:selectedChild';
const EMPTY_LIST = [];

export function ChildProvider({ children }) {
  const [dashboard, setDashboard] = useState(null);
  const [selectedId, setSelectedId] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getParentDashboard()
      .then(setDashboard)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const kids = useMemo(() => dashboard?.children ?? EMPTY_LIST, [dashboard]);
  const effectiveSelectedId = kids.some((kid) => kid.id === selectedId)
    ? selectedId
    : kids[0]?.id ?? null;

  const selectChild = useCallback((id) => {
    setSelectedId(id);
    localStorage.setItem(STORAGE_KEY, id);
  }, []);

  const child = useMemo(
    () => kids.find((kid) => kid.id === effectiveSelectedId) ?? null,
    [kids, effectiveSelectedId]
  );
  const overview = useMemo(() => (child ? { child, ...child.overview } : null), [child]);
  const value = useMemo(() => ({
    kids,
    child,
    overview,
    parent: dashboard?.parent ?? null,
    notifications: dashboard?.notifications ?? EMPTY_LIST,
    loading,
    error,
    selectChild,
  }), [kids, child, overview, dashboard, loading, error, selectChild]);

  return <ChildContext.Provider value={value}>{children}</ChildContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSelectedChild() {
  const context = useContext(ChildContext);
  if (!context) throw new Error('useSelectedChild must be used inside ChildProvider');
  return context;
}
