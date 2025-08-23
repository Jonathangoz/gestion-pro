// 4. src/lib/session-utils.ts - Utilidades para Server Components y Actions
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { cache } from 'react';

// Cache para Server Components - evita múltiples llamadas en el mismo render
export const getCurrentSession = cache(async () => {
  return await auth();
});

export const getCurrentUser = cache(async () => {
  const session = await getCurrentSession();
  return session?.user;
});

// Para Server Actions y Components que requieren autenticación
export async function requireAuth() {
  const session = await getCurrentSession();
  if (!session?.user) {
    redirect('/login');
  }
  return session.user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  if (user.role !== 'ADMIN') {
    redirect('/dashboard?error=access_denied');
  }
  return user;
}

// Verificar permisos sin redirección
export async function checkPermissions() {
  const session = await getCurrentSession();
  return {
    isLoggedIn: !!session?.user,
    isAdmin: session?.user?.role === 'ADMIN',
    isActive: session?.user?.activo === true,
    user: session?.user,
  };
}
