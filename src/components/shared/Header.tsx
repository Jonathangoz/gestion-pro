'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/70 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
          <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
            <BriefcaseIcon className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            GestorPro
          </span>
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden space-x-6 md:flex">
          <Link 
            href="#features" 
            className="text-slate-300 transition-all duration-300 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1"
          >
            Características
          </Link>
          <Link 
            href="#pricing" 
            className="text-slate-300 transition-all duration-300 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1"
          >
            Precios
          </Link>
          <Link 
            href="#contact" 
            className="text-slate-300 transition-all duration-300 hover:text-white hover:border-b-2 hover:border-blue-400 pb-1"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón de Iniciar Sesión */}
        <div className="flex items-center gap-4">
          <Link href="/login" passHref>
            <Button 
              variant="outline" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}