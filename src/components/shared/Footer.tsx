"use client";

import Link from "next/link";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-900 py-12 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          {/* Logo y nombre de la empresa */}
          <div className="group flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-1 transition-all duration-300 group-hover:from-blue-400 group-hover:to-indigo-400">
              <BriefcaseIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
              GestorPro
            </span>
          </div>

          {/* Enlaces de navegación */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:flex-nowrap">
            <Link
              href="#features"
              className="text-slate-300 transition-colors duration-300 hover:text-white hover:underline hover:decoration-blue-400"
            >
              Características
            </Link>
            <Link
              href="#pricing"
              className="text-slate-300 transition-colors duration-300 hover:text-white hover:underline hover:decoration-blue-400"
            >
              Precios
            </Link>
            <Link
              href="#contact"
              className="text-slate-300 transition-colors duration-300 hover:text-white hover:underline hover:decoration-blue-400"
            >
              Contacto
            </Link>
            <Link
              href="/privacy-policy"
              className="text-slate-300 transition-colors duration-300 hover:text-white hover:underline hover:decoration-blue-400"
            >
              Política de Privacidad
            </Link>
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="rounded-full bg-slate-800 p-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full bg-slate-800 p-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-slate-800 p-2 text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700/50 pt-8 text-center text-sm">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-400">GestorPro</span>.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
