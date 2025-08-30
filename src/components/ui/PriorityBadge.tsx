'use client';

import { priorityConfig } from '@/lib/utils';
import type { TaskPriority } from '@/types/tareas';

interface PriorityBadgeProps {
  priority: TaskPriority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <div
      className={`rounded-full px-2 py-1 text-xs font-medium ${config.bg} ${config.color}`}
    >
      {config.label}
    </div>
  );
}
