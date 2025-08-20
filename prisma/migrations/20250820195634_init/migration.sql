-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'TRABAJADOR');

-- CreateEnum
CREATE TYPE "public"."EstadoTareas" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'COMPLETADA');

-- CreateEnum
CREATE TYPE "public"."EstadoFacturas" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'PAGADO', 'ARCHIVADO');

-- CreateTable
CREATE TABLE "public"."usuarios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "role" "public"."Role" NOT NULL DEFAULT 'TRABAJADOR',

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."clientes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "direccion" TEXT,
    "contacto" TEXT,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."proveedores" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "direccion" TEXT,
    "contacto" TEXT,

    CONSTRAINT "proveedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tareas" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" "public"."EstadoTareas" NOT NULL,
    "fechaLimite" TIMESTAMP(3),
    "asignadoAId" TEXT NOT NULL,

    CONSTRAINT "tareas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."facturas_clientes" (
    "id" TEXT NOT NULL,
    "numFactura" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "estado" "public"."EstadoFacturas" NOT NULL,
    "clienteId" TEXT NOT NULL,
    "asignadoAId" TEXT NOT NULL,

    CONSTRAINT "facturas_clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."facturas_proveedores" (
    "id" TEXT NOT NULL,
    "numFactura" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "estado" "public"."EstadoFacturas" NOT NULL,
    "proveedorId" TEXT NOT NULL,
    "asignadoAId" TEXT NOT NULL,

    CONSTRAINT "facturas_proveedores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "public"."usuarios"("correo");

-- CreateIndex
CREATE INDEX "usuarios_correo_idx" ON "public"."usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_correo_key" ON "public"."clientes"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "proveedores_correo_key" ON "public"."proveedores"("correo");

-- CreateIndex
CREATE INDEX "tareas_asignadoAId_idx" ON "public"."tareas"("asignadoAId");

-- CreateIndex
CREATE INDEX "tareas_estado_idx" ON "public"."tareas"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "facturas_clientes_numFactura_key" ON "public"."facturas_clientes"("numFactura");

-- CreateIndex
CREATE INDEX "facturas_clientes_clienteId_idx" ON "public"."facturas_clientes"("clienteId");

-- CreateIndex
CREATE INDEX "facturas_clientes_asignadoAId_idx" ON "public"."facturas_clientes"("asignadoAId");

-- CreateIndex
CREATE INDEX "facturas_clientes_estado_idx" ON "public"."facturas_clientes"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "facturas_proveedores_numFactura_key" ON "public"."facturas_proveedores"("numFactura");

-- CreateIndex
CREATE INDEX "facturas_proveedores_proveedorId_idx" ON "public"."facturas_proveedores"("proveedorId");

-- CreateIndex
CREATE INDEX "facturas_proveedores_asignadoAId_idx" ON "public"."facturas_proveedores"("asignadoAId");

-- CreateIndex
CREATE INDEX "facturas_proveedores_estado_idx" ON "public"."facturas_proveedores"("estado");

-- AddForeignKey
ALTER TABLE "public"."tareas" ADD CONSTRAINT "tareas_asignadoAId_fkey" FOREIGN KEY ("asignadoAId") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."facturas_clientes" ADD CONSTRAINT "facturas_clientes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."facturas_clientes" ADD CONSTRAINT "facturas_clientes_asignadoAId_fkey" FOREIGN KEY ("asignadoAId") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."facturas_proveedores" ADD CONSTRAINT "facturas_proveedores_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "public"."proveedores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."facturas_proveedores" ADD CONSTRAINT "facturas_proveedores_asignadoAId_fkey" FOREIGN KEY ("asignadoAId") REFERENCES "public"."usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
