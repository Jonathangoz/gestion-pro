// components/login/LoginForm.tsx
'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Autenticacion } from '@/actions/auth';

export function LoginForm() {
  const [errorMessage, dispatch, isPending] = useActionState(Autenticacion, undefined);

  return (
    <Card className="hover:shadow-3xl mx-auto w-full max-w-sm border border-slate-700/50 bg-slate-800/80 text-slate-50 shadow-2xl backdrop-blur-sm transition-all duration-300">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-bold text-white">
          Iniciar Sesión
        </CardTitle>
        <CardDescription className="text-slate-300">
          Ingresa tu correo y contraseña para acceder a tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-medium text-slate-200">
              Email
            </Label>
            <Input
              id="email"
              name="correo"
              type="email"
              placeholder="mario@gestorpro.com"
              required
              autoComplete="email"
              className="border-slate-600 bg-slate-700/50 text-slate-100 transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password" className="font-medium text-slate-200">
              Contraseña
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Minimo de 8 caracteres alfanumericos"
              required
              autoComplete="current-password"
              className="border-slate-600 bg-slate-700/50 text-slate-50 transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          {/* Mostrar errores */}
          {errorMessage && (
            <div className="rounded-lg border border-red-500/30 bg-red-900/20 p-3">
              <div className="text-center text-sm text-red-300">
                {errorMessage}
              </div>
            </div>
          )}

          <div className="flex w-full justify-center">
            <Button
              type="button"
              variant="link"
              className="text-sm text-blue-400 transition-colors duration-300 hover:text-blue-300 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              {isPending ? 'Ingresando...' : 'Ingresar'}
            </Button>

            <Link href="/" className="w-full">
              <Button
                type="button"
                variant="outline"
                className="w-full border-slate-600 bg-slate-700/50 text-slate-200 transition-all duration-300 hover:bg-slate-600 hover:text-white"
              >
                Regresar
              </Button>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
