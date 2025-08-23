// app/dashboard/layout.tsx
import { requireAuth } from '@/lib/sessions';
import DashboardLayout from '@/components/shared/DashboardLayout';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAuth();

  return <DashboardLayout user={user}>{children}</DashboardLayout>;
}
