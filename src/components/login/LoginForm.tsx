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
    <Card className="mx-auto w-full max-w-sm border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm text-slate-50 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold text-white">Iniciar Sesión</CardTitle>
        <CardDescription className="text-slate-300">
          Ingresa tu correo y contraseña para acceder a tu cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-slate-200 font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mario@gestorpro.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-slate-600 bg-slate-700/50 text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-slate-200 font-medium">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-slate-600 bg-slate-700/50 text-slate-50 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
            />
          </div>
          
          <div className="w-full flex justify-center">
            <Button 
              type="button" 
              variant="link" 
              className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
            >
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Ingresar
            </Button>
            
            <Link href="/" className="w-full">
              <Button 
                type="button" 
                variant="outline"
                className="w-full border-slate-600 bg-slate-700/50 text-slate-200 hover:bg-slate-600 hover:text-white transition-all duration-300"
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