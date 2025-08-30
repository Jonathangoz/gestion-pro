'use client';

import { statusConfig } from '@/lib/utils';
import type { TaskStatus } from '@/types/tareas';

interface StatusBadgeProps {
  status: TaskStatus;
  showIcon?: boolean;
}

export function StatusBadge({ status, showIcon = true }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-2">
      {showIcon && <Icon className={`h-4 w-4 ${config.textColor}`} />}
      <span className={`text-sm font-medium ${config.textColor}`}>
        {config.label}
      </span>
    </div>
  );
}
