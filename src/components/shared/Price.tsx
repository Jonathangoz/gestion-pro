'use client';

import { Button } from '@/components/ui/button';
import {
  CheckIcon,
  XMarkIcon,
  StarIcon,
  BuildingOfficeIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon as CheckIconSolid } from '@heroicons/react/24/solid';
import { Footer } from './Footer';

const subscriptionPlans = [
  {
    name: 'Básico',
    price: '$29',
    period: '/mes',
    description: 'Perfecto para pequeñas empresas y emprendedores',
    icon: UserIcon,
    popular: false,
    features: [
      {
        name: 'Dashboard básico',
        included: true,
      },
      {
        name: 'Hasta 10 usuarios',
        included: true,
      },
      {
        name: 'Facturación básica',
        included: true,
      },
      {
        name: 'Gestor de tareas simple',
        included: true,
      },
      {
        name: 'Reportes básicos',
        included: true,
      },
      {
        name: 'Soporte por email',
        included: true,
      },
      {
        name: 'Funcionalidad CRUD',
        included: false,
      },
      {
        name: 'Reportes avanzados',
        included: false,
      },
      {
        name: 'Integraciones API',
        included: false,
      },
      {
        name: 'Soporte prioritario',
        included: false,
      },
    ],
  },
  {
    name: 'Profesional',
    price: '$79',
    period: '/mes',
    description: 'La opción más popular para empresas en crecimiento',
    icon: UsersIcon,
    popular: true,
    features: [
      {
        name: 'Dashboard completo',
        included: true,
      },
      {
        name: 'Hasta 50 usuarios',
        included: true,
      },
      {
        name: 'Facturación avanzada',
        included: true,
      },
      {
        name: 'Gestor de tareas completo',
        included: true,
      },
      {
        name: 'Reportes avanzados',
        included: true,
      },
      {
        name: 'Funcionalidad CRUD',
        included: true,
      },
      {
        name: 'Integraciones básicas',
        included: true,
      },
      {
        name: 'Soporte por chat',
        included: true,
      },
      {
        name: 'Integraciones API avanzadas',
        included: false,
      },
      {
        name: 'Soporte prioritario 24/7',
        included: false,
      },
    ],
  },
  {
    name: 'Empresarial',
    price: '$149',
    period: '/mes',
    description: 'Solución completa para grandes organizaciones',
    icon: BuildingOfficeIcon,
    popular: false,
    features: [
      {
        name: 'Dashboard empresarial',
        included: true,
      },
      {
        name: 'Usuarios ilimitados',
        included: true,
      },
      {
        name: 'Facturación empresarial',
        included: true,
      },
      {
        name: 'Gestor de tareas avanzado',
        included: true,
      },
      {
        name: 'Reportes personalizados',
        included: true,
      },
      {
        name: 'Funcionalidad CRUD completa',
        included: true,
      },
      {
        name: 'Integraciones API completas',
        included: true,
      },
      {
        name: 'Soporte prioritario 24/7',
        included: true,
      },
      {
        name: 'Consultor dedicado',
        included: true,
      },
      {
        name: 'Personalización avanzada',
        included: true,
      },
    ],
  },
];

export function SubscriptionSection() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="bg-gradient-features absolute inset-0"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-6 py-2 text-sm font-medium text-slate-300 shadow-lg">
              <StarIcon className="mr-2 h-4 w-4 text-yellow-400" />
              Planes de Suscripción
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Elige el plan perfecto para tu empresa
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-300">
              Comienza con nuestro plan básico y escala según las necesidades de
              tu negocio.
              <span className="font-semibold text-blue-400">
                {' '}
                Sin compromisos a largo plazo
              </span>
              .
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`group relative rounded-xl border p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-blue-500 bg-slate-800/80 ring-2 ring-blue-500/20'
                    : 'border-slate-600 bg-slate-700/50 hover:border-blue-500/50'
                } backdrop-blur-sm`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <div className="flex items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      <StarIcon className="mr-1 h-4 w-4" />
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Plan Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:from-blue-400 group-hover:to-indigo-400 group-hover:shadow-lg">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Plan Details */}
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mb-4 text-slate-300">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-lg text-slate-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      {feature.included ? (
                        <CheckIconSolid className="mr-3 h-5 w-5 flex-shrink-0 text-green-400" />
                      ) : (
                        <XMarkIcon className="mr-3 h-5 w-5 flex-shrink-0 text-slate-400" />
                      )}
                      <span
                        className={
                          feature.included ? 'text-slate-200' : 'text-slate-400'
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-xl py-3 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl'
                      : 'border-2 border-slate-600 bg-slate-800/50 text-slate-200 hover:border-blue-500 hover:bg-slate-700/50 hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular ? 'Comenzar Ahora' : 'Elegir Plan'}
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-slate-400">
              ¿Necesitas un plan personalizado para tu empresa?
            </p>
            <Button
              variant="outline"
              className="rounded-xl border-2 border-slate-600 bg-slate-800/50 px-8 py-3 text-lg font-semibold text-slate-200 hover:border-blue-500 hover:bg-slate-700/50 hover:text-white"
            >
              Contactar Ventas
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
