import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { fadeInVariants, slideUpVariants, slideInVariants } from '../../utils/animations';

const AnimatedSection = ({ 
  children, 
  animation = 'slideUp', 
  delay = 0,
  className = '' 
}) => {
  const ref = useRef(null);
  const { hasIntersected } = useIntersectionObserver(ref, { threshold: 0.1 });

  const animationVariants = {
    fade: fadeInVariants,
    slideUp: slideUpVariants,
    slideLeft: slideInVariants,
    slideRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }
  };

  const selectedVariant = animationVariants[animation] || slideUpVariants;

  // Add delay to the visible state
  const variantWithDelay = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...selectedVariant.visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasIntersected ? "visible" : "hidden"}
      variants={variantWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
