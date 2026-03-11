import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const { name, description, technologies, image, demoUrl, codeUrl } = project;

  return (
    <motion.div
      className="bg-dark-800/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col h-full group"
      whileHover={{ y: -8, boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)", borderColor: "rgba(139,92,246,0.3)", transition: { duration: 0.3 } }}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent z-10 opacity-80" />
        <img 
          src={image} 
          alt={`${name} project screenshot`}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class="flex items-center justify-center h-full text-gray-500"><span>${name}</span></div>`;
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">{name}</h3>
        <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-dark-700/50 border border-primary-500/20 text-primary-400 rounded-full text-xs font-medium tracking-wide shadow-[0_0_10px_rgba(6,182,212,0.1)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {(demoUrl || codeUrl) && (
          <div className="flex gap-3">
            {demoUrl && (
              <Button 
                variant="primary" 
                size="sm" 
                href={demoUrl} 
                external={true}
                className="flex items-center gap-2"
                ariaLabel={`View ${name} demo`}
              >
                <FaExternalLinkAlt className="text-sm" />
                View Demo
              </Button>
            )}
            {codeUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                href={codeUrl} 
                external={true}
                className="flex items-center gap-2"
                ariaLabel={`View ${name} source code`}
              >
                <FaGithub className="text-sm" />
                View Code
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
