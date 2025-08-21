"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/70 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 transition-all duration-300"
        >
          <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-1 transition-all duration-300 group-hover:from-blue-400 group-hover:to-indigo-400">
            <BriefcaseIcon className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
            GestorPro
          </span>
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="#features"
            className="pb-1 text-slate-300 transition-all duration-300 hover:border-b-2 hover:border-blue-400 hover:text-white"
          >
            Características
          </Link>
          <Link
            href="#pricing"
            className="pb-1 text-slate-300 transition-all duration-300 hover:border-b-2 hover:border-blue-400 hover:text-white"
          >
            Precios
          </Link>
          <Link
            href="#contact"
            className="pb-1 text-slate-300 transition-all duration-300 hover:border-b-2 hover:border-blue-400 hover:text-white"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón de Iniciar Sesión */}
        <div className="flex items-center gap-4">
          <Link href="/login" passHref>
            <Button
              variant="outline"
              className="border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl"
            >
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
