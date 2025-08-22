import { requireAdmin } from '@/lib/sessions';

export async function AdminPanel() {
  await requireAdmin(); // Redirige si no es admin

  return (
    <div className="rounded-lg bg-red-50 p-4">
      <h2 className="text-lg font-semibold text-red-800">
        Panel de Administración
      </h2>
      <p className="text-red-600">Solo visible para administradores</p>
    </div>
  );
}
