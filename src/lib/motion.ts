// Motion language definitions as required by Design_rules.md
import { Transition } from 'motion/react';

// Apple-like ease curve
export const easeApple = [0.25, 0.1, 0.25, 1.0] as const;

// Transition presets
export const microTransition: Transition = {
  duration: 0.2,
  ease: easeApple,
};

export const standardTransition: Transition = {
  duration: 0.45,
  ease: easeApple,
};

export const screenTransition: Transition = {
  duration: 0.35,
  ease: easeApple,
};

// Gentle spring for interactive elements
export const gentleSpring: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 25,
};

// Screen entry variants
export const screenVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: screenTransition },
  exit: { opacity: 0, y: -10, transition: microTransition },
};
