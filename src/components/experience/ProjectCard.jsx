import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary-500/30 transition-colors group"
    >
      <div className="flex flex-col h-full">
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.name}
        </h4>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded-md text-xs font-medium border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
