// Skeletons.tsx - Versión mejorada con el estilo de GestorPro
'use client';

// Animación shimmer mejorada
const shimmer = `
  relative overflow-hidden
  before:absolute before:inset-0 before:-translate-x-full 
  before:animate-[shimmer_2s_infinite] 
  before:bg-gradient-to-r before:from-transparent before:via-slate-200/10 before:to-transparent
`;

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-3">
          <div className="h-4 w-24 rounded-md bg-slate-700"></div>
          <div className="h-8 w-20 rounded-md bg-slate-700"></div>
        </div>
        <div className="h-12 w-12 rounded-lg bg-slate-700"></div>
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <div className="h-4 w-4 rounded bg-slate-700"></div>
        <div className="h-4 w-16 rounded-md bg-slate-700"></div>
        <div className="h-4 w-24 rounded-md bg-slate-700"></div>
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div
      className={`${shimmer} rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm`}
    >
      <div className="mb-4 h-6 w-48 rounded-md bg-slate-700"></div>
      <div className="h-80 rounded-lg bg-slate-900/50 p-4">
        <div className="flex h-full items-end justify-between space-x-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-full rounded-t bg-slate-700"
              style={{ height: `${Math.random() * 60 + 20}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ActivitySkeleton() {
  return (
    <div
      className={`${shimmer} rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm`}
    >
      <div className="mb-4 h-6 w-36 rounded-md bg-slate-700"></div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-start gap-3 p-3">
            <div className="mt-2 h-2 w-2 rounded-full bg-slate-700"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 w-full rounded-md bg-slate-700"></div>
              <div className="h-3 w-20 rounded-md bg-slate-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuickActionsSkeleton() {
  return (
    <div
      className={`${shimmer} rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm`}
    >
      <div className="mb-4 h-6 w-32 rounded-md bg-slate-700"></div>
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-16 rounded-lg bg-slate-700"></div>
        ))}
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="border-b border-slate-700">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-700"></div>
          <div className="h-4 w-24 rounded bg-slate-700"></div>
        </div>
      </td>
      <td className="px-3 py-4">
        <div className="h-4 w-32 rounded bg-slate-700"></div>
      </td>
      <td className="px-3 py-4">
        <div className="h-4 w-16 rounded bg-slate-700"></div>
      </td>
      <td className="px-3 py-4">
        <div className="h-4 w-16 rounded bg-slate-700"></div>
      </td>
      <td className="px-3 py-4">
        <div className="h-6 w-16 rounded-full bg-slate-700"></div>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-2">
          <div className="h-8 w-8 rounded bg-slate-700"></div>
          <div className="h-8 w-8 rounded bg-slate-700"></div>
        </div>
      </td>
    </tr>
  );
}

export function TableSkeleton() {
  return (
    <div
      className={`${shimmer} overflow-hidden rounded-xl border border-slate-600 bg-slate-800/50`}
    >
      <div className="border-b border-slate-700 p-6">
        <div className="h-6 w-48 rounded-md bg-slate-700"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="px-6 py-4 text-left">
                <div className="h-4 w-20 rounded bg-slate-700"></div>
              </th>
              <th className="px-3 py-4 text-left">
                <div className="h-4 w-16 rounded bg-slate-700"></div>
              </th>
              <th className="px-3 py-4 text-left">
                <div className="h-4 w-16 rounded bg-slate-700"></div>
              </th>
              <th className="px-3 py-4 text-left">
                <div className="h-4 w-12 rounded bg-slate-700"></div>
              </th>
              <th className="px-3 py-4 text-left">
                <div className="h-4 w-16 rounded bg-slate-700"></div>
              </th>
              <th className="px-6 py-4">
                <div className="ml-auto h-4 w-8 rounded bg-slate-700"></div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-800/30">
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SystemStatusSkeleton() {
  return (
    <div
      className={`${shimmer} rounded-xl border border-slate-600 bg-slate-800/50 p-6 backdrop-blur-sm`}
    >
      <div className="mb-4 h-6 w-32 rounded-md bg-slate-700"></div>
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg bg-slate-900/50 p-3"
          >
            <div className="h-4 w-24 rounded bg-slate-700"></div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-slate-700"></div>
              <div className="h-4 w-16 rounded bg-slate-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className={`${shimmer} h-8 w-48 rounded-md bg-slate-700`}></div>
          <div className={`${shimmer} h-5 w-64 rounded-md bg-slate-700`}></div>
        </div>
        <div className={`${shimmer} h-10 w-40 rounded-lg bg-slate-700`}></div>
      </div>

      {/* Stats Cards Skeleton */}
      <CardsSkeleton />

      {/* Charts and Activity Grid Skeleton */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartSkeleton />
        </div>
        <div>
          <ActivitySkeleton />
        </div>
      </div>

      {/* Quick Actions and System Status Skeleton */}
      <div className="grid gap-6 lg:grid-cols-2">
        <QuickActionsSkeleton />
        <SystemStatusSkeleton />
      </div>
    </div>
  );
}

// Mobile optimized skeletons
export function MobileCardSkeleton() {
  return (
    <div
      className={`${shimmer} rounded-lg border border-slate-600 bg-slate-800/50 p-4 backdrop-blur-sm`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="h-10 w-10 rounded-lg bg-slate-700"></div>
        <div className="h-4 w-16 rounded bg-slate-700"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-20 rounded bg-slate-700"></div>
        <div className="h-6 w-24 rounded bg-slate-700"></div>
      </div>
    </div>
  );
}

export function MobileDashboardSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Mobile Header */}
      <div className="space-y-2">
        <div className={`${shimmer} h-6 w-32 rounded bg-slate-700`}></div>
        <div className={`${shimmer} h-4 w-48 rounded bg-slate-700`}></div>
      </div>

      {/* Mobile Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <MobileCardSkeleton />
        <MobileCardSkeleton />
        <MobileCardSkeleton />
        <MobileCardSkeleton />
      </div>

      {/* Mobile Chart */}
      <div
        className={`${shimmer} rounded-lg border border-slate-600 bg-slate-800/50 p-4`}
      >
        <div className="mb-3 h-5 w-32 rounded bg-slate-700"></div>
        <div className="h-48 rounded bg-slate-900/50"></div>
      </div>

      {/* Mobile Activity */}
      <div
        className={`${shimmer} rounded-lg border border-slate-600 bg-slate-800/50 p-4`}
      >
        <div className="mb-3 h-5 w-28 rounded bg-slate-700"></div>
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="mt-2 h-2 w-2 rounded-full bg-slate-700"></div>
              <div className="flex-1 space-y-1">
                <div className="h-4 w-full rounded bg-slate-700"></div>
                <div className="h-3 w-16 rounded bg-slate-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
