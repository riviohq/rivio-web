/**
 * Security utilities for input validation, sanitization, and encryption
 */

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }

  return input
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (typeof email !== 'string') {
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Validate and sanitize email
 */
export function sanitizeEmail(email: string): string | null {
  const sanitized = sanitizeInput(email).toLowerCase()
  return isValidEmail(sanitized) ? sanitized : null
}

/**
 * Validate name (alphanumeric, spaces, hyphens, apostrophes)
 */
export function isValidName(name: string): boolean {
  if (typeof name !== 'string') {
    return false
  }

  const nameRegex = /^[a-zA-Z\s\-'\.]{2,100}$/
  return nameRegex.test(name.trim())
}

/**
 * Sanitize name
 */
export function sanitizeName(name: string): string | null {
  const sanitized = sanitizeInput(name).trim()
  return isValidName(sanitized) ? sanitized : null
}

/**
 * Validate message content
 */
export function isValidMessage(message: string): boolean {
  if (typeof message !== 'string') {
    return false
  }

  // Allow 10 to 5000 characters
  const trimmed = message.trim()
  return trimmed.length >= 10 && trimmed.length <= 5000
}

/**
 * Sanitize message
 */
export function sanitizeMessage(message: string): string | null {
  const sanitized = sanitizeInput(message).trim()
  return isValidMessage(sanitized) ? sanitized : null
}

/**
 * Validate and sanitize form data
 */
export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface SanitizedContactFormData {
  name: string | null
  email: string | null
  message: string | null
  errors: string[]
}

export function sanitizeContactForm(data: ContactFormData): SanitizedContactFormData {
  const errors: string[] = []
  
  const name = sanitizeName(data.name)
  if (!name) {
    errors.push('Name must be 2-100 characters and contain only letters, spaces, hyphens, and apostrophes')
  }

  const email = sanitizeEmail(data.email)
  if (!email) {
    errors.push('Please provide a valid email address')
  }

  const message = sanitizeMessage(data.message)
  if (!message) {
    errors.push('Message must be between 10 and 5000 characters')
  }

  return {
    name,
    email,
    message,
    errors,
  }
}

/**
 * Generate CSRF token (for future API routes)
 */
export function generateCSRFToken(): string {
  // In production, use a cryptographically secure random generator
  const array = new Uint8Array(32)
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array)
  } else {
    // Fallback for server-side
    const crypto = require('crypto')
    crypto.randomFillSync(array)
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Validate request size (prevent DoS)
 */
export function validateRequestSize(body: string, maxSize: number = 1024 * 1024): boolean {
  // 1MB default max size
  if (typeof body !== 'string') {
    return false
  }
  return Buffer.byteLength(body, 'utf8') <= maxSize
}

