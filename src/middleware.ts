// middleware.ts

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Inicializa NextAuth.js con la configuración base y exporta la función 'auth'.
// La función 'auth' es el middleware que protege tus páginas.
export default NextAuth(authConfig).auth;

export const config = {
  /*
   * Coincide con todas las rutas de solicitud excepto las que comienzan con:
   * - api (rutas de API)
   * - _next/static (archivos estáticos)
   * - _next/image (archivos de optimización de imágenes)
   * - favicon.ico (archivo de favicon)
   */
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/dashboard/:path*', // Protege específicamente todas las sub-rutas de dashboard
  ],
};
