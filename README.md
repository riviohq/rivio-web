# RIVIO Landing Page

A beautiful, animated single-page landing page for RIVIO - Universal Fitness Access Platform, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Emerald, white, and black color scheme
- ✨ **Smooth Animations**: Powered by Framer Motion
- 📱 **Fully Responsive**: Works on all devices
- 🚀 **Fast Performance**: Optimized with Next.js
- 🔒 **Security**: Middleware setup for security headers
- 🎯 **Smooth Scrolling**: Navigation with jump links

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
xpress-web/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Introduction.tsx    # About/Why RIVIO section
│   ├── AppTabs.tsx         # User/Partner app tabs
│   ├── ScreenshotShowcase.tsx  # App features showcase
│   ├── CitySearch.tsx      # City search functionality
│   ├── ContactUs.tsx       # Contact form
│   └── Footer.tsx          # Footer with links
├── middleware.ts        # Security middleware
└── tailwind.config.js  # Tailwind configuration
```

## Sections

1. **Navigation** - Fixed navigation bar with smooth scroll links
2. **Hero** - Eye-catching hero section with animated background
3. **Introduction** - Why RIVIO section with key features
4. **App Tabs** - User App and Partner App showcase with download links
5. **Screenshot Showcase** - Animated preview of app features
6. **City Search** - Search for venues (DB integration coming soon)
7. **Contact Us** - Contact form and information
8. **Footer** - Links, social media, and legal pages

## Color Scheme

- **Emerald**: `#10b981` (Primary brand color)
- **White**: `#ffffff` (Background)
- **Black**: `#000000` (Text and accents)

## Future Enhancements

- [ ] Database integration for city search
- [ ] Real contact form API integration
- [ ] Analytics tracking
- [ ] SEO optimization
- [ ] Multi-language support

## License

© 2025 RIVIO. All rights reserved.
