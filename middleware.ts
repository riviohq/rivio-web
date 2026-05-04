import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// In-memory rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100, // 100 requests per minute per IP
  apiWindowMs: 60 * 1000, // 1 minute for API routes
  apiMaxRequests: 30, // 30 requests per minute for API routes
}

// Clean up old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < now) {
      rateLimitStore.delete(key)
    }
  }
}, 5 * 60 * 1000)

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const ip = request.ip || 
    request.headers.get('x-forwarded-for')?.split(',')[0] || 
    request.headers.get('x-real-ip') || 
    'unknown'
  return ip
}

function checkRateLimit(request: NextRequest, isApiRoute: boolean): boolean {
  const key = getRateLimitKey(request)
  const now = Date.now()
  const config = isApiRoute 
    ? { windowMs: RATE_LIMIT.apiWindowMs, maxRequests: RATE_LIMIT.apiMaxRequests }
    : { windowMs: RATE_LIMIT.windowMs, maxRequests: RATE_LIMIT.maxRequests }

  const record = rateLimitStore.get(key)

  if (!record || record.resetTime < now) {
    // Create new record
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs,
    })
    return true
  }

  if (record.count >= config.maxRequests) {
    return false
  }

  record.count++
  return true
}

function isLocalHost(request: NextRequest) {
  const h = request.nextUrl.hostname
  return h === 'localhost' || h === '127.0.0.1' || h === '[::1]' || h.endsWith('.local')
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isApiRoute = pathname.startsWith('/api')
  const local = isLocalHost(request)

  // Rate limiting
  if (!checkRateLimit(request, isApiRoute)) {
    return new NextResponse(
      JSON.stringify({ 
        error: 'Too many requests', 
        message: 'Rate limit exceeded. Please try again later.' 
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60',
        },
      }
    )
  }

  // Security headers
  const response = NextResponse.next()

  // Enhanced security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  // HSTS breaks or confuses plain-HTTP local dev; only send on real HTTPS hosts.
  if (!local && request.nextUrl.protocol === 'https:') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    )
  }
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()')

  // Content Security Policy
  // `upgrade-insecure-requests` forces https: for all assets — on http://localhost that
  // upgrades /_next/... to https://localhost which has no cert → CSS/JS fail (looks "unstyled").
  const connectExtra = local ? " ws: wss:" : '' // Next.js dev HMR
  const cspParts = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    `connect-src 'self' https://fonts.googleapis.com${connectExtra}`,
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ]
  if (!local) {
    cspParts.push('upgrade-insecure-requests')
  }
  response.headers.set('Content-Security-Policy', cspParts.join('; '))

  // Additional security headers
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
  // Avoid COEP/CORP/strict COOP here — they can block or interfere with Next.js
  // dev/prod loading of _next assets and fonts on some browsers.

  // Remove server information
  response.headers.delete('X-Powered-By')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

