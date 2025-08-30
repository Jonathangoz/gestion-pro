'use client';

import {
  UserIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import type { Task } from '@/types/tareas';

interface TaskInfoProps {
  task: Task;
}

export function TaskInfo({ task }: TaskInfoProps) {
  const isOverdue =
    new Date(task.dueDate) < new Date() &&
    task.status !== 'completed' &&
    task.status !== 'approved';

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-slate-400">
        <UserIcon className="h-4 w-4" />
        <span>{task.assignee}</span>
      </div>
      <div
        className={`flex items-center gap-2 ${isOverdue ? 'text-red-400' : 'text-slate-400'}`}
      >
        <ClockIcon className="h-4 w-4" />
        <span>Vence: {new Date(task.dueDate).toLocaleDateString('es-ES')}</span>
        {isOverdue && (
          <ExclamationTriangleIcon className="h-4 w-4 text-red-400" />
        )}
      </div>
    </div>
  );
}
