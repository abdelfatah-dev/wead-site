const pad = (n) => String(n).padStart(2, '0');

/** يرجع تاريخ بصيغة YYYY-MM-DD بعد/قبل n يوم من اليوم */
export function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}