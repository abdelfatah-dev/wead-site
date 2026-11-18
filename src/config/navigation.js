import {
  LayoutDashboard, Users, BookOpenCheck, CalendarCheck, CalendarDays,
  CreditCard, FileText, MessageCircle, Megaphone, Settings,
} from 'lucide-react';

/** مصدر واحد للقائمة الجانبية وعناوين الصفحات. phase = المرحلة اللي هتتبني فيها الصفحة */
export const NAV_ITEMS = [
  { key: 'home', label: 'الرئيسية', to: '/dashboard', icon: LayoutDashboard, end: true },
  { key: 'children', label: 'أبنائي', to: '/dashboard/children', icon: Users, phase: 2 },
  { key: 'journey', label: 'رحلة الحفظ', to: '/dashboard/memorization', icon: BookOpenCheck, phase: 2 },
  { key: 'attendance', label: 'الحضور والغياب', to: '/dashboard/attendance', icon: CalendarCheck, phase: 3 },
  { key: 'schedule', label: 'الجدول والأنشطة', to: '/dashboard/schedule', icon: CalendarDays, phase: 3 },
  { key: 'payments', label: 'الاشتراكات والمدفوعات', to: '/dashboard/payments', icon: CreditCard, phase: 4 },
  { key: 'reports', label: 'التقارير', to: '/dashboard/reports', icon: FileText, phase: 2 },
  { key: 'contact', label: 'التواصل مع المركز', to: '/dashboard/contact', icon: MessageCircle, phase: 4 },
  { key: 'announcements', label: 'الإعلانات والتنبيهات', to: '/dashboard/announcements', icon: Megaphone, phase: 3 },
  { key: 'settings', label: 'إعدادات الحساب', to: '/dashboard/settings', icon: Settings, phase: 4 },
];