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
          <div className="flex gap-3 flex-wrap">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} on Google Play`}
                className="flex items-center gap-2 px-3 py-1.5 bg-dark-700/60 hover:bg-primary-500/20 border border-primary-500/30 hover:border-primary-500/60 text-primary-400 text-xs font-semibold rounded-lg transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.18.65.2.97.07l12.67-7.32-2.79-2.79-10.85 10.04zM.5 1.04C.19 1.35 0 1.83 0 2.47v19.06c0 .64.19 1.12.5 1.43l.07.07 10.67-10.67v-.25L.57.97.5 1.04zM20.36 10.32l-2.82-1.63-3.12 3.12 3.12 3.12 2.85-1.64c.81-.47.81-1.51-.03-1.97zM4.15.24L16.82 7.55l-2.79 2.79L4.15.24z" />
                </svg>
                Google Play
              </a>
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
