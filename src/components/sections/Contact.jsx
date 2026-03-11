import { FaMapMarkerAlt, FaPhone, FaGlobe } from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: profile.location,
      link: null
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: profile.phone,
      link: `tel:${profile.phone}`
    },
    {
      icon: FaGlobe,
      label: 'Portfolio',
      value: profile.portfolio,
      link: profile.portfolio
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900 border-t border-white/5">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-secondary-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp">
          <SectionHeading 
            badge="Connect"
            title="Get In"
            highlight="Touch"
            subtitle="Feel free to reach out for opportunities or collaboration"
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <AnimatedSection 
                key={index} 
                animation="slideUp" 
                delay={index * 0.1}
              >
                <Card hoverable>
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-primary-600/20 rounded-full mb-4">
                      <info.icon className="text-3xl text-primary-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">{info.label}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1 inline-block"
                        aria-label={`${info.label}: ${info.value}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Social Links */}
          <AnimatedSection animation="slideUp" delay={0.4}>
            <Card>
              <h3 className="text-xl font-bold text-center mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                {profile.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary-500/50 hover:bg-primary-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-gray-300 hover:text-primary-400 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[56px] min-h-[56px] flex items-center justify-center group"
                    aria-label={`Visit ${social.platform} profile`}
                  >
                    <social.icon className="text-2xl group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
