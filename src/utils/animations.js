// Framer Motion animation variants
// All animations are ≤ 500ms per requirement 10.4

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5 } 
  }
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  }
};

export const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5 } 
  }
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleOnHoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.2 } 
  }
};

export const cardHoverVariants = {
  rest: { 
    scale: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2 } 
  }
};
