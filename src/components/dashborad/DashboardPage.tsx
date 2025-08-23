// Dashboard Page
'use client';

import { Suspense } from 'react';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';
import {
  // DashboardSkeleton,
  CardSkeleton,
  ChartSkeleton,
} from '@/components/ui/skeletons';

// Mock data - en producción vendría de tu API
const stats = [
  {
    name: 'Ingresos Totales',
    value: '$145,230',
    change: '+12.5%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Usuarios Activos',
    value: '1,284',
    change: '+8.2%',
    changeType: 'positive',
    icon: UsersIcon,
  },
  {
    name: 'Facturas Pendientes',
    value: '23',
    change: '-4.1%',
    changeType: 'negative',
    icon: DocumentTextIcon,
  },
  {
    name: 'Tareas Completadas',
    value: '89.2%',
    change: '+3.7%',
    changeType: 'positive',
    icon: ChartBarIcon,
  },
];

const recentActivities = [
  {
    id: 1,
    type: 'invoice',
    message: 'Factura #1234 creada para Cliente ABC',
    time: 'Hace 2 minutos',
  },
  {
    id: 2,
    type: 'user',
    message: 'Nuevo usuario registrado: María García',
    time: 'Hace 15 minutos',
  },
  {
    id: 3,
    type: 'task',
    message: 'Tarea "Revisar reportes" completada',
    time: 'Hace 1 hora',
  },
  {
    id: 4,
    type: 'payment',
    message: 'Pago recibido: $2,500',
    time: 'Hace 2 horas',
  },
];

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  const Icon = stat.icon;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-600 bg-slate-800/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-800/70 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{stat.name}</p>
          <p className="text-3xl font-bold text-white">{stat.value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:from-blue-400 group-hover:to-indigo-400 group-hover:shadow-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="mt-4 flex items-center">
        {stat.changeType === 'positive' ? (
          <ArrowTrendingUpIcon className="mr-1 h-4 w-4 text-green-400" />
        ) : (
          <ArrowTrendingDownIcon className="mr-1 h-4 w-4 text-red-400" />
        )}
        <span
          className={`text-sm font-medium ${
            stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {stat.change}
        </span>
        <span className="ml-1 text-sm text-slate-400">desde el mes pasado</span>
      </div>
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Actividad Reciente
      </h3>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-700/50"
          >
            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
            <div className="flex-1">
              <p className="text-sm text-slate-300">{activity.message}</p>
              <p className="mt-1 text-xs text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    {
      name: 'Nueva Factura',
      href: '/dashboard/invoices/create',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      name: 'Agregar Usuario',
      href: '/dashboard/users/create',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Nueva Tarea',
      href: '/dashboard/tasks/create',
      color: 'from-purple-500 to-violet-500',
    },
    {
      name: 'Ver Reportes',
      href: '/dashboard/reports',
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <div className="rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Acciones Rápidas
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.name}
            className={`relative rounded-lg bg-gradient-to-r p-4 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg ${action.color} font-medium text-white`}
          >
            <span className="relative z-10 text-sm">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="mt-1 text-slate-400">Resumen general de tu empresa</p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
          <span className="text-sm font-medium text-slate-300">
            Actualizado hace 2 min
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <Suspense
        fallback={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        }
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.name} stat={stat} />
          ))}
        </div>
      </Suspense>

      {/* Charts and Activity Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart Area - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Suspense fallback={<ChartSkeleton />}>
            <div className="rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Resumen de Ingresos
              </h3>
              <div className="flex h-80 items-center justify-center rounded-lg bg-slate-900/50">
                <p className="text-slate-400">Gráfico de ingresos aquí</p>
              </div>
            </div>
          </Suspense>
        </div>

        {/* Activity Feed - Takes 1 column */}
        <div>
          <ActivityFeed />
        </div>
      </div>

      {/* Quick Actions and Additional Info */}
      <div className="grid gap-6 lg:grid-cols-2">
        <QuickActions />

        <div className="rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Estado del Sistema
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 p-3">
              <span className="text-slate-300">Servidor Principal</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-green-400">Operativo</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 p-3">
              <span className="text-slate-300">Base de Datos</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-green-400">Operativo</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-900/50 p-3">
              <span className="text-slate-300">API Externa</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                <span className="text-sm text-yellow-400">Verificando</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
