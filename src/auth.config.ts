import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnLogin = nextUrl.pathname === '/login';

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      }

      if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
    async session({ session, user }) {
      // user viene directamente de la base de datos
      if (user) {
        session.user.id = user.id;
        session.user.role = user.role;
        session.user.activo = user.activo;
      }
      return session;
    },
  },
  providers: [], // Se llenan en auth.ts
  // Cambiar a database session
  session: {
    strategy: 'database',
    maxAge: 7 * 24 * 60 * 60, // 7 días
  },
  trustHost: true, // Solo para desarrollo
} satisfies NextAuthConfig;