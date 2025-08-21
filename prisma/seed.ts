// prisma/seed.ts

import {
  PrismaClient,
  Role,
  EstadoTareas,
  EstadoFacturas,
} from "@prisma/client";
import { hashPassword } from "../src/lib/hash";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed de la base de datos...");

  try {
    // Hashear contraseñas con la configuración segura
    console.log("🔐 Hasheando contraseñas...");
    const passwordAdmin = await hashPassword("passwordAdmin123");
    const passwordTrabajador = await hashPassword("passwordTrabajador123");

    // Crear usuarios
    console.log("👥 Creando usuarios...");
    const usuarioAdmin = await prisma.usuario.create({
      data: {
        name: "Admin Global",
        correo: "admin@gestion.com",
        password: passwordAdmin,
        contacto: "555-1234",
        role: Role.ADMIN,
      },
    });

    const usuarioTrabajador = await prisma.usuario.create({
      data: {
        name: "Juan Pérez",
        correo: "juan.perez@gestion.com",
        password: passwordTrabajador,
        contacto: "555-5678",
        role: Role.TRABAJADOR,
      },
    });

    // Crear cliente
    console.log("🏢 Creando cliente...");
    const clienteEmpresa = await prisma.cliente.create({
      data: {
        name: "Cliente S.A.",
        correo: "contacto@cliente.com",
        direccion: "Calle Falsa 123",
        contacto: "555-9876",
      },
    });

    // Crear proveedor
    console.log("🏭 Creando proveedor...");
    const proveedorServicios = await prisma.proveedor.create({
      data: {
        name: "Proveedor Ltda.",
        correo: "info@proveedor.com",
        direccion: "Avenida Siempre Viva 742",
        contacto: "555-2468",
      },
    });

    // Crear tarea
    console.log("📋 Creando tarea...");
    const tareaImportante = await prisma.tarea.create({
      data: {
        titulo: "Configurar servidor de producción",
        descripcion: "Instalar y configurar NGINX y PM2.",
        estado: EstadoTareas.PENDIENTE,
        fechaLimite: new Date("2025-09-01T10:00:00Z"),
        asignadoAId: usuarioTrabajador.id,
      },
    });

    // Crear facturas
    console.log("🧾 Creando facturas...");
    const facturaCliente = await prisma.facturaCliente.create({
      data: {
        numFactura: "FC-2025-001",
        fechaVencimiento: new Date("2025-09-15T10:00:00Z"),
        estado: EstadoFacturas.PENDIENTE,
        clienteId: clienteEmpresa.id,
        asignadoAId: usuarioAdmin.id,
      },
    });

    const facturaProveedor = await prisma.facturaProveedor.create({
      data: {
        numFactura: "FP-2025-001",
        fechaVencimiento: new Date("2025-08-30T10:00:00Z"),
        estado: EstadoFacturas.EN_PROCESO,
        proveedorId: proveedorServicios.id,
        asignadoAId: usuarioTrabajador.id,
      },
    });

    console.log("✅ Seed exitoso. Base de datos poblada.");
    console.log("📊 Datos creados:");
    console.log({
      usuarios: [usuarioAdmin.correo, usuarioTrabajador.correo],
      cliente: clienteEmpresa.correo,
      proveedor: proveedorServicios.correo,
      tarea: tareaImportante.titulo,
      facturas: [facturaCliente.numFactura, facturaProveedor.numFactura],
    });
  } catch (error) {
    console.error("❌ Error durante el seed:", error);
    throw error;
  }
}

main()
  .catch(e => {
    console.error("💥 Error crítico:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("🔌 Desconectando de la base de datos...");
    await prisma.$disconnect();
  });
