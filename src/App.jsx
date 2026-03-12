import { lazy, Suspense } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import CursorSpotlight from './components/ui/CursorSpotlight';

// Lazy load sections for better performance
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Achievements = lazy(() => import('./components/sections/Achievements'));
const Contact = lazy(() => import('./components/sections/Contact'));
const DevPlayground = lazy(() => import('./components/devplayground/DevPlayground'));

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark-900 text-white">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <CursorSpotlight />
        <Navigation />
        
        <main id="main-content">
          <Hero />
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          }>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <DevPlayground />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
