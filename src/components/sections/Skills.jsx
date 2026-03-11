import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SkillCard from '../ui/SkillCard';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories } from '../../data/skills';
import { staggerContainerVariants, slideUpVariants } from '../../utils/animations';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-900 border-t border-white/5">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-600/10 rounded-full blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp">
          <SectionHeading 
            badge="My Stack"
            title="Technical"
            highlight="Skills"
            subtitle="Technologies and tools I work with to build robust applications"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={categoryIndex} 
              animation="slideUp" 
              delay={categoryIndex * 0.1}
            >
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary-400">
                  {category.category}
                </h3>
                <motion.div 
                  className="grid grid-cols-2 gap-3"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} variants={slideUpVariants}>
                      <SkillCard name={skill.name} icon={skill.icon} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
