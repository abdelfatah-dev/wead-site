import { useSelectedChild } from '../../context/ChildContext.jsx';
import Card from '../../components/dashboard/Card.jsx';
import EmptyState from '../../components/dashboard/EmptyState.jsx';
import WelcomeSection from '../../components/dashboard/home/WelcomeSection.jsx';
import StatCards from '../../components/dashboard/home/StatCards.jsx';
import ChildProfileCard from '../../components/dashboard/home/ChildProfileCard.jsx';
import ProgressCard from '../../components/dashboard/home/ProgressCard.jsx';
import AchievementCard from '../../components/dashboard/home/AchievementCard.jsx';
import ReportCard from '../../components/dashboard/home/ReportCard.jsx';
import AttendanceCard from '../../components/dashboard/home/AttendanceCard.jsx';
import UpcomingCard from '../../components/dashboard/home/UpcomingCard.jsx';
import AnnouncementsCard from '../../components/dashboard/home/AnnouncementsCard.jsx';
import PaymentCard from '../../components/dashboard/home/PaymentCard.jsx';
import s from '../../components/dashboard/home/home.module.css';

export default function DashboardHome() {
  const { overview, loading, error } = useSelectedChild();

  if (loading) {
    return <Card title="الرئيسية"><EmptyState>جاري تحميل بيانات الأبناء...</EmptyState></Card>;
  }

  if (error) {
    return <Card title="الرئيسية"><EmptyState>{error}</EmptyState></Card>;
  }

  if (!overview) {
    return (
      <Card title="الرئيسية">
        <EmptyState>لا يوجد أبناء مسجلون على هذا الحساب.</EmptyState>
      </Card>
    );
  }

  const { child, progress, attendance, lastAchievement, lastReport, upcoming, announcements, payments } = overview;

  return (
    <div className={s.page}>
      <WelcomeSection child={child} />
      <StatCards progress={progress} attendance={attendance} />

      <div className={s.grid}>
        <ChildProfileCard className={s.span4} child={child} />
        <ProgressCard className={s.span4} progress={progress} />
        <AchievementCard className={s.span4} achievement={lastAchievement} />

        <ReportCard className={s.span8} report={lastReport} childName={child.name} />
        <AttendanceCard className={s.span4} attendance={attendance} />

        <UpcomingCard className={s.span4} events={upcoming} />
        <AnnouncementsCard className={s.span4} items={announcements} />
        <PaymentCard className={s.span4} payments={payments} childName={child.name} />
      </div>
    </div>
  );
}
