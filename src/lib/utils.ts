import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  ArrowsUpDownIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

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

export const statusConfig = {
  pending: {
    label: 'Pendiente',
    color: 'bg-gray-500',
    textColor: 'text-gray-400',
    icon: ClockIcon,
  },
  in_progress: {
    label: 'En Progreso',
    color: 'bg-blue-500',
    textColor: 'text-blue-400',
    icon: ArrowsUpDownIcon,
  },
  review: {
    label: 'En Revisión',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-400',
    icon: EyeIcon,
  },
  completed: {
    label: 'Completado',
    color: 'bg-green-500',
    textColor: 'text-green-400',
    icon: CheckCircleIcon,
  },
  approved: {
    label: 'Aprobado',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    icon: CheckCircleSolid,
  },
} as const;

export const priorityConfig = {
  low: { label: 'Baja', color: 'text-green-400', bg: 'bg-green-400/20' },
  medium: { label: 'Media', color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
  high: { label: 'Alta', color: 'text-red-400', bg: 'bg-red-400/20' },
} as const;
