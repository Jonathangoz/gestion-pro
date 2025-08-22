// src/actions/auth.ts - Server actions para autenticación
'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const LoginSchema = z.object({
  correo: z.email('correo inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export async function Autenticacion(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const ValidarDatos = LoginSchema.safeParse({
      correo: formData.get('correo'),
      password: formData.get('password'),
    });

    if (!ValidarDatos.success) {
      return 'Datos de login inválidos.';
    }

    const { correo, password } = ValidarDatos.data;

    await signIn('credentials', {
      correo,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales inválidas.';
        case 'CallbackRouteError':
          return 'Usuario inactivo o credenciales incorrectas.';
        default:
          return 'Error de autenticación.';
      }
    }
    throw error;
  }

  redirect('/dashboard');
}

export async function SignOut() {
  await signOut({ redirectTo: '/login' });
}
