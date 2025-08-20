import Link from "next/link";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { Twitter, Linkedin, Facebook } from "lucide-react"; // Usamos lucide-react, compatible con heroicons y shadcn

export function Footer() {
  return (
    <footer className="border-t border-slate-500 bg-slate-800 py-12 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          {/* Logo y nombre de la empresa */}
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-8 w-8 text-slate-50" />
            <span className="text-2xl font-bold text-slate-50">GestorPro</span>
          </div>

          {/* Enlaces de navegación */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:flex-nowrap">
            <Link href="#features" className="hover:text-slate-50">
              Características
            </Link>
            <Link href="#pricing" className="hover:text-slate-50">
              Precios
            </Link>
            <Link href="#contact" className="hover:text-slate-50">
              Contacto
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-50">
              Política de Privacidad
            </Link>
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-slate-50">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-50">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-slate-50">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GestorPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}