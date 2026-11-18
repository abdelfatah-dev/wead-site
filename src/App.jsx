import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx';
import DashboardHome from './pages/dashboard/DashboardHome.jsx';
import PlaceholderPage from './pages/dashboard/PlaceholderPage.jsx';
import { NAV_ITEMS } from './config/navigation.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          {/* باقي الصفحات: واجهة مؤقتة صريحة لحد ما نبنيها في مراحلها */}
          {NAV_ITEMS.filter((i) => !i.end).map((item) => (
            <Route
              key={item.key}
              path={item.to.replace('/dashboard/', '')}
              element={<PlaceholderPage item={item} />}
            />
          ))}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}