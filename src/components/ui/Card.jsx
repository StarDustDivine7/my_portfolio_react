import { motion } from 'framer-motion';
import { cardHoverVariants } from '../../utils/animations';

const Card = ({ children, className = '', hoverable = false }) => {
  const baseStyles = 'bg-dark-800/40 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative overflow-hidden group';
  const combinedStyles = `${baseStyles} ${className}`;

  if (hoverable) {
    return (
      <motion.div
        className={combinedStyles}
        variants={{
          rest: { scale: 1, y: 0 },
          hover: { scale: 1.02, y: -4 }
        }}
        initial="rest"
        whileHover="hover"
      >
        {/* Animated Spinning Border Glow */}
        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 blur-sm group-hover:animate-[spin-slow_4s_linear_infinite] transition-opacity duration-500" style={{ zIndex: 0 }} />
        
        {/* Card Inner Background */}
        <div className="absolute inset-0 bg-dark-800/90 rounded-2xl z-0" />

        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="relative z-20">{children}</div>
      </motion.div>
    );
  }

  return (
    <div className={combinedStyles}>
      {children}
    </div>
  );
};

export default Card;
