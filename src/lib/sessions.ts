// utils/session.ts - Utilidades para manejar sesión
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

export async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }
  return session.user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  if (user.role !== 'ADMIN') {
    redirect('/dashboard'); // o página de acceso denegado
  }
  return user;
}

// Ejemplo de uso en componente
export async function checkUserRole() {
  const session = await auth();
  return {
    isLoggedIn: !!session?.user,
    isAdmin: session?.user?.role === 'ADMIN',
    user: session?.user,
  };
}
