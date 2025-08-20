"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Card className="mx-auto w-full max-w-sm border border-slate-700 bg-slate-900 text-slate-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Iniciar Sesión</CardTitle>
        <CardDescription className="text-slate-400 text-center">
          Ingresa tu correo y contraseña para acceder a tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mario@gestorpro.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-slate-700 bg-slate-950 text-slate-100 focus:border-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-slate-700 bg-slate-950 text-slate-50 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex items-left justify-center">
            <Button type="button" variant="link" className="text-sm text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
          <div className="flex w-60 items-center justify-between gap-4">
            <Button type="submit" className="w-40 bg-slate-50 text-slate-950 hover:bg-slate-200">
                Ingresar
            </Button>
            <Link href="/" className="w-40 text-center text-slate-50 hover:text-blue-500">
                <Button type="button" className="w-40 bg-slate-50 text-slate-950 hover:bg-slate-200">
                    Regresar
                </Button>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}