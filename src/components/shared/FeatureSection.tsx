import {
  ChartBarSquareIcon,
  ReceiptPercentIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Dashboard de Administración",
    description: "Una visión completa en tiempo real del rendimiento de tu negocio.",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Gestión de Trabajadores",
    description: "Administra a tu equipo, asigna roles y monitorea su desempeño.",
    icon: UsersIcon,
  },
  {
    name: "Facturación Simplificada",
    description: "Crea y envía facturas profesionales en segundos y gestiona pagos.",
    icon: ReceiptPercentIcon,
  },
  {
    name: "Gestor de Tareas",
    description: "Organiza proyectos, asigna tareas y colabora de forma eficiente.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Reportes Detallados",
    description: "Genera informes personalizados para tomar decisiones estratégicas.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Funcionalidad CRUD",
    description: "Crea, Lee, Actualiza y Elimina datos con total control.",
    icon: CpuChipIcon,
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="py-16 text-center text-slate-950 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Funcionalidades que impulsan tu negocio
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Descubre cómo **GestorPro** te ayuda a simplificar cada aspecto de la gestión empresarial.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="space-y-4 rounded-lg bg-gray-50 p-6 shadow-md transition-transform duration-300 hover:scale-105">
              <feature.icon className="mx-auto h-12 w-12 text-slate-950" />
              <h3 className="text-xl font-semibold">{feature.name}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}