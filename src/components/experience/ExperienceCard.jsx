import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceCard = ({ company, role, duration, location }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 border border-primary-500/20 rounded-2xl p-8 mb-12 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <FaBriefcase size={80} />
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{company}</h3>
            <div className="flex items-center gap-2 text-primary-400 font-semibold text-lg">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              {role}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-400 bg-dark-900/50 px-3 py-1.5 rounded-lg border border-white/5">
              <FaCalendarAlt className="text-primary-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-dark-900/50 px-3 py-1.5 rounded-lg border border-white/5">
              <FaMapMarkerAlt className="text-primary-500" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
