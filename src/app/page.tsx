'use client';

// Landing Page
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FeatureSection } from '@/components/shared/FeatureSection';
import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import { ContactSection } from '@/components/shared/Contact';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden p-4 text-center">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="bg-gradient-home absolute inset-0"></div>
          </div>

          <div className="relative z-10 container mx-auto max-w-5xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800 px-6 py-2 text-sm font-medium text-slate-300 shadow-lg">
              <span className="mr-2">🚀</span>
              Nuevas funcionalidades disponibles
            </div>

            <h1 className="text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              GestorPro
              <span className="mt-2 block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl">
                Tu aliado empresarial
              </span>
            </h1>

            <h2 className="mx-auto max-w-3xl text-xl leading-relaxed font-medium text-slate-300 sm:text-2xl md:text-3xl">
              La solución definitiva para la{' '}
              <span className="font-semibold text-blue-400">
                gestión integral
              </span>{' '}
              de tu empresa.
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Simplifica la administración, facturación y tareas de tu negocio
              con nuestra plataforma
              <span className="font-semibold text-indigo-400">
                {' '}
                intuitiva y poderosa
              </span>
              , diseñada para hacer crecer tu empresa.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
              <Link href="/login" passHref>
                <Button className="group relative transform overflow-hidden rounded-xl border-0 bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    Iniciar Sesión
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Button>
              </Link>

              <Link href="#features" passHref>
                <Button
                  variant="outline"
                  className="group rounded-xl border-2 border-slate-600 bg-slate-800/50 px-10 py-4 text-lg font-semibold text-slate-200 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:bg-slate-700/50 hover:text-white hover:shadow-xl"
                >
                  <span className="flex items-center">
                    Conoce las características
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="m-auto flex w-60 flex-col items-center space-y-4 pt-8">
              <p className="text-sm font-medium text-slate-400">
                Confiado por más de 1,000 empresas
              </p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="flex h-10 w-20 items-center justify-center rounded-md border border-slate-600 bg-slate-700">
                  <span className="text-sm font-bold text-slate-300">
                    Microsoft
                  </span>
                </div>
                <div className="flex h-10 w-20 items-center justify-center rounded-md border border-slate-600 bg-slate-700">
                  <span className="text-sm font-bold text-slate-300">
                    Google
                  </span>
                </div>
                <div className="flex h-10 w-20 items-center justify-center rounded-md border border-slate-600 bg-slate-700">
                  <span className="text-sm font-bold text-slate-300">
                    Amazon
                  </span>
                </div>
                <div className="flex h-10 w-20 items-center justify-center rounded-md border border-slate-600 bg-slate-700">
                  <span className="text-sm font-bold text-slate-300">Meta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
