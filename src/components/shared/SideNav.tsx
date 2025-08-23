// SideNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useState } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  HomeIcon,
  DocumentCurrencyDollarIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { LogOutButton } from '@/components/login/Logout';

interface SideNavProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Facturas',
    href: '/dashboard/invoices',
    icon: DocumentCurrencyDollarIcon,
  },
  { name: 'Usuarios', href: '/dashboard/users', icon: UserGroupIcon },
  {
    name: 'Gestor de Tareas',
    href: '/dashboard/tasks',
    icon: ClipboardDocumentCheckIcon,
  },
  { name: 'Reportes', href: '/dashboard/reports', icon: ChartBarSquareIcon },
  { name: 'Configuración', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function SideNav({
  collapsed = false,
  onToggleCollapse,
  onClose,
  isMobile = false,
}: SideNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 p-4">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500">
              <span className="text-sm font-bold text-white">G</span>
            </div>
            <span className="text-lg font-bold text-white">GestorPro</span>
          </Link>
        )}

        {collapsed && !isMobile && (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500">
            <span className="text-sm font-bold text-white">G</span>
          </div>
        )}

        {isMobile && (
          <Button
            variant="outline"
            size="icon"
            className="border-slate-600 bg-slate-700 text-slate-200 hover:bg-slate-600"
            onClick={onClose}
          >
            <XMarkIcon className="h-5 w-5" />
          </Button>
        )}

        {!isMobile && onToggleCollapse && (
          <Button
            variant="outline"
            size="icon"
            className="border-slate-600 bg-slate-700 text-slate-200 hover:bg-slate-600"
            onClick={onToggleCollapse}
          >
            {collapsed ? (
              <ChevronRightIcon className="h-4 w-4" />
            ) : (
              <ChevronLeftIcon className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const LinkIcon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              } ${collapsed ? 'justify-center' : ''} `}
              title={collapsed ? link.name : undefined}
            >
              <LinkIcon
                className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}
              />
              {!collapsed && (
                <span className="transition-colors duration-200">
                  {link.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4">
        {!collapsed ? (
          <div className="space-y-3">
            <div className="rounded-lg bg-slate-700/50 p-3">
              <p className="mb-1 text-xs font-medium text-slate-400">
                Estado del Sistema
              </p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                <span className="text-sm text-slate-300">Operativo</span>
              </div>
            </div>

            <LogOutButton className="w-full justify-start gap-3 bg-slate-700 text-slate-300 transition-colors duration-200 hover:bg-red-600 hover:text-white">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Cerrar Sesión
            </LogOutButton>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-2 w-2 animate-pulse rounded-full bg-green-400"
              title="Sistema Operativo"
            ></div>
            <LogOutButton
              className="bg-slate-700 p-2 text-slate-300 transition-colors duration-200 hover:bg-red-600 hover:text-white"
              title="Cerrar Sesión"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </LogOutButton>
          </div>
        )}
      </div>
    </div>
  );
}
