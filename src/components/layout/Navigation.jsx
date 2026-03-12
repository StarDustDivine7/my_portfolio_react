import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollTo } from '../../utils/scrollTo';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'dev-playground', label: 'Dev Playground' },
    { id: 'contact', label: 'Contact' }
  ];

  const activeSection = useScrollSpy(menuItems.map(item => item.id));

  const handleNavigate = (sectionId) => {
    scrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          className="pointer-events-auto bg-dark-900/40 backdrop-blur-3xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_8px_32px_rgba(0,0,0,0.5),_0_0_20px_rgba(34,211,238,0.1)] rounded-2xl md:rounded-full relative overflow-hidden"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
        >
          {/* Subtle top reflection gradient */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl md:rounded-t-full pointer-events-none" />

          <div className="px-4 py-3 md:py-2 md:px-6 relative z-10">
            <div className="flex items-center justify-between md:gap-8">
              {/* Mobile Logo */}
              <button
                onClick={() => handleNavigate('home')}
                className="md:hidden text-2xl font-black bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity focus:outline-none"
                aria-label="Go to home section"
              >
                DD.
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${activeSection === item.id
                      ? 'text-primary-400 bg-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default Navigation;
