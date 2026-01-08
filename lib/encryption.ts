/**
 * Encryption utilities for sensitive data
 * Uses AES-256-CBC encryption (same as backend)
 */

/**
 * Encrypt sensitive data (server-side only)
 * Note: This requires Node.js crypto module
 */
export function encryptData(data: string, encryptionKey: string): string {
  if (typeof window !== 'undefined') {
    throw new Error('Encryption can only be performed server-side')
  }

  const crypto = require('crypto')
  const ALGORITHM = 'aes-256-cbc'
  const IV_LENGTH = 16

  if (!encryptionKey || encryptionKey.length < 32) {
    throw new Error('Encryption key must be at least 32 characters')
  }

  const key = crypto.scryptSync(encryptionKey, 'salt', 32)
  const iv = crypto.randomBytes(IV_LENGTH)
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)

  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return iv.toString('hex') + ':' + encrypted
}

/**
 * Decrypt encrypted data (server-side only)
 */
export function decryptData(encryptedData: string, encryptionKey: string): string {
  if (typeof window !== 'undefined') {
    throw new Error('Decryption can only be performed server-side')
  }

  const crypto = require('crypto')
  const ALGORITHM = 'aes-256-cbc'

  if (!encryptionKey || encryptionKey.length < 32) {
    throw new Error('Encryption key must be at least 32 characters')
  }

  const parts = encryptedData.split(':')
  if (parts.length !== 2) {
    throw new Error('Invalid encrypted data format')
  }

  const iv = Buffer.from(parts[0], 'hex')
  const encrypted = parts[1]
  const key = crypto.scryptSync(encryptionKey, 'salt', 32)
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)

  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}

/**
 * Hash data using SHA-256 (for passwords, tokens, etc.)
 */
export function hashData(data: string): string {
  if (typeof window !== 'undefined') {
    throw new Error('Hashing can only be performed server-side')
  }

  const crypto = require('crypto')
  return crypto.createHash('sha256').update(data).digest('hex')
}

/**
 * Generate secure random token
 */
export function generateSecureToken(length: number = 32): string {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(length)
    window.crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  } else {
    const crypto = require('crypto')
    return crypto.randomBytes(length).toString('hex')
  }
}

