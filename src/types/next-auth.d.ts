// types/next-auth.d.ts - Extender tipos de NextAuth
import NextAuth from 'next-auth';

const auth = NextAuth();

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string;
  }
}
