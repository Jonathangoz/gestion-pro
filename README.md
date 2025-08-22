# GestorPro

**Plataforma integral de gestión empresarial** con dashboard avanzado, sistema de facturación, gestión de usuarios con roles personalizables, tareas independientes y reportes detallados. Interfaz moderna con tema oscuro profesional.

## Stack Tecnológico

- **Frontend:** Next.js 15, React 19, TailwindCSS 4
- **Backend:** Server Actions, Server Components
- **Base de Datos:** PostgreSQL con Prisma ORM 6.14
- **Autenticación:** NextAuth.js 5 con Argon2id
- **Hosting:** Vercel (con soporte para despliegue local)
- **Gestión de paquetes:** pnpm 10+
- **Runtime:** Node.js 22+
- **HASH PASSWORD:** Argon2 (argon2id - hasheo mas robusto y seguro)
- **NEXTAUTH V5:** Autenticacion - Autorizacion - Validacion, mas seguro y robusto:
    * Session-based authentication con base de datos
    * Server Actions para verificación de sesión
    * Middleware para protección de rutas

## Características Principales

- Dashboard empresarial con métricas en tiempo real
- Sistema de facturación para clientes y proveedores
- Gestión de usuarios con roles (ADMIN/TRABAJADOR)
- Sistema de tareas con estados (PENDIENTE/EN_PROCESO/COMPLETADA)
- Gestión de clientes y proveedores
- Interfaz responsive con tema oscuro profesional
- Autenticación segura con Argon2id
- Reportes y analytics detallados

## Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js 22+** - [Descargar aquí](https://nodejs.org/)
- **pnpm 10+** - Instalar con: `npm install -g pnpm`
- **PostgreSQL** (local) o cuenta en **Neon** (recomendado)

## Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/gestion-pro.git
cd gestion-pro
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Base de datos (elige una opción)

# Opción A: Neon (Recomendado)
DATABASE_URL="postgresql://tu_usuario:tu_password@tu_host.neon.tech/tu_database?sslmode=require"

# Opción B: PostgreSQL Local
# DATABASE_URL="postgresql://usuario:password@localhost:5432/gestorpro?schema=public"

# Autenticación NextAuth.js
AUTH_SECRET="tu_clave_secreta_de_32_caracteres_minimo"
AUTH_TRUST_HOST=true
AUTH_URL=http://localhost:3000

# Opcional: Para desarrollo
NODE_ENV=development
```

**Generar AUTH_SECRET:**
- Visita: https://generate-secret.vercel.app/32
- Copia la clave generada y pégala en `AUTH_SECRET`

**Nota sobre AUTH_TRUST_HOST:**
`AUTH_TRUST_HOST=true` evita errores de `UntrustedHost` al iniciar en localhost. Esta es una protección de NextAuth.js que debe deshabilitarse solo en desarrollo.

### 4. Configurar base de datos

#### Opción A: Usar Neon (Recomendado)

1. Crea una cuenta en [Neon](https://neon.tech)
2. Crea un nuevo proyecto
3. Copia la cadena de conexión en `DATABASE_URL`

#### Opción B: PostgreSQL Local

1. Instala PostgreSQL localmente
2. Crea una base de datos: `CREATE DATABASE gestorpro;`
3. Configura la URL en `.env.local`

### 5. Aplicar migraciones y poblar datos

```bash
# Generar cliente de Prisma
pnpm prisma:generate

# Aplicar migraciones a la base de datos
pnpm prisma:migrate:deploy

