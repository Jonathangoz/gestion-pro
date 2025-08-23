// auth.config.ts

import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', // Especifica tu página de inicio de sesión personalizada
    error: 'login',
  },

  // La estrategia de sesión DEBE ser 'jwt' cuando se usa el proveedor de Credentials.
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    /**
     * Se llama cada vez que se accede a una página protegida por el middleware.
     * Decide si el usuario está autorizado para ver la página.
     */
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true; // Permite el acceso si está logueado
        return false; // Redirige a /login si no está logueado
      } else if (isLoggedIn) {
        // Si el usuario está logueado e intenta ir a /login, redirígelo al dashboard.
        if (nextUrl.pathname === '/login') {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
      }

      // Permite el acceso a todas las demás rutas por defecto.
      return true;
    },

    /**
     * Este callback se ejecuta después de un inicio de sesión exitoso.
     * El objeto 'user' viene de la función 'authorize' (para Credentials)
     * o del perfil de un proveedor OAuth.
     * Lo que retornes aquí se guardará en el token JWT.
     */
    async jwt({ token, user }) {
      if (user) {
        // En el inicio de sesión, añade las propiedades del usuario al token.
        token.id = user.id;
        token.role = user.role; // Asegúrate de que 'user' tenga la propiedad 'role'
        token.activo = user.activo; // Y la propiedad 'activo'
      }
      return token;
    },

    /**
     * Este callback se ejecuta para crear el objeto de sesión.
     * Toma los datos del token (que se llenaron en el callback 'jwt')
     * y los pasa al objeto 'session' que puedes usar en el cliente y servidor.
     */
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.activo = token.activo as boolean;
      }
      return session;
    },
  },

  // El array de 'providers' se deja vacío aquí porque se definirá en el archivo principal 'auth.ts'.
  providers: [],
} satisfies NextAuthConfig;
