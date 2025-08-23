// DashboardLayout.tsx
'use client';

import { useState } from 'react';
import SideNav from '@/components/shared/SideNav';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: {
    name: string;
    role: string;
  };
}

export default function DashboardLayout({
  children,
  user,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 hidden h-full border-r border-slate-700 bg-slate-800 transition-all duration-300 lg:flex ${sidebarCollapsed ? 'w-20' : 'w-72'} `}
      >
        <SideNav
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 transform border-r border-slate-700 bg-slate-800 transition-transform duration-300 lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} `}
      >
        <SideNav
          collapsed={false}
          onClose={() => setSidebarOpen(false)}
          isMobile={true}
        />
      </div>

      {/* Main content */}
      <div
        className={`transition-all duration-300 lg:pl-72 ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'} `}
      >
        {/* Top Navigation */}
        <nav className="sticky top-0 z-30 border-b border-slate-700 bg-slate-800/90 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="border-slate-600 bg-slate-700 text-slate-200 hover:bg-slate-600 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Bars3Icon className="h-5 w-5" />
              </Button>

              <div>
                <h1 className="text-xl font-bold text-white">
                  Bienvenido, {user.name}
                </h1>
                <p className="text-sm text-slate-400">
                  Gestiona tu empresa desde aquí
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-2 rounded-full border border-slate-600 bg-slate-700 px-3 py-2 sm:flex">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-sm font-medium text-slate-300">
                  {user.role}
                </span>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                <span className="text-sm font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
