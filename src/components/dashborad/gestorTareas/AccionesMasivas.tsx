'use client';

import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

interface BulkActionsProps {
  selectedCount: number;
  onBulkAction: (action: string) => void;
  onClearSelection: () => void;
}

export function BulkActions({
  selectedCount,
  onBulkAction,
  onClearSelection,
}: BulkActionsProps) {
  if (selectedCount === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center gap-4 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4"
    >
      <span className="text-blue-400">
        {selectedCount} tarea{selectedCount > 1 ? 's' : ''} seleccionada
        {selectedCount > 1 ? 's' : ''}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onBulkAction('reassign')}
          className="rounded-lg bg-blue-500/20 px-3 py-1 text-blue-400 transition-colors hover:bg-blue-500/30"
        >
          Reasignar
        </button>
        <button
          onClick={() => onBulkAction('complete')}
          className="rounded-lg bg-green-500/20 px-3 py-1 text-green-400 transition-colors hover:bg-green-500/30"
        >
          Completar
        </button>
        <button
          onClick={() => onBulkAction('delete')}
          className="rounded-lg bg-red-500/20 px-3 py-1 text-red-400 transition-colors hover:bg-red-500/30"
        >
          Eliminar
        </button>
      </div>

      <Button
        onClick={onClearSelection}
        className="ml-auto text-slate-400 hover:text-white"
      >
        <XMarkIcon className="h-5 w-5" />
      </Button>
    </motion.div>
  );
}
