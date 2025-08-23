// auth.ts

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { z } from 'zod';

import { authConfig } from './auth.config';
import prisma from '@/lib/prisma';
import { verifyPassword } from '@/lib/hash'; // Asumo que tienes esta función

// Función para obtener un usuario de la base de datos por su correo
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
    console.error('Error al obtener el usuario:', error);
    return null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Combina la configuración base de auth.config.ts
  ...authConfig,

  // El adaptador de Prisma es crucial para que los proveedores OAuth
  // puedan crear usuarios y cuentas en tu base de datos automáticamente.
  adapter: PrismaAdapter(prisma),

  providers: [
    Credentials({
      // Esta es la función que se ejecuta cuando intentas iniciar sesión con credenciales.
      async authorize(credentials) {
        console.log('1. Credenciales recibidas:', credentials);
        const parsedCredentials = z
          .object({
            correo: z.email(),
            password: z.string().min(8), // Ajusta la longitud mínima si es necesario
          })
          .safeParse(credentials);
        console.log('2. Validación de Zod:', parsedCredentials.success);

        if (parsedCredentials.success) {
          const { correo, password } = parsedCredentials.data;
          const user = await getUser(correo);

          // Si no se encuentra el usuario o no está activo, no autorizar.
          console.log('3. Usuario encontrado:', !!user);
          if (!user || !user.activo) return null;

          console.log('4. Contraseña del usuario:', user.password);
          console.log('5. Contraseña ingresada:', password);

          // Verifica que la contraseña coincida.
          const passwordsMatch = await verifyPassword(password, user.password);
          console.log('6. Coincidencia de contraseña:', passwordsMatch);

          if (passwordsMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.correo,
              role: user.role,
              activo: user.activo,
            };
          }
        }

        console.log('Credenciales inválidas');
        return null;
      },
    }),

    // Aquí puedes añadir más proveedores en el futuro. Por ejemplo:
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
});
