'use client';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import type { Task } from '@/types/tareas';

interface TaskActionsProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  className?: string;
}

export function TaskActions({
  task,
  onEdit,
  onDelete,
  className = '',
}: TaskActionsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit(task);
        }}
        className="rounded-lg bg-blue-500/20 p-2 text-blue-400 transition-colors hover:bg-blue-500/30"
        title="Editar"
      >
        <PencilIcon className="h-4 w-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        className="rounded-lg bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
        title="Eliminar"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
