'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';
import { TaskFilters } from './FiltrosBusqueda';
import { BulkActions } from './AccionesMasivas';
import { TaskGrid } from './GridTarea';
import { TaskCheckbox } from '@/components/ui/TareaCheckbox';
import { Button } from '@/components/ui/button';
import type {
  Task,
  TaskStatus,
  TaskPriority,
  SortField,
  SortOrder,
} from '@/types/tareas';
import {
  Select,
  //   SelectContent, - para uso futuro y mejorar UX
  //   SelectItem, - para uso futuro y mejorar UX
  //   SelectTrigger, - para uso futuro y mejorar UX
  //   SelectValue, - para uso futuro y mejorar UX
} from '@/components/ui/select';

// Hook personalizado para la lógica de tareas
function useTaskManager(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'all'>('all');
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | 'all'>(
    'all',
  );
  const [sortBy, setSortBy] = useState<SortField>('dueDate');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Filtrado y ordenamiento
  const filteredAndSortedTasks = useMemo(() => {
    const filtered = tasks.filter((task) => {
      const matchesSearch =
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assignee.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || task.status === statusFilter;
      const matchesPriority =
        priorityFilter === 'all' || task.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });

    // Lógica de ordenamiento
    filtered.sort((a, b) => {
      let aValue: string | number | Date = a[sortBy];
      let bValue: string | number | Date = b[sortBy];

      if (sortBy === 'dueDate' || sortBy === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      } else if (sortBy === 'priority') {
        const priorityOrder = { low: 1, medium: 2, high: 3 };
        aValue = priorityOrder[a.priority];
        bValue = priorityOrder[b.priority];
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [tasks, searchTerm, statusFilter, priorityFilter, sortBy, sortOrder]);

  const hasFilters =
    searchTerm !== '' || statusFilter !== 'all' || priorityFilter !== 'all';

  return {
    tasks,
    setTasks,
    selectedTasks,
    setSelectedTasks,
    filteredAndSortedTasks,
    hasFilters,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  };
}

// Datos mock
const mockTasks: Task[] = [
  {
    id: '1',
    name: 'Diseñar Landing Page',
    description:
      'Crear el diseño de la página principal del sitio web corporativo',
    status: 'in_progress',
    dueDate: '2024-12-15',
    assignee: 'María González',
    priority: 'high',
    createdAt: '2024-11-20',
  },
  // ... resto de datos mock
];

export default function TaskManager() {
  const {
    tasks,
    setTasks,
    selectedTasks,
    setSelectedTasks,
    filteredAndSortedTasks,
    hasFilters,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  } = useTaskManager(mockTasks);

  // Handlers
  const handleSelectTask = (id: string) => {
    const newSelected = new Set(selectedTasks);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedTasks(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedTasks.size === filteredAndSortedTasks.length) {
      setSelectedTasks(new Set());
    } else {
      setSelectedTasks(new Set(filteredAndSortedTasks.map((task) => task.id)));
    }
  };

  const handleCreateTask = () => console.log('Crear nueva tarea');
  const handleEditTask = (task: Task) => console.log('Editar tarea:', task);
  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setSelectedTasks((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };
  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };
  const handleBulkAction = (action: string) => {
    console.log(`Acción en lote: ${action}`, Array.from(selectedTasks));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Gestor de Tareas</h1>
          <p className="mt-1 text-slate-400">
            Gestiona y asigna tareas a tu equipo de trabajo
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreateTask}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:from-blue-400 hover:to-indigo-400 hover:shadow-lg"
        >
          <PlusIcon className="h-5 w-5" />
          Nueva Tarea
        </motion.button>
      </div>

      {/* Filtros */}
      <TaskFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        priorityFilter={priorityFilter}
        onPriorityFilterChange={setPriorityFilter}
      />

      {/* Acciones en lote */}
      <AnimatePresence>
        <BulkActions
          selectedCount={selectedTasks.size}
          onBulkAction={handleBulkAction}
          onClearSelection={() => setSelectedTasks(new Set())}
        />
      </AnimatePresence>

      {/* Grid de tareas */}
      <div className="space-y-4">
        {/* Header de selección */}
        <div className="flex items-center gap-4 rounded-lg border border-slate-600 bg-slate-800/30 p-4">
          <Button
            onClick={handleSelectAll}
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
          >
            <TaskCheckbox
              checked={
                selectedTasks.size === filteredAndSortedTasks.length &&
                filteredAndSortedTasks.length > 0
              }
              onChange={handleSelectAll}
            />
            <span className="text-sm">Seleccionar todo</span>
          </Button>

          <div className="text-sm text-slate-400">
            {filteredAndSortedTasks.length} tarea
            {filteredAndSortedTasks.length !== 1 ? 's' : ''} encontrada
            {filteredAndSortedTasks.length !== 1 ? 's' : ''}
          </div>

          {/* Ordenamiento */}
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-slate-400">Ordenar por:</span>
            <Select
              value={`${sortBy}-${sortOrder}`}
              onValueChange={(value) => {
                const [field, order] = value.split('-');
                setSortBy(field as SortField);
                setSortOrder(order as SortOrder);
              }}
              //   className="rounded border border-slate-600 bg-slate-800 px-2 py-1 text-sm text-white"
            >
              <option value="dueDate-asc">Fecha límite ↑</option>
              <option value="dueDate-desc">Fecha límite ↓</option>
              <option value="priority-desc">Prioridad ↓</option>
              <option value="priority-asc">Prioridad ↑</option>
              <option value="name-asc">Nombre A-Z</option>
              <option value="name-desc">Nombre Z-A</option>
              <option value="status-asc">Estado ↑</option>
            </Select>
          </div>
        </div>

        {/* Grid */}
        <TaskGrid
          tasks={filteredAndSortedTasks}
          selectedTasks={selectedTasks}
          onSelectTask={handleSelectTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          onStatusChange={handleStatusChange}
          hasFilters={hasFilters}
        />
      </div>
    </div>
  );
}
