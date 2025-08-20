import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-500 bg-slate-800/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseIcon className="h-8 w-8 text-slate-50" />
          <span className="text-xl font-bold text-slate-50">GestorPro</span>
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="#features" className="text-slate-400 transition-colors hover:text-slate-200">
            Características
          </Link>
          <Link href="#pricing" className="text-slate-400 transition-colors hover:text-slate-200">
            Precios
          </Link>
          <Link href="#contact" className="text-slate-400 transition-colors hover:text-slate-200">
            Contacto
          </Link>
        </nav>

        {/* Botón de Iniciar Sesión */}
        <div className="flex items-center gap-4">
          <Link href="/login" passHref>
            <Button variant="outline" className="text-slate-950 bg-slate-50 hover:bg-slate-200">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}