// MetaDatos de la pagina
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GestorPro - El software de gestión definitivo para tu negocio',
  description:
    'Administra facturas, tareas, reportes y personal de manera eficiente con GestorPro. Ideal para administradores y trabajadores.',
  keywords: [
    'gestión empresarial',
    'gestion de proyectos',
    'software de negocios',
    'software de gestión',
    'facturación',
    'tareas',
    'reportes',
    'administración de personal',
    'productividad',
    'negocios',
    'herramientas para empresas',
  ],
  authors: [
    {
      name: 'GestorPro',
      url: 'https://gestorpro.com',
    },
  ],
  creator: 'GestorPro',
  openGraph: {
    title: 'GestorPro - El software de gestión definitivo para tu negocio',
    description: 'Simplifica la gestión de tu negocio.',
    url: 'https://gestorpro.com',
    siteName: 'GestorPro',
    images: [
      {
        url: 'https://gestorpro.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GestorPro',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
