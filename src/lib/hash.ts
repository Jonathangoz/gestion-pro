// src/lib/hash.ts
import { hash, verify, argon2id, type Options } from "argon2";

/**
 * Configuración de Argon2id basada en las recomendaciones oficiales de OWASP 2025
 * y RFC 9106 (Internet Standard para Argon2)
 *
 * Referencias:
 * - OWASP Password Storage Cheat Sheet
 * - RFC 9106: The Argon2 Memory-Hard Function for Password Hashing and Proof-of-Work Applications
 * - Argon2 Documentation
 */

// Configuración para producción - balanceada entre seguridad y rendimiento
const PRODUCTION_OPTIONS: Options = {
  type: argon2id, // Argon2id - resistente a ataques de canal lateral y GPU
  memoryCost: 19456, // 19 MiB - recomendación OWASP para aplicaciones web
  timeCost: 2, // 2 iteraciones - OWASP recomendado
  parallelism: 1, // 1 thread - OWASP recomendado (evita problemas con Argon2i)
  hashLength: 32, // 32 bytes (256 bits) - longitud estándar segura
};

// Configuración para desarrollo - más rápida pero menos segura
const DEVELOPMENT_OPTIONS: Options = {
  type: argon2id,
  memoryCost: 4096, // 4 MiB - más rápido para desarrollo
  timeCost: 1, // 1 iteración
  parallelism: 1,
  hashLength: 32,
};

// Configuración alternativa para alta seguridad (opcional)
const HIGH_SECURITY_OPTIONS: Options = {
  type: argon2id,
  memoryCost: 47104, // 46 MiB - OWASP high security
  timeCost: 1, // 1 iteración
  parallelism: 1,
  hashLength: 32,
};

/**
 * Selecciona la configuración basada en el entorno
 */
function getArgonOptions(): Options {
  const env = process.env.NODE_ENV;

  switch (env) {
    case "development":
    case "test":
      return DEVELOPMENT_OPTIONS;
    case "production":
      // Opcional: usar configuración de alta seguridad en producción
      return process.env.ARGON2_HIGH_SECURITY === "true"
        ? HIGH_SECURITY_OPTIONS
        : PRODUCTION_OPTIONS;
    default:
      return PRODUCTION_OPTIONS;
  }
}

/**
 * Hashea una contraseña usando Argon2id con configuración segura
 *
 * @param password - La contraseña en texto plano
 * @returns Promise con la contraseña hasheada
 * @throws Error si el hashing falla
 *
 * @example
 * ```typescript
 * const hashedPassword = await hashPassword('mySecretPassword123');
 * console.log(hashedPassword); // $argon2id$v=19$m=19456,t=2,p=1$...
 * ```
 */
export async function hashPassword(password: string): Promise<string> {
  // Validaciones de entrada
  if (!password || typeof password !== "string") {
    throw new Error("Password debe ser una cadena no vacía");
  }

  if (password.length < 8) {
    throw new Error("Password debe tener al menos 8 caracteres");
  }

  if (password.length > 128) {
    throw new Error("Password no puede exceder 128 caracteres");
  }

  try {
    const options = getArgonOptions();

    // Log para debugging (solo en desarrollo)
    if (process.env.NODE_ENV === "development") {
      console.log("Argon2 options:", {
        memoryCost: `${options.memoryCost} KB (${Math.round(options.memoryCost! / 1024)} MiB)`,
        timeCost: options.timeCost,
        parallelism: options.parallelism,
        type: "argon2id",
      });
    }

    return await hash(password, options);
  } catch (error) {
    // Log del error real para debugging (no exponer al cliente)
    console.error("Error en hashPassword:", error);
    throw new Error("Error interno al procesar la contraseña");
  }
}

