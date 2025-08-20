'use client';

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center p-4 text-center overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-home"></div>
          </div>
          
          <div className="container relative mx-auto max-w-5xl space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-6 py-2 text-sm font-medium text-slate-300 shadow-lg">
              <span className="mr-2">🚀</span>
              Nuevas funcionalidades disponibles
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white leading-tight">
              GestorPro
              <span className="block text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                Tu aliado empresarial
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed">
              La solución definitiva para la <span className="text-blue-400 font-semibold">gestión integral</span> de tu empresa.
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Simplifica la administración, facturación y tareas de tu negocio con nuestra plataforma 
              <span className="font-semibold text-indigo-400"> intuitiva y poderosa</span>, diseñada para hacer crecer tu empresa.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 pt-4">
              <Link href="/login" passHref>
                <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0">
                  <span className="relative z-10 flex items-center">
                    Iniciar Sesión
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              
              <Link href="#features" passHref>
                <Button 
                  variant="outline" 
                  className="group bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600 hover:border-blue-500 text-slate-200 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-slate-700/50"
                >
                  <span className="flex items-center">
                    Conoce las características
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-col items-center space-y-4">
              <p className="text-sm text-slate-400 font-medium">Confiado por más de 1,000 empresas</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="w-20 h-10 bg-slate-700 rounded-md flex items-center justify-center border border-slate-600">
                  <span className="text-sm font-bold text-slate-300">Microsoft</span>
                </div>
                <div className="w-20 h-10 bg-slate-700 rounded-md flex items-center justify-center border border-slate-600">
                  <span className="text-sm font-bold text-slate-300">Google</span>
                </div>
                <div className="w-20 h-10 bg-slate-700 rounded-md flex items-center justify-center border border-slate-600">
                  <span className="text-sm font-bold text-slate-300">Amazon</span>
                </div>
                <div className="w-20 h-10 bg-slate-700 rounded-md flex items-center justify-center border border-slate-600">
                  <span className="text-sm font-bold text-slate-300">Meta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}