// src/auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { verifyPassword } from '@/lib/hash';

async function getUser(correo: string) {
  try {
    const user = await prisma.usuario.findUnique({
      where: { correo },
      select: {
        id: true,
        name: true,
        correo: true,
        password: true,
        role: true,
        activo: true,
      },
    });
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        correo: { label: 'Correo', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            correo: z.email(),
            password: z.string().min(8),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { correo, password } = parsedCredentials.data;
        const user = await getUser(correo);
        
        if (!user || !user.activo) {
          return null;
        }

        const passwordMatch = await verifyPassword(password, user.password);
        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.correo,
          role: user.role,
        };
      },
    }),
  ],
});
