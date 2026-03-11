import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { achievements } from '../../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900 border-t border-white/5">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-600/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp">
          <SectionHeading 
            badge="Milestones"
            title="Achievements &"
            highlight="Certifications"
            subtitle="Recognition and credentials earned throughout my career"
          />
        </AnimatedSection>

        {achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection 
                key={achievement.id} 
                animation="slideUp" 
                delay={index * 0.1}
              >
                <Card hoverable className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-600/20 rounded-lg flex-shrink-0">
                      <FaTrophy className="text-2xl text-primary-500" aria-hidden="true" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors">{achievement.title}</h3>
                      <p className="text-gray-400 text-sm mb-1">{achievement.organization}</p>
                      <p className="text-gray-500 text-xs mb-3">{achievement.date}</p>
                      
                      {achievement.verificationUrl && (
                        <a
                          href={achievement.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                          aria-label={`Verify ${achievement.title} certification`}
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          Verify Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-12">
            <p>Achievements coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
