
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number = 0.1) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, className, stagger = 0.1 }) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={stagger}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
