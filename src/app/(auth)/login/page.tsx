import { LoginForm } from '@/components/login/LoginForm';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  // Si ya está logueado, redirigir al dashboard
  const session = await auth();
  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-4">
      <LoginForm />
    </div>
  );
}
