import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MobileMenu = ({ isOpen, onClose, menuItems, activeSection, onNavigate }) => {
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e, itemId, isFirst, isLast) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && isFirst) {
        e.preventDefault();
        lastItemRef.current?.focus();
      } else if (!e.shiftKey && isLast) {
        e.preventDefault();
        firstItemRef.current?.focus();
      }
    } else if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onNavigate(itemId);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-64 bg-dark-800 z-50 md:hidden shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col h-full p-6">
              <nav className="flex-grow">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={item.id}>
                      <button
                        ref={index === 0 ? firstItemRef : index === menuItems.length - 1 ? lastItemRef : null}
                        onClick={() => onNavigate(item.id)}
                        onKeyDown={(e) => handleKeyDown(e, item.id, index === 0, index === menuItems.length - 1)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[44px] ${
                          activeSection === item.id
                            ? 'text-primary-400 bg-primary-600/20'
                            : 'text-gray-300 hover:text-white hover:bg-dark-700'
                        }`}
                        aria-current={activeSection === item.id ? 'page' : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
