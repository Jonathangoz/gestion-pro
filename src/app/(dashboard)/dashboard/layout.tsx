import { requireAuth } from '@/lib/sessions';
import { LogOutButton } from '@/components/login/Logout';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAuth();

  return (
    <div className="min-h-screen bg-slate-900">
      <nav className="bg-slate-800 p-4">
        <div className="flex justify-between items-center">
          <h1>Dashboard - {user.name}</h1>
          <div className="flex items-center gap-4">
            <span>Rol: {user.role}</span>
            <LogOutButton />
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}