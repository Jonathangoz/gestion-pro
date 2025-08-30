// ===== 1. INSTALAR EL COMPONENTE SELECT DE SHADCN/UI =====
// Ejecuta este comando en tu terminal:
// npx shadcn@latest add select

// ===== 2. COMPONENTE TaskFilters CON SHADCN/UI SELECT =====
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { statusConfig, priorityConfig } from '@/lib/utils';
import type { TaskStatus, TaskPriority } from '@/types/tareas';

interface TaskFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  statusFilter: TaskStatus | 'all';
  onStatusFilterChange: (status: TaskStatus | 'all') => void;
  priorityFilter: TaskPriority | 'all';
  onPriorityFilterChange: (priority: TaskPriority | 'all') => void;
}

export function TaskFilters({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  priorityFilter,
  onPriorityFilterChange,
}: TaskFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Búsqueda */}
      <div className="relative min-w-64 flex-1">
        <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-800 py-2 pr-4 pl-10 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
        />
      </div>

      {/* Filtros con shadcn/ui Select */}
      <div className="flex gap-2">
        {/* Select de Estado */}
        <Select
          value={statusFilter}
          onValueChange={(value) =>
            onStatusFilterChange(value as TaskStatus | 'all')
          }
        >
          <SelectTrigger className="w-[180px] border-slate-600 bg-slate-800 text-white focus:border-blue-500">
            <SelectValue placeholder="Todos los estados" />
          </SelectTrigger>
          <SelectContent className="border-slate-600 bg-slate-800">
            <SelectItem
              value="all"
              className="text-white focus:bg-slate-700 focus:text-white"
            >
              Todos los estados
            </SelectItem>
            {Object.entries(statusConfig).map(([key, config]) => (
              <SelectItem
                key={key}
                value={key}
                className="text-white focus:bg-slate-700 focus:text-white"
              >
                <div className="flex items-center gap-2">
                  <config.icon className={`h-4 w-4 ${config.textColor}`} />
                  {config.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Select de Prioridad */}
        <Select
          value={priorityFilter}
          onValueChange={(value) =>
            onPriorityFilterChange(value as TaskPriority | 'all')
          }
        >
          <SelectTrigger className="w-[180px] border-slate-600 bg-slate-800 text-white focus:border-blue-500">
            <SelectValue placeholder="Todas las prioridades" />
          </SelectTrigger>
          <SelectContent className="border-slate-600 bg-slate-800">
            <SelectItem
              value="all"
              className="text-white focus:bg-slate-700 focus:text-white"
            >
              Todas las prioridades
            </SelectItem>
            {Object.entries(priorityConfig).map(([key, config]) => (
              <SelectItem
                key={key}
                value={key}
                className="text-white focus:bg-slate-700 focus:text-white"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${config.color.replace('text-', 'bg-')}`}
                  />
                  {config.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// ===== 3. VERSIÓN MEJORADA CON LABELS Y MEJOR STYLING =====
export function TaskFiltersEnhanced({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  priorityFilter,
  onPriorityFilterChange,
}: TaskFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Búsqueda */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por nombre, descripción o asignado..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-4 pl-10 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
        />
      </div>

      {/* Filtros con labels */}
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Estado</label>
          <Select
            value={statusFilter}
            onValueChange={(value) =>
              onStatusFilterChange(value as TaskStatus | 'all')
            }
          >
            <SelectTrigger className="hover:bg-slate-750 w-[200px] border-slate-600 bg-slate-800 text-white focus:border-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-slate-600 bg-slate-800">
              <SelectItem value="all" className="text-white focus:bg-slate-700">
                Todos los estados
              </SelectItem>
              {Object.entries(statusConfig).map(([key, config]) => (
                <SelectItem
                  key={key}
                  value={key}
                  className="text-white focus:bg-slate-700"
                >
                  <div className="flex items-center gap-2">
                    <config.icon className={`h-4 w-4 ${config.textColor}`} />
                    <span>{config.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">
            Prioridad
          </label>
          <Select
            value={priorityFilter}
            onValueChange={(value) =>
              onPriorityFilterChange(value as TaskPriority | 'all')
            }
          >
            <SelectTrigger className="hover:bg-slate-750 w-[200px] border-slate-600 bg-slate-800 text-white focus:border-blue-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="border-slate-600 bg-slate-800">
              <SelectItem value="all" className="text-white focus:bg-slate-700">
                Todas las prioridades
              </SelectItem>
              {Object.entries(priorityConfig).map(([key, config]) => (
                <SelectItem
                  key={key}
                  value={key}
                  className="text-white focus:bg-slate-700"
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${config.bg}`} />
                    <span className={config.color}>{config.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

// ===== 4. COMPONENTE SELECT CUSTOMIZADO REUTILIZABLE =====
interface CustomSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: Array<{
    value: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    color?: string;
  }>;
  className?: string;
  label?: string;
}

export function CustomSelect({
  value,
  onValueChange,
  placeholder,
  items,
  className = '',
  label,
}: CustomSelectProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-slate-300">{label}</label>
      )}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="hover:bg-slate-750 border-slate-600 bg-slate-800 text-white focus:border-blue-500">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="border-slate-600 bg-slate-800">
          {items.map(
            ({ value: itemValue, label: itemLabel, icon: Icon, color }) => (
              <SelectItem
                key={itemValue}
                value={itemValue}
                className="text-white focus:bg-slate-700"
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className={`h-4 w-4 ${color}`} />}
                  <span>{itemLabel}</span>
                </div>
              </SelectItem>
            ),
          )}
        </SelectContent>
      </Select>
    </div>
  );
}

// ===== 5. USO DEL COMPONENTE REUTILIZABLE =====
export function TaskFiltersWithCustomSelect({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  priorityFilter,
  onPriorityFilterChange,
}: TaskFiltersProps) {
  const statusItems = [
    { value: 'all', label: 'Todos los estados' },
    ...Object.entries(statusConfig).map(([key, config]) => ({
      value: key,
      label: config.label,
      icon: config.icon,
      color: config.textColor,
    })),
  ];

  const priorityItems = [
    { value: 'all', label: 'Todas las prioridades' },
    ...Object.entries(priorityConfig).map(([key, config]) => ({
      value: key,
      label: config.label,
      color: config.color,
    })),
  ];

  return (
    <div className="space-y-4">
      {/* Búsqueda */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-4 pl-10 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25 focus:outline-none"
        />
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <CustomSelect
          value={statusFilter}
          onValueChange={(value) =>
            onStatusFilterChange(value as TaskStatus | 'all')
          }
          placeholder="Todos los estados"
          items={statusItems}
          label="Estado"
          className="min-w-[200px]"
        />

        <CustomSelect
          value={priorityFilter}
          onValueChange={(value) =>
            onPriorityFilterChange(value as TaskPriority | 'all')
          }
          placeholder="Todas las prioridades"
          items={priorityItems}
          label="Prioridad"
          className="min-w-[200px]"
        />
      </div>
    </div>
  );
}