# Poblar con datos de prueba
pnpm db:seed
```

### 6. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

### Desarrollo
- `pnpm dev` - Inicia servidor de desarrollo con Turbopack
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Inicia el servidor de producción
- `pnpm lint` - Ejecuta ESLint
- `pnpm lint:fix` - Corrige errores de ESLint automáticamente

### Formateo de código
- `pnpm format` - Formatea código con Prettier
- `pnpm format:check` - Verifica formato sin modificar
- `pnpm format:write` - Formatea todos los archivos soportados

### Testing
- `pnpm test` - Ejecuta tests con Vitest
- `pnpm test:watch` - Ejecuta tests en modo watch
- `pnpm test:coverage` - Genera reporte de cobertura

### Base de datos (Prisma)
- `pnpm prisma:generate` - Genera cliente de Prisma
- `pnpm prisma:studio` - Abre Prisma Studio (interfaz visual)
- `pnpm prisma:migrate:dev` - Crea y aplica nueva migración
- `pnpm prisma:migrate:deploy` - Aplica migraciones existentes
- `pnpm prisma:db:push` - Sincroniza schema sin migración
- `pnpm db:seed` - Pobla la base de datos con datos de prueba

## Gestión de Base de Datos

### Crear nueva migración

```bash
# Después de modificar schema.prisma
pnpm prisma:migrate:dev --name descripcion_cambio
```

### Aplicar migraciones en producción

```bash
pnpm prisma:migrate:deploy
```

### Poblar base de datos

```bash
# Ejecutar seed (datos de prueba)
pnpm db:seed
```

### Ver datos en interfaz visual

```bash
# Abrir Prisma Studio
pnpm prisma:studio
```

## Estructura del Proyecto

```
gestion-pro/
├── prisma/
│   ├── schema.prisma      # Esquema de base de datos
│   ├── seed.ts           # Datos de prueba
│   └── migrations/       # Migraciones SQL
├── src/
│   ├── app/             # App Router (Next.js 15)
│   ├── components/      # Componentes React
│   ├── lib/            # Utilidades y configuraciones
│   └── middleware.ts   # Middleware de autenticación
├── .env.local          # Variables de entorno (crear manualmente)
└── package.json        # Dependencias y scripts
```

## Datos de Prueba

Después de ejecutar `pnpm db:seed`, puedes usar estas credenciales:

### Usuarios de prueba:
- **Admin:** `admin@gestion.com` / `passwordAdmin123`
- **Trabajador 1:** `juan.perez@gestion.com` / `passwordTrabajador123`
- **Trabajador 2:** `maria.gonzalez@gestion.com` / `passwordTrabajador456`

### Datos incluidos:
- 3 usuarios con diferentes roles
- 1 cliente y 1 proveedor
- 2 tareas (pendiente y completada)
- 2 facturas (cliente y proveedor)

## Despliegue en Producción

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno:
   ```env
   DATABASE_URL=tu_url_de_neon_o_postgres
   AUTH_SECRET=tu_clave_secreta_32_caracteres
   AUTH_TRUST_HOST=false
   AUTH_URL=https://tu-dominio.vercel.app
   ```
3. Despliega automáticamente con cada push

### Otros proveedores

1. Construye la aplicación: `pnpm build`
2. Aplica migraciones: `pnpm prisma:migrate:deploy`
3. Inicia en producción: `pnpm start` (tambien lo puedes probar en local para ver el rendimiento real del aplicativo web)

## Solución de Problemas

### Error `UntrustedHost` en localhost
```env
# Agregar a .env.local
AUTH_TRUST_HOST=true
```

### Error de conexión a base de datos
- Verifica que la `DATABASE_URL` sea correcta
- Asegúrate de que la base de datos esté accesible
- Para Neon, verifica que incluyas `?sslmode=require`

### Error al ejecutar seed
```bash
# Regenerar cliente y aplicar migraciones
pnpm prisma:generate
pnpm prisma:migrate:deploy
pnpm db:seed
```

## Desarrollo

### Flujo de trabajo recomendado

1. Crear nueva rama: `git checkout -b feature/nueva-funcionalidad`
2. Modificar código
3. Ejecutar tests: `pnpm test`
4. Formatear código: `pnpm format`
5. Lint: `pnpm lint:fix`
6. Commit y push

### Modificar base de datos

1. Edita `prisma/schema.prisma`
2. Crea migración: `pnpm prisma:migrate:dev --name nombre_cambio`
3. Actualiza seed si es necesario
4. Prueba localmente: `pnpm db:seed`

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

## Soporte

Si tienes problemas:

1. Revisa la sección de "Solución de Problemas"
2. Verifica que todas las variables de entorno estén configuradas
3. Asegúrate de usar Node.js 22+ y pnpm 10+
4. Abre un issue en GitHub con detalles del error

---

Desarrollado con Next.js 15, React 19, y las mejores prácticas de desarrollo moderno. 
