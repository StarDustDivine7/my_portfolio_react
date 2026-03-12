import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const projects = [
  {
    name: "Stock Knock",
    description: "Dual app platform for stock market onboarding with investor and company applications.",
    tags: ["Flutter", "Firebase", "Node.js", "Stock Market API"]
  },
  {
    name: "Wigian ERP",
    description: "Enterprise employee management application with attendance, leave management, and geofenced login.",
    tags: ["Flutter", "Geofencing", "ERP", "Rest API"]
  },
  {
    name: "Miverse",
    description: "Social media platform with posts, likes, comments, real-time chat, and video calling.",
    tags: ["Flutter", "WebRTC", "Socket.io", "Chat"]
  },
  {
    name: "Maitys Elder Care",
    description: "Healthcare emergency support platform connecting users with nearby hospitals and care services.",
    tags: ["Flutter", "Google Maps", "Healthcare", "Emergency"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-600/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="slideUp">
          <SectionHeading
            badge="Portfolio"
            title="Professional"
            highlight="Experience"
            subtitle="My journey as a Flutter Developer and the projects I've built"
          />
        </AnimatedSection>

        <div className="max-w-6xl mx-auto mt-16">
          <ExperienceCard
            company="Webingo Infotech Solutions LLP"
            role="Flutter Developer"
            duration="September 2023 – Present"
            location="India"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-white">Projects Worked On</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-primary-500/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <AnimatedSection
                  key={project.name}
                  animation="slideUp"
                  delay={index * 0.1}
                >
                  <ProjectCard project={project} />
                </AnimatedSection>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
