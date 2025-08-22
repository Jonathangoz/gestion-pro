// src/components/Perfil.tsx - componente donde muestra el nombre del usuario e icono o foto
import { checkUserRole } from '@/lib/sessions';

export async function ConditionalContent() {
  const { isAdmin, user } = await checkUserRole();

  return (
    <div>
      <h2>Bienvenido, {user?.name}</h2>

      {isAdmin && (
        <div className="mt-4 rounded-lg bg-blue-50 p-4">
          <p className="text-blue-800">
            Contenido exclusivo para administradores
          </p>
        </div>
      )}
    </div>
  );
}
