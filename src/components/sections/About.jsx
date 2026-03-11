import { FaBriefcase, FaCode, FaLayerGroup, FaHeart } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

const About = () => {
  const stats = [
    {
      icon: FaBriefcase,
      label: 'Experience',
      value: `${profile.yearsOfExperience} Years`
    },
    {
      icon: FaCode,
      label: 'Specialization',
      value: profile.specializations.join(', ')
    },
    {
      icon: FaLayerGroup,
      label: 'Domains',
      value: profile.domains.length
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp">
          <SectionHeading 
            badge="Overview"
            title="About"
            highlight="Me"
            subtitle="Get to know more about my background and expertise"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Professional Summary */}
          <AnimatedSection animation="slideLeft" delay={0.2}>
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-primary-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                {profile.summary}
              </p>
            </Card>
          </AnimatedSection>

          {/* Stats Cards */}
          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <Card key={index} hoverable>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-600/20 rounded-lg">
                      <stat.icon className="text-2xl text-primary-500" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-lg font-semibold">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Domains */}
              <Card>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <FaHeart className="text-2xl text-primary-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Domains Worked In</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.domains.map((domain, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-xs font-medium"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
