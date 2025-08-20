// src/lib/hash.ts

import { hash, verify, type Options } from 'argon2'

// Configuración segura para Argon2id
const ARGON_OPTIONS: Options = {
  type: 2, // Argon2id (más seguro que Argon2i o Argon2d)
  memoryCost: 65536, // 64MB de memoria
  timeCost: 3, // 3 iteraciones
  parallelism: 4, // 4 threads paralelos
  hashLength: 32, // 32 bytes de salida
}

/**
 * Hashea una contraseña usando Argon2id
 * @param password - La contraseña en texto plano
 * @returns Promise con la contraseña hasheada
 */
export async function hashPassword(password: string): Promise<string> {
  try {
    return await hash(password, ARGON_OPTIONS)
  } catch (error) {
    throw new Error('Error al hashear la contraseña')
  }
}

/**
 * Verifica una contraseña contra su hash
 * @param password - La contraseña en texto plano
 * @param hashedPassword - La contraseña hasheada almacenada
 * @returns Promise<boolean> - true si la contraseña es correcta
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    return await verify(hashedPassword, password)
  } catch (error) {
    // Si hay cualquier error en la verificación, retorna false
    return false
  }
}

/**
 * Verifica si una contraseña necesita ser re-hasheada
 * (útil si cambias los parámetros de Argon2)
 * @param hashedPassword - La contraseña hasheada
 * @returns boolean - true si necesita ser re-hasheada
 */
export function needsRehash(hashedPassword: string): boolean {
  // Si el hash no contiene los parámetros actuales, necesita re-hash
  const currentParams = `$argon2id$v=19$m=${ARGON_OPTIONS.memoryCost},t=${ARGON_OPTIONS.timeCost},p=${ARGON_OPTIONS.parallelism}$`
  return !hashedPassword.includes(currentParams)
}