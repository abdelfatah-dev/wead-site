const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('waed_user'));
  } catch {
    return null;
  }
}

export const hasSession = () => Boolean(localStorage.getItem('waed_token'));

export function saveSession(data) {
  localStorage.setItem('waed_token', data.token);
  localStorage.setItem('waed_refresh_token', data.refreshToken);
  localStorage.setItem('waed_user', JSON.stringify(data.user));
}

export function clearSession() {
  localStorage.removeItem('waed_token');
  localStorage.removeItem('waed_refresh_token');
  localStorage.removeItem('waed_user');
  localStorage.removeItem('waed:selectedChild');
}

async function request(path, options = {}) {
  const token = localStorage.getItem('waed_token');
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) clearSession();
    throw new Error(result.message || 'تعذر الاتصال بالخادم. حاول مرة أخرى.');
  }
  return result.data;
}

export const login = (phone, password) => request('/auth/login', {
  method: 'POST',
  body: JSON.stringify({ phone, password }),
});

export async function logout() {
  try {
    await request('/auth/logout', { method: 'POST' });
  } catch {
    // نمسح الجلسة محليًا حتى لو انتهت صلاحية التوكن على الخادم.
  } finally {
    clearSession();
  }
}

export async function changePassword(currentPassword, newPassword) {
  const data = await request('/auth/change-password', {
    method: 'PATCH',
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  saveSession(data);
  return data;
}

export const getParentDashboard = () => request('/parent/dashboard');
