// actions/usuarios.ts
'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// validacion con zod
const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  correo: z.email(),
  password: z.string().min(8),
  contacto: z.string(),
  activo: z.boolean(),
  role: z.string(),
});

// Obtener todos los usuarios para la lista de usuarios
export async function GetUsuarios() {
  return await prisma.usuario.findMany({
    select: {
      id: true,
      name: true,
      correo: true,
      contacto: true,
      activo: true,
      role: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
}

// Obtener un usuario específico por ID
export async function GetUsuario(id: string) {
  const usuario = await prisma.usuario.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      correo: true,
      contacto: true,
      activo: true,
      role: true,
    },
  });

  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  return usuario;
}

const CrearUsuario = UserSchema.omit({ id: true, activo: true, role: true });

export async function CrearUsuarios(formData: FormData) {
  const ValidarDatos = CrearUsuario.safeParse({
    name: formData.get('name'),
    corrreo: formData.get('correo'),
    password: formData.get('password'),
    contacto: formData.get('contacto'),
  });

  if (!ValidarDatos.success) {
    throw new Error('Datos Invalidos');
  }

  // crea el usuario
  await prisma.usuario.create({
    data: ValidarDatos.data,
  });

  // Vuelve a obtener los datos más recientes en la página de usuarios
  revalidatePath('/dashboard/usuarios');
}

const ActualizarUsuario = UserSchema.omit({
  id: true,
  password: true,
  activo: true,
  role: true,
}).partial();

export async function ActualizarUsuarios(id: string, formData: FormData) {
  // Construir objeto solo con campos que no estén vacíos
  const datos: Record<string, unknown> = {};

  const name = formData.get('name')?.toString()?.trim();
  const correo = formData.get('correo')?.toString()?.trim();
  const contacto = formData.get('contacto')?.toString()?.trim();

  if (name) datos.name = name;
  if (correo) datos.correo = correo;
  if (contacto) datos.contacto = contacto;

  if (Object.keys(datos).length === 0) {
    throw new Error('No hay campos para actualizar');
  }

  // Validar datos
  const ValidarDatos = ActualizarUsuario.safeParse(datos);

  if (!ValidarDatos.success) {
    throw new Error('Datos Inválidos');
  }

  // Verificar email único si se esta cambiando
  if (ValidarDatos.data.correo) {
    const emailExiste = await prisma.usuario.findFirst({
      where: {
        correo: ValidarDatos.data.correo,
        NOT: { id },
      },
    });

    if (emailExiste) {
      throw new Error('El correo ya está en uso');
    }
  }

  await prisma.usuario.update({
    where: { id },
    data: ValidarDatos.data,
  });

  revalidatePath('/dashboard/usuarios');
}

// Cambiar estado activo/inactivo de usuario
export async function CambiarEstadoUsuarios(id: string) {
  const Usuario = await prisma.usuario.findUnique({
    where: { id },
    select: { activo: true },
  });

  if (!Usuario) {
    throw new Error('Usuario no encontrado');
  }

  await prisma.usuario.update({
    where: { id },
    data: {
      activo: !Usuario.activo,
    },
  });

  revalidatePath('/dashboard/usuarios');
}

// Eliminar Usuario
export async function EliminarUsuario(id: string) {
  try {
    await prisma.usuario.delete({
      where: { id },
    });
  } catch (error: unknown) {
    if (error && typeof error === 'object') {
      throw new Error('Usuario no encontrado');
    }
    throw error;
  }

  revalidatePath('/dashboard/usuarios');
}
