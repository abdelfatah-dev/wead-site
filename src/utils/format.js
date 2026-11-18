// أرقام لاتينية (2026) زي صفحة الـ Login
const LOCALE = 'ar-EG-u-nu-latn';
const toDate = (iso) => new Date(`${iso}T12:00:00`);

export function formatDate(iso, options = { day: 'numeric', month: 'long', year: 'numeric' }) {
  if (!iso) return '—';
  return new Intl.DateTimeFormat(LOCALE, options).format(toDate(iso));
}

export const formatNumber = (n) => new Intl.NumberFormat(LOCALE).format(n);
export const formatCurrency = (n) => `${formatNumber(n)} ج.م`;

export function formatJuz(n) {
  if (n == null) return '—';
  if (n === 0.5) return 'نصف جزء';
  if (!Number.isInteger(n)) return `${formatNumber(n)} جزء`;
  if (n === 1) return 'جزء واحد';
  if (n === 2) return 'جزءان';
  if (n <= 10) return `${n} أجزاء`;
  return `${n} جزءًا`;
}

export function formatAge(n) {
  if (n === 1) return 'سنة واحدة';
  if (n === 2) return 'سنتان';
  if (n <= 10) return `${n} سنوات`;
  return `${n} سنة`;
}