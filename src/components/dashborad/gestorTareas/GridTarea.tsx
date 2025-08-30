'use client';

import { AnimatePresence } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';
import { TaskCard } from './CardTarea';
import type { Task } from '@/types/tareas';

interface TaskGridProps {
  tasks: Task[];
  selectedTasks: Set<string>;
  onSelectTask: (id: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
  hasFilters: boolean;
}

export function TaskGrid({
  tasks,
  selectedTasks,
  onSelectTask,
  onEditTask,
  onDeleteTask,
  onStatusChange,
  hasFilters,
}: TaskGridProps) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ClockIcon className="mb-4 h-12 w-12 text-slate-600" />
        <h3 className="mb-2 text-lg font-medium text-slate-400">
          No se encontraron tareas
        </h3>
        <p className="text-slate-500">
          {hasFilters
            ? 'Intenta ajustar los filtros de búsqueda'
            : 'Comienza creando tu primera tarea'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            isSelected={selectedTasks.has(task.id)}
            onSelect={onSelectTask}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            onStatusChange={onStatusChange}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
