import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-950">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center p-4 text-center">
          <div className="container mx-auto max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              GestorPro Tu aliado
            </h1>
            <h2 className="text-2xl font-semibold text-slate-700">
              La solución definitiva para la gestión de tu empresa.
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              Simplifica la administración, facturación y tareas de tu negocio con nuestra plataforma intuitiva y poderosa.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/login" passHref>
                <Button className="group px-8 py-3 text-lg font-semibold">
                  Iniciar Sesión
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#features" passHref>
                <Button variant="ghost" className="px-8 py-3 text-lg font-semibold">
                  Conoce las características
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}