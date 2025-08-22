// lib/prisma.ts Instancia global Prisma Client para el acceso a la base de datos
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
