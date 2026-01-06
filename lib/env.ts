/**
 * Environment variable validation and configuration
 * Ensures all required environment variables are set and valid
 */

interface EnvConfig {
  // API Configuration
  NEXT_PUBLIC_API_URL?: string
  API_SECRET_KEY?: string
  
  // Database (for future use)
  DATABASE_URL?: string
  DB_ENCRYPTION_KEY?: string
  
  // Security
  ENCRYPTION_KEY?: string
  JWT_SECRET?: string
  
  // Feature flags
  NODE_ENV: string
  ENABLE_RATE_LIMITING?: string
}

/**
 * Validate required environment variables
 */
export function validateEnv(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const required: (keyof EnvConfig)[] = ['NODE_ENV']
  
  // Check required variables
  for (const key of required) {
    if (!process.env[key]) {
      errors.push(`Missing required environment variable: ${key}`)
    }
  }

  // Validate NODE_ENV
  if (process.env.NODE_ENV && !['development', 'production', 'test'].includes(process.env.NODE_ENV)) {
    errors.push(`Invalid NODE_ENV: ${process.env.NODE_ENV}. Must be 'development', 'production', or 'test'`)
  }

  // Production-specific validations
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      errors.push('NEXT_PUBLIC_API_URL is required in production')
    }
    
    if (!process.env.ENCRYPTION_KEY || process.env.ENCRYPTION_KEY.length < 32) {
      errors.push('ENCRYPTION_KEY is required in production and must be at least 32 characters')
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Get environment configuration
 */
export function getEnvConfig(): EnvConfig {
  return {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    DB_ENCRYPTION_KEY: process.env.DB_ENCRYPTION_KEY,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV || 'development',
    ENABLE_RATE_LIMITING: process.env.ENABLE_RATE_LIMITING || 'true',
  }
}

/**
 * Validate environment on module load (server-side only)
 */
if (typeof window === 'undefined') {
  const validation = validateEnv()
  if (!validation.valid) {
    console.error('❌ Environment validation failed:')
    validation.errors.forEach(error => console.error(`  - ${error}`))
    
    // Only exit in production
    if (process.env.NODE_ENV === 'production') {
      process.exit(1)
    } else {
      console.warn('⚠️  Continuing in development mode despite validation errors')
    }
  } else {
    console.log('✅ Environment validation passed')
  }
}

