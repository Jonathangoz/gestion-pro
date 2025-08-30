'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { Button } from './button';

interface TaskCheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export function TaskCheckbox({
  checked,
  onChange,
  className = '',
}: TaskCheckboxProps) {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={`h-5 w-5 rounded border-2 transition-all duration-200 ${
        checked
          ? 'border-blue-500 bg-blue-500'
          : 'border-slate-400 hover:border-slate-300'
      } ${className}`}
    >
      {checked && (
        <CheckIcon className="h-3 w-3 text-white" style={{ margin: '1px' }} />
      )}
    </Button>
  );
}
