import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <SectionHeading 
            badge="Portfolio"
            title="Featured"
            highlight="Projects"
            subtitle="Showcasing my work across fintech, healthcare, social media, and ERP domains"
          />
        </AnimatedSection>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                animation="slideUp" 
                delay={index * 0.1}
              >
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p>Projects coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
