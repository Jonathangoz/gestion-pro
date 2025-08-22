// components/logout-button.tsx - Botón para cerrar sesión
'use client';

import { SignOut } from '@/actions/auth';
import { Button } from '@/components/ui/button';

export function LogOutButton() {
  return (
    <form action={SignOut}>
      <Button type="submit" variant="ghost" className="w-full justify-start">
        Cerrar Sesión
      </Button>
    </form>
  );
}
