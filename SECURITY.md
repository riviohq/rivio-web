# 🔒 Security Documentation

This document outlines the security measures implemented in the `xpress-web` application.

## ✅ Implemented Security Features

### 1. **Middleware Security Headers**

The application uses Next.js middleware to add comprehensive security headers to all requests:

- **Strict-Transport-Security (HSTS)**: Forces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Enables browser XSS filter
- **Content-Security-Policy (CSP)**: Restricts resource loading to prevent XSS
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features
- **Cross-Origin Policies**: Prevents cross-origin attacks

### 2. **Rate Limiting**

- **General Routes**: 100 requests per minute per IP
- **API Routes**: 30 requests per minute per IP
- **Automatic Cleanup**: Old rate limit entries are cleaned up every 5 minutes
- **429 Response**: Returns proper error message when rate limit is exceeded

### 3. **Input Validation & Sanitization**

All user inputs are validated and sanitized to prevent:
- **XSS Attacks**: HTML tags and JavaScript are stripped
- **SQL Injection**: Input is sanitized before processing
- **Email Validation**: Proper email format validation
- **Length Limits**: Enforced on all input fields

**Validation Functions:**
- `sanitizeInput()`: Removes dangerous characters
- `isValidEmail()`: Validates email format
- `isValidName()`: Validates name format (2-100 chars, alphanumeric)
- `isValidMessage()`: Validates message (10-5000 chars)
- `sanitizeContactForm()`: Complete form validation

### 4. **Environment Variable Validation**

- **Required Variables**: Validated on application startup
- **Production Checks**: Additional validations for production environment
- **Error Handling**: Application exits if critical variables are missing in production

### 5. **Encryption Utilities**

Server-side encryption utilities are available for future use:
- **AES-256-CBC Encryption**: Same algorithm as backend
- **SHA-256 Hashing**: For passwords and tokens
- **Secure Token Generation**: Cryptographically secure random tokens

## 🔐 Security Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required
NODE_ENV=development

# API Configuration (for future API routes)
NEXT_PUBLIC_API_URL=http://localhost:3001
API_SECRET_KEY=your-secret-key-here

# Encryption (required in production)
ENCRYPTION_KEY=your-32-character-minimum-encryption-key

# Database (for future database connections)
DATABASE_URL=your-database-url
DB_ENCRYPTION_KEY=your-db-encryption-key

# Feature Flags
ENABLE_RATE_LIMITING=true
```

### Production Requirements

In production, the following are **required**:
- `NEXT_PUBLIC_API_URL`: Your API endpoint
- `ENCRYPTION_KEY`: At least 32 characters for encryption

## 🛡️ Security Best Practices

### 1. **Never Expose Sensitive Data**
- Never commit `.env` files to version control
- Use environment variables for all secrets
- Never log sensitive information

### 2. **Input Validation**
- Always validate and sanitize user input
- Use the provided security utilities (`lib/security.ts`)
- Never trust client-side validation alone

### 3. **Rate Limiting**
- Rate limiting is enabled by default
- Consider using Redis for distributed rate limiting in production
- Monitor rate limit violations for potential attacks

### 4. **HTTPS Only**
- Always use HTTPS in production
- HSTS header forces HTTPS connections
- Never send sensitive data over HTTP

### 5. **Content Security Policy**
- CSP is configured to prevent XSS attacks
- Only allows resources from trusted sources
- Blocks inline scripts and styles (with exceptions for Next.js)

## 🔄 Future Enhancements

### Planned Security Features:

1. **API Route Security**
   - JWT authentication middleware
   - CSRF token validation
   - Request signing

2. **Database Security**
   - Encrypted database connections
   - Parameterized queries (via ORM)
   - Database access logging

3. **Advanced Rate Limiting**
   - Redis-based distributed rate limiting
   - Per-user rate limits
   - Adaptive rate limiting based on behavior

4. **Monitoring & Logging**
   - Security event logging
   - Failed authentication attempts
   - Suspicious activity detection

## 📋 Security Checklist

Before deploying to production:

- [ ] All environment variables are set
- [ ] `ENCRYPTION_KEY` is at least 32 characters
- [ ] HTTPS is enabled
- [ ] Rate limiting is configured appropriately
- [ ] Input validation is implemented on all forms
- [ ] CSP headers are tested and working
- [ ] No sensitive data in client-side code
- [ ] Error messages don't expose sensitive information
- [ ] Logging is configured (without sensitive data)
- [ ] Security headers are verified (use securityheaders.com)

## 🚨 Security Incident Response

If you discover a security vulnerability:

1. **Do NOT** create a public issue
2. Contact the security team immediately
3. Do not disclose the vulnerability until it's patched
4. Follow responsible disclosure practices

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

---

**Last Updated**: 2025-01-27
**Version**: 1.0.0

