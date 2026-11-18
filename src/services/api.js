const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function login(phone, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || 'تعذر تسجيل الدخول. حاول مرة أخرى.');
  return result.data;
}
