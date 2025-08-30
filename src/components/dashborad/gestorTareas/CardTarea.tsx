'use client';

import { motion } from 'framer-motion';
import { statusConfig } from '@/lib/utils';
import { TaskCheckbox } from '@/components/ui/TareaCheckbox';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { PriorityBadge } from '@/components/ui/PriorityBadge';
import { TaskActions } from './AccionesTarea';
import { TaskInfo } from './InfoTarea';
import type { Task } from '@/types/tareas';

interface TaskCardProps {
  task: Task;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

export function TaskCard({
  task,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
  // onStatusChange
}: TaskCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        isSelected
          ? 'border-blue-500/70 bg-slate-800/80 shadow-lg shadow-blue-500/25'
          : 'border-slate-600 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800/70'
      }`}
      onClick={() => onSelect(task.id)}
    >
      {/* Checkbox */}
      <div className="absolute top-4 right-4">
        <TaskCheckbox checked={isSelected} onChange={() => onSelect(task.id)} />
      </div>

      {/* Contenido principal */}
      <div className="pr-8">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
            {task.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-400">
            {task.description}
          </p>
        </div>

        {/* Status y Priority */}
        <div className="mb-4 flex items-center gap-3">
          <StatusBadge status={task.status} />
          <PriorityBadge priority={task.priority} />
        </div>

        {/* Info de tarea */}
        <div className="mb-4">
          <TaskInfo task={task} />
        </div>

        {/* Acciones */}
        <TaskActions
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Barra de estado */}
      <div
        className={`absolute top-0 left-0 h-full w-1 ${statusConfig[task.status].color}`}
      />
    </motion.div>
  );
}
