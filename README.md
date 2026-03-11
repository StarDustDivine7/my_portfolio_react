# Debabrata Dutta - Flutter Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI with smooth animations
- 📱 Fully responsive (mobile-first design)
- ⚡ Optimized performance with code splitting
- ♿ Accessible (WCAG AA compliant)
- 🚀 Fast loading with lazy-loaded images
- 🎭 Framer Motion animations
- 📦 Production-ready build configuration

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Footer, MobileMenu
│   ├── sections/        # Hero, About, Skills, Projects, Experience, Achievements, Contact
│   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   └── ErrorBoundary.jsx
├── data/                # Static content configuration
│   ├── profile.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   └── achievements.js
├── hooks/               # Custom React hooks
│   ├── useScrollSpy.js
│   ├── useIntersectionObserver.js
│   └── useMobileMenu.js
├── utils/               # Utility functions
│   ├── scrollTo.js
│   └── animations.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Update Personal Information

Edit the data files in `src/data/`:

- `profile.js` - Name, role, contact info, social links
- `skills.js` - Technical skills by category
- `projects.js` - Portfolio projects
- `experience.js` - Work history
- `achievements.js` - Awards and certifications

### Add Project Images

Place project screenshots in `public/projects/` directory:
- fintech-app.png
- healthcare-app.png
- social-app.png
- erp-app.png
- ai-assistant.png
- video-call-app.png

### Update Resume

Replace `public/resume.pdf` with your actual resume file.

## Deployment

### GitHub Pages

1. Update `vite.config.js` base path if deploying to a subdirectory
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. The GitHub Actions workflow will automatically deploy on push to main

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: Last 2 versions
- Android Chrome: Last 2 versions

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Debabrata Dutta
- Location: Howrah, West Bengal, India
- Phone: 6290923609
- Portfolio: https://stardustdivine7.github.io/
