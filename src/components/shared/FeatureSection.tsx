// src/component/shared
'use client';

import {
  ChartBarSquareIcon,
  ReceiptPercentIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Dashboard de Administración',
    description:
      'Una visión completa en tiempo real del rendimiento de tu negocio.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'Gestión de Trabajadores',
    description:
      'Administra a tu equipo, asigna roles y monitorea su desempeño.',
    icon: UsersIcon,
  },
  {
    name: 'Facturación Simplificada',
    description:
      'Crea y envía facturas profesionales en segundos y gestiona pagos.',
    icon: ReceiptPercentIcon,
  },
  {
    name: 'Gestor de Tareas',
    description:
      'Organiza proyectos, asigna tareas y colabora de forma eficiente.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Reportes Detallados',
    description:
      'Genera informes personalizados para tomar decisiones estratégicas.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Funcionalidad CRUD',
    description: 'Crea, Lee, Actualiza y Elimina datos con total control.',
    icon: CpuChipIcon,
  },
];

export function FeatureSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 text-center text-white md:py-24"
    >
      {/* Inverted Background HomePage gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="bg-gradient-features absolute inset-0"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Funcionalidades que impulsan tu negocio
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Descubre cómo{' '}
          <span className="font-semibold text-blue-400">GestorPro</span> te
          ayuda a simplificar cada aspecto de la gestión empresarial.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group space-y-4 rounded-xl border border-slate-600 bg-slate-700/50 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-700/70 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:from-blue-400 group-hover:to-indigo-400 group-hover:shadow-lg">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                {feature.name}
              </h3>
              <p className="text-slate-300 transition-colors duration-300 group-hover:text-slate-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
