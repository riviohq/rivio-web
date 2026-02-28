import { MetadataRoute } from 'next'

const BASE_URL = 'https://rivioapp.com'

// Last-modified date for sitemap: used by Google in search results.
// With static export this is set when the build runs. To use the deploy date instead,
// set BUILD_DATE in your deploy step (e.g. BUILD_DATE=$(date -u +%Y-%m-%dT%H:%M:%SZ)).
const lastModified = (() => {
  const envDate = process.env.BUILD_DATE || process.env.SITEMAP_LAST_MODIFIED
  if (envDate) {
    const d = new Date(envDate)
    if (!Number.isNaN(d.getTime())) return d
  }
  return new Date()
})()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/features/member-app/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/features/business-app/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/partners/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/members/about-us/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/members/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/members/terms-conditions/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/members/support/`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/business/about-us/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/business/partner-program/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/business/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/business/terms-conditions/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE_URL}/business/support/`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
