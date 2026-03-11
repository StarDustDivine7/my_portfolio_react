import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Button from '../ui/Button';
import { scrollTo } from '../../utils/scrollTo';
import { profile } from '../../data/profile';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = profile.resumeUrl;
    link.download = 'Debabrata_Dutta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary-900/20 via-dark-900/0 to-dark-900/0"></div>

        {/* Floating background shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-3xl opacity-20"
            style={{
              background: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center w-full"
        >


          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-white block mb-4">Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-[length:200%_auto] animate-[gradient-x_3s_linear_infinite] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] block pb-2 px-4">
              {profile.name}
            </span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-6 h-[40px] sm:h-[50px] flex items-center justify-center w-full px-4 overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                profile.role,
                2000,
                'Cross-Platform Expert',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent inline-block pb-2 pr-1"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {profile.tagline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center items-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleDownloadResume}
              className="flex items-center gap-2"
              ariaLabel="Download resume"
            >
              <FaDownload />
              Download Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2"
              ariaLabel="View projects section"
            >
              <FaCode />
              View Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2"
              ariaLabel="Go to contact section"
            >
              <FaEnvelope />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
