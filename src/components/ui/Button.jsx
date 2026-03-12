import { motion } from 'framer-motion';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  href, 
  external = false,
  className = '',
  ariaLabel
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed z-10 overflow-hidden group';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border border-primary-400/50',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] border border-secondary-400/50',
    outline: 'bg-dark-800/40 backdrop-blur-md border border-primary-500/50 text-primary-400 hover:bg-primary-500/20 hover:text-white shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]'
  };
  
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm min-h-[40px] min-w-[40px]',
    md: 'px-7 py-3.5 text-base min-h-[48px] min-w-[48px]',
    lg: 'px-10 py-4 text-lg min-h-[56px] min-w-[56px]'
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  const buttonInner = (
    <>
      {/* Sweeping Shine Animation Element */}
      <span className="absolute inset-0 -translate-x-full group-hover:animate-[slideRight_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {buttonInner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={variant === 'primary' || variant === 'secondary' ? 'button' : 'button'} // Default to button
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {buttonInner}
    </motion.button>
  );
};

export default Button;
