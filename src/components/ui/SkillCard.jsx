import { motion } from 'framer-motion';

const SkillCard = ({ name, icon: Icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 bg-dark-800/40 backdrop-blur-md rounded-xl border border-white/5 min-h-[100px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative overflow-hidden group"
      whileHover={{ 
        scale: 1.05, 
        borderColor: "rgba(34, 211, 238, 0.3)",
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)",
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="text-4xl text-primary-400 mb-2 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
      <span className="text-sm font-medium text-center relative z-10 text-gray-300 group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
