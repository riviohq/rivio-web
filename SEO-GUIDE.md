# SEO Guide – Keep rivioapp.com on Top

Use this checklist to keep your site visible and ranking on Google.

---

## 1. Technical (already done on the site)

- **Sitemap** – `https://rivioapp.com/sitemap.xml` lists your main pages so Google can crawl them. Rebuild the site after adding new important pages so the sitemap updates.
- **robots.txt** – Allows all crawlers and points to the sitemap. Live at `https://rivioapp.com/robots.txt`.
- **Meta tags** – Title, description, Open Graph, and Twitter are set in `app/layout.tsx`. Use the same style (pay per day, no subscription, India) on new pages.

---

## 2. Content

- **Unique, useful content** – Every important page (home, features, about, partner program, help) should have clear headings (H1, H2) and 200–500+ words that explain what RIVIO is and what the user gets. Avoid thin or duplicate text.
- **Target phrases** – Use the same phrases people search: e.g. “pay per day gym”, “gym without subscription”, “yoga pay per day”, “fitness app India”, “gym membership alternative”. Use them in titles, headings, and first paragraph.
- **Update regularly** – Add a short blog or “Updates” / “Help” content occasionally (e.g. new cities, new features). Fresh content helps rankings over time.

---

## 3. Google Search Console

- **Add and verify the property** – Go to [Google Search Console](https://search.google.com/search-console), add `https://rivioapp.com` (and `https://www.rivioapp.com` if you use it), and verify via DNS or HTML file.
- **Submit sitemap** – In Search Console, open “Sitemaps” and submit: `https://rivioapp.com/sitemap.xml`.
- **Check weekly** – Look at “Performance” (queries, clicks, impressions) and “Coverage” (indexed vs errors). Fix any critical errors or security issues.

---

## 4. Page speed & mobile

- **Keep the site fast** – Minimize huge images and scripts. Use Next.js image optimization where possible; with static export, use compressed images and avoid blocking scripts.
- **Mobile-friendly** – Your layout is responsive. Test with [Google’s Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) and fix any issues.

---

## 5. Links & trust

- **Get real backlinks** – List RIVIO on app stores (Google Play, App Store), product directories, and fitness/startup lists. One link from a trusted site (e.g. news, blog, directory) is worth more than many low-quality links.
- **Internal links** – Link from the homepage and main sections to “Partner Program”, “App Features”, “About”, “Help”. Use clear anchor text (e.g. “pay per day gym”, “partner with us”).

---

## 6. Local SEO (India)

- **Google Business** – If you have an office or location, create/claim a [Google Business Profile](https://business.google.com) and keep NAP (name, address, phone) consistent with the website.
- **Location phrases** – Use “pay per day gym in [city]” or “fitness app India” in titles and content where it fits (e.g. “Coming to Delhi, Mumbai, Bangalore”).

---

## 7. Consistency

- **Same URL** – Prefer one URL (e.g. only `rivioapp.com` or only `www.rivioapp.com`) and redirect the other to it. Set `metadataBase` and canonical to that URL (already set to `https://rivioapp.com`).
- **Structured data** – Later you can add [JSON-LD](https://developers.google.com/search/docs/appearance/structured-data) (e.g. Organization, WebSite, FAQ) to help Google show rich results.

---

## Quick checklist (repeat every few months)

- [ ] Submit sitemap in Google Search Console.
- [ ] Check Search Console for errors and fix them.
- [ ] Add or update one piece of content (help, update, or city).
- [ ] Ensure title and description on new pages match your main keywords.
- [ ] Test one important page with Mobile-Friendly Test and PageSpeed Insights.
- [ ] Get at least one new quality backlink (directory, partner, or press).

---

*Keep this file in the repo and tick off items as you go. Consistency and quality content matter more than one-time tricks.*
