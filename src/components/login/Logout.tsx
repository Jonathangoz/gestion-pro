// components/logout-button.tsx - Botón para cerrar sesión
'use client';

import { SignOut } from '@/actions/auth';
import { Button } from '@/components/ui/button';

// Asegúrate de que tu LogOutButton acepte className y children
interface LogOutButtonProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

export function LogOutButton({
  className,
  children,
  title,
  ...props
}: LogOutButtonProps) {
  return (
    <form action={SignOut}>
      <Button className={className} title={title} {...props}>
        {children || 'Cerrar Sesión'}
      </Button>
    </form>
  );
}
