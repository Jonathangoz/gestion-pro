// src/components/shared
'use client';

import { Button } from '@/components/ui/button';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Teléfono',
    details: ['+57 (7) 123-4567', '+57 300 123-4567'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['ventas@gestorpro.com', 'soporte@gestorpro.com'],
  },
  {
    icon: MapPinIcon,
    title: 'Ubicación',
    details: ['Bucaramanga, Santander', 'Colombia'],
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="bg-gradient-home absolute inset-0"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-6 py-2 text-sm font-medium text-slate-300 shadow-lg">
            <PhoneIcon className="mr-2 h-4 w-4 text-blue-400" />
            Contáctanos
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Nuestro equipo de expertos está disponible para resolver todas tus
            dudas y ayudarte a
            <span className="font-semibold text-blue-400">
              {' '}
              elegir la mejor solución
            </span>{' '}
            para tu empresa.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="group space-y-4 rounded-xl border border-slate-600 bg-slate-700/50 p-8 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-700/70 hover:shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:from-blue-400 group-hover:to-indigo-400 group-hover:shadow-lg">
                <contact.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                {contact.title}
              </h3>
              <div className="space-y-2">
                {contact.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="text-slate-300 transition-colors duration-300 group-hover:text-slate-200"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="rounded-xl border border-slate-600 bg-slate-800/50 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-white">
              ¿Listo para comenzar?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-slate-300">
              Comienza tu prueba gratuita de 14 días y descubre cómo GestorPro
              puede transformar la gestión de tu empresa.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="group relative transform overflow-hidden rounded-xl border-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl">
                Prueba Gratuita
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-2 border-slate-600 bg-slate-700/50 px-8 py-3 text-lg font-semibold text-slate-200 hover:border-blue-500 hover:bg-slate-600/50 hover:text-white"
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
