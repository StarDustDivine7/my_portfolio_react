import { motion } from 'framer-motion';

const SectionHeading = ({ badge, title, highlight, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[100px] sm:h-[150px] bg-primary-600/20 blur-[80px] rounded-full pointer-events-none" />
      
      {/* Badge */}
      {badge && (
        <motion.div 
          className="mb-4 inline-block relative group"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500" />
          <div className="relative px-5 py-1.5 bg-dark-900 border border-white/10 rounded-full">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              {badge}
            </span>
          </div>
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-white">{title}</span>{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-[length:200%_auto] animate-[gradient-x_3s_linear_infinite] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Bottom Line */}
      <motion.div 
        className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 relative overflow-hidden flex-shrink-0"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 96, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="absolute top-0 bottom-0 left-[-100%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[slideIn_2s_infinite]" />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
