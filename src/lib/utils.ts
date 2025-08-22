import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SUCCESS_MESSAGES = {
  TASK_CREATED: 'Tarea creada exitosamente.',
  TASK_UPDATED: 'Tarea actualizada exitosamente.',
  INVOICE_ARCHIVED: 'Factura archivada correctamente.',
};

export const ERROR_MESSAGES = {
  TASK_NOT_FOUND: 'La tarea solicitada no existe.',
  VALIDATION_ERROR: 'Por favor, revisa los datos ingresados.',
  API_ERROR: 'Error al conectar con la API externa.',
};

export const INVOICE_STATUS = {
  PENDING: 'pendiente',
  IN_PROGRESS: 'en proceso',
  PAID: 'pagado',
  ARCHIVED: 'archivado',
} as const;

export const TASK_STATUS = {
  PENDING: 'pendiente',
  IN_PROGRESS: 'en progreso',
  COMPLETED: 'completada',
};

export const USER_ROLES = {
  ADMIN: 'ADMIN',
  WORKER: 'TRABAJADOR',
} as const;
