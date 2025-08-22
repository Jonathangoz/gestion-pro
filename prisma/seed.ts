// prisma/seed.ts

import {
  PrismaClient,
  Role,
  EstadoTareas,
  EstadoFacturas,
} from '@prisma/client';
import { hashPassword } from '../src/lib/hash';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  try {
    // Limpiar datos existentes (opcional - comentar si no quieres limpiar)
    console.log('🧹 Limpiando datos existentes...');
    await prisma.facturaProveedor.deleteMany({});
    await prisma.facturaCliente.deleteMany({});
    await prisma.tarea.deleteMany({});
    await prisma.cliente.deleteMany({});
    await prisma.proveedor.deleteMany({});
    await prisma.usuario.deleteMany({});

    // Hashear contraseñas con Argon2
    console.log('🔐 Hasheando contraseñas con Argon2id...');
    const passwordAdmin = await hashPassword('passwordAdmin123');
    const passwordTrabajador = await hashPassword('passwordTrabajador123');

    console.log('✅ Contraseñas hasheadas exitosamente');

    // Crear usuarios usando transacciones para mejor consistencia
    console.log('👥 Creando usuarios...');
    
    const usuarioAdmin = await prisma.usuario.upsert({
      where: { correo: 'admin@gestion.com' },
      update: {},
      create: {
        name: 'Admin Global',
        correo: 'admin@gestion.com',
        password: passwordAdmin,
        contacto: '555-1234',
        role: Role.ADMIN,
        activo: true,
      },
    });

    const usuarioTrabajador = await prisma.usuario.upsert({
      where: { correo: 'juan.perez@gestion.com' },
      update: {},
      create: {
        name: 'Juan Pérez',
        correo: 'juan.perez@gestion.com',
        password: passwordTrabajador,
        contacto: '555-5678',
        role: Role.TRABAJADOR,
        activo: true,
      },
    });

    console.log(`✅ Usuario admin creado: ${usuarioAdmin.correo}`);
    console.log(`✅ Usuario trabajador creado: ${usuarioTrabajador.correo}`);

    // Crear cliente
    console.log('🏢 Creando cliente...');
    const clienteEmpresa = await prisma.cliente.upsert({
      where: { correo: 'contacto@cliente.com' },
      update: {},
      create: {
        name: 'Cliente S.A.',
        correo: 'contacto@cliente.com',
        direccion: 'Calle Falsa 123',
        contacto: '555-9876',
      },
    });

    console.log(`✅ Cliente creado: ${clienteEmpresa.name}`);

    // Crear proveedor
    console.log('🏭 Creando proveedor...');
    const proveedorServicios = await prisma.proveedor.upsert({
      where: { correo: 'info@proveedor.com' },
      update: {},
      create: {
        name: 'Proveedor Ltda.',
        correo: 'info@proveedor.com',
        direccion: 'Avenida Siempre Viva 742',
        contacto: '555-2468',
      },
    });

    console.log(`✅ Proveedor creado: ${proveedorServicios.name}`);

    // Crear tarea
    console.log('📋 Creando tarea...');
    
    // Crear fecha límite más robusta
    const fechaLimite = new Date();
    fechaLimite.setMonth(fechaLimite.getMonth() + 1); // 1 mes desde hoy
    fechaLimite.setHours(10, 0, 0, 0); // 10:00 AM

    const tareaImportante = await prisma.tarea.create({
      data: {
        titulo: 'Crear factura para el Cliente 001',
        descripcion: 'Se requiere todos sus datos actualizados, si no está creado, crearlo',
        estado: EstadoTareas.PENDIENTE,
        fechaLimite: fechaLimite,
        asignadoAId: usuarioTrabajador.id,
      },
    });

    console.log(`✅ Tarea creada: ${tareaImportante.titulo}`);

    // Crear facturas con fechas más dinámicas
    console.log('🧾 Creando facturas...');
    
    // Fechas para facturas
    const fechaVencimientoCliente = new Date();
    fechaVencimientoCliente.setDate(fechaVencimientoCliente.getDate() + 30); // 30 días
    
    const fechaVencimientoProveedor = new Date();
    fechaVencimientoProveedor.setDate(fechaVencimientoProveedor.getDate() + 15); // 15 días

    const facturaCliente = await prisma.facturaCliente.upsert({
      where: { numFactura: 'FC-2025-001' },
      update: {},
      create: {
        numFactura: 'FC-2025-001',
        fechaVencimiento: fechaVencimientoCliente,
        estado: EstadoFacturas.PENDIENTE,
        clienteId: clienteEmpresa.id,
        asignadoAId: usuarioAdmin.id,
      },
    });

    const facturaProveedor = await prisma.facturaProveedor.upsert({
      where: { numFactura: 'FP-2025-001' },
      update: {},
      create: {
        numFactura: 'FP-2025-001',
        fechaVencimiento: fechaVencimientoProveedor,
        estado: EstadoFacturas.EN_PROCESO,
        proveedorId: proveedorServicios.id,
        asignadoAId: usuarioTrabajador.id,
      },
    });

    console.log(`✅ Factura cliente creada: ${facturaCliente.numFactura}`);
    console.log(`✅ Factura proveedor creada: ${facturaProveedor.numFactura}`);

    // Crear datos adicionales para pruebas
    console.log('📊 Creando datos adicionales...');

    // Crear un segundo trabajador
    const passwordTrabajador2 = await hashPassword('passwordTrabajador456');
    const usuarioTrabajador2 = await prisma.usuario.upsert({
      where: { correo: 'maria.gonzalez@gestion.com' },
      update: {},
      create: {
        name: 'María González',
        correo: 'maria.gonzalez@gestion.com',
        password: passwordTrabajador2,
        contacto: '555-9999',
        role: Role.TRABAJADOR,
        activo: true,
      },
    });

    // Crear una tarea completada
    const tareaCompletada = await prisma.tarea.create({
      data: {
        titulo: 'Revisar facturas del mes anterior',
        descripcion: 'Verificar todas las facturas de agosto 2024',
        estado: EstadoTareas.COMPLETADA,
        fechaLimite: null, // Sin fecha límite
        asignadoAId: usuarioTrabajador2.id,
      },
    });

    console.log('✅ Seed exitoso. Base de datos poblada con datos de prueba.');
    
    // Resumen de datos creados
    console.log('\n📊 RESUMEN DE DATOS CREADOS:');
    console.log('=====================================');
    console.log('👥 Usuarios:');
    console.log(`   - Admin: ${usuarioAdmin.correo}`);
    console.log(`   - Trabajador 1: ${usuarioTrabajador.correo}`);
    console.log(`   - Trabajador 2: ${usuarioTrabajador2.correo}`);
    
    console.log('\n🏢 Clientes:');
    console.log(`   - ${clienteEmpresa.name} (${clienteEmpresa.correo})`);
    
    console.log('\n🏭 Proveedores:');
    console.log(`   - ${proveedorServicios.name} (${proveedorServicios.correo})`);
    
    console.log('\n📋 Tareas:');
    console.log(`   - ${tareaImportante.titulo} (${tareaImportante.estado})`);
    console.log(`   - ${tareaCompletada.titulo} (${tareaCompletada.estado})`);
    
    console.log('\n🧾 Facturas:');
    console.log(`   - Cliente: ${facturaCliente.numFactura} (${facturaCliente.estado})`);
    console.log(`   - Proveedor: ${facturaProveedor.numFactura} (${facturaProveedor.estado})`);
    
    console.log('\n🔐 Credenciales de prueba:');
    console.log('   Admin: admin@gestion.com / passwordAdmin123');
    console.log('   Trabajador 1: juan.perez@gestion.com / passwordTrabajador123');
    console.log('   Trabajador 2: maria.gonzalez@gestion.com / passwordTrabajador456');
    
    console.log('\n✅ Seed completado exitosamente!');

  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    
    if (error instanceof Error) {
      console.error('Mensaje:', error.message);
      if (error.stack) {
        console.error('Stack trace:', error.stack);
      }
    }
    
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('💥 Error crítico en el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    console.log('🔌 Desconectando de la base de datos...');
    await prisma.$disconnect();
  });