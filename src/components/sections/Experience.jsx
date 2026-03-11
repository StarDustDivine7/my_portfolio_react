import AnimatedSection from '../ui/AnimatedSection';
import ExperienceCard from '../ui/ExperienceCard';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900 border-t border-white/5">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp">
          <SectionHeading 
            badge="Career"
            title="Work"
            highlight="Experience"
            subtitle="My professional journey and contributions"
          />
        </AnimatedSection>

        {experiences.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <AnimatedSection 
                key={experience.id} 
                animation="slideUp" 
                delay={index * 0.1}
              >
                <ExperienceCard experience={experience} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p>Experience details coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