/**
 * Verifica una contraseña contra su hash usando timing-safe comparison
 *
 * @param password - La contraseña en texto plano
 * @param hashedPassword - La contraseña hasheada almacenada
 * @returns Promise<boolean> - true si la contraseña es correcta
 *
 * @example
 * ```typescript
 * const isValid = await verifyPassword('mySecretPassword123', storedHash);
 * if (isValid) {
 *   console.log('Contraseña correcta');
 * }
 * ```
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  // Validaciones de entrada
  if (!password || typeof password !== "string") {
    return false;
  }

  if (!hashedPassword || typeof hashedPassword !== "string") {
    return false;
  }

  // Verificar formato básico del hash Argon2
  if (!hashedPassword.startsWith("$argon2")) {
    return false;
  }

  try {
    // La función verify de argon2 ya incluye timing-safe comparison
    return await verify(hashedPassword, password);
  } catch (error) {
    // Log para debugging (solo en desarrollo)
    if (process.env.NODE_ENV === "development") {
      console.error("Error en verifyPassword:", error);
    }

    // En caso de cualquier error, retornar false por seguridad
    return false;
  }
}

/**
 * Verifica si un hash necesita ser actualizado con parámetros más seguros
 * Útil para migrar hashes cuando cambias la configuración de seguridad
 *
 * @param hashedPassword - La contraseña hasheada a verificar
 * @returns boolean - true si el hash necesita ser actualizado
 *
 * @example
 * ```typescript
 * if (needsRehash(user.password)) {
 *   const newHash = await hashPassword(plainPassword);
 *   await updateUserPassword(user.id, newHash);
 * }
 * ```
 */
export function needsRehash(hashedPassword: string): boolean {
  if (!hashedPassword || typeof hashedPassword !== "string") {
    return true;
  }

  // Verificar si es un hash válido de Argon2
  if (!hashedPassword.startsWith("$argon2")) {
    return true;
  }

  try {
    const currentOptions = getArgonOptions();

    // Construir el string de parámetros esperado
    const expectedParams = `$argon2id$v=19$m=${currentOptions.memoryCost},t=${currentOptions.timeCost},p=${currentOptions.parallelism}$`;

    // Si el hash no contiene los parámetros actuales, necesita rehash
    return !hashedPassword.includes(expectedParams);
  } catch (error) {
    // En caso de error, asumir que necesita rehash por seguridad
    console.error("Error en needsRehash:", error);
    // No exponer detalles del error al cliente
    return true;
  }
}

/**
 * Utilidad para medir el tiempo de hashing (útil para ajustar parámetros)
 * Solo disponible en desarrollo
 *
 * @param password - Password de prueba
 * @returns Promise con el tiempo en milisegundos
 */
export async function benchmarkHashing(
  password: string = "test123456"
): Promise<number> {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Benchmark solo disponible en desarrollo");
  }

  const startTime = performance.now();
  await hashPassword(password);
  const endTime = performance.now();

  return endTime - startTime;
}

/**
 * Constantes exportadas para referencia
 */
export const HASH_INFO = {
  algorithm: "Argon2id",
  version: "1.3",
  minPasswordLength: 8,
  maxPasswordLength: 128,
  saltLength: 16,
  hashLength: 32,
  recommendedMinTime: 500, // milisegundos
} as const;

/**
 * Tipo para configuración personalizada
 */
export type HashConfig = {
  memoryCost?: number;
  timeCost?: number;
  parallelism?: number;
  hashLength?: number;
  saltLength?: number;
};

/**
 * Función para crear un hasher personalizado (uso avanzado)
 *
 * @param config - Configuración personalizada
 * @returns Funciones de hash y verify con la configuración especificada
 */
export function createCustomHasher(config: HashConfig) {
  const customOptions: Options = {
    type: argon2id,
    memoryCost: config.memoryCost ?? PRODUCTION_OPTIONS.memoryCost,
    timeCost: config.timeCost ?? PRODUCTION_OPTIONS.timeCost,
    parallelism: config.parallelism ?? PRODUCTION_OPTIONS.parallelism,
    hashLength: config.hashLength ?? PRODUCTION_OPTIONS.hashLength,
  };

  return {
    hash: async (password: string) => hash(password, customOptions),
    verify: async (hashedPassword: string, password: string) =>
      verify(hashedPassword, password),
    options: customOptions,
  };
}
