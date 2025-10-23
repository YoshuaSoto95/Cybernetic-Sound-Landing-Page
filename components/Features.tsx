import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper, { itemVariants } from './MotionWrapper';

interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
  glowColor: 'pink' | 'blue';
}

const textVariants = {
  rest: { y: 0 },
  hover: { y: -2 },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 2 },
};

const FeatureCard: React.FC<FeatureCardProps> = ({ imageUrl, title, description, glowColor }) => {
  const glowClass = glowColor === 'pink' ? 'shadow-glow-pink' : 'shadow-glow-blue';
  const hoverGlow = glowColor === 'pink' 
      ? '0 0 30px rgba(240, 0, 184, 0.7)' 
      : '0 0 30px rgba(0, 240, 255, 0.7)';

  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:border-brand-pink/50"
      whileHover={{
        y: -8,
        boxShadow: hoverGlow,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={`relative aspect-video flex items-center justify-center mb-6 rounded-lg overflow-hidden`}>
        <img src={imageUrl} alt={title} className="w-40 h-40 object-cover rounded-full filter saturate-150 contrast-125" />
        <div className={`absolute inset-0 ${glowClass} opacity-50 rounded-full`}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-blue opacity-20 mix-blend-hard-light rounded-full"></div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <motion.a
        href="#"
        className="font-semibold text-brand-pink hover:underline inline-flex items-center gap-1"
        initial="rest"
        whileHover="hover"
      >
        <motion.span variants={textVariants} transition={{ ease: 'easeOut', duration: 0.2 }}>
          Learn More
        </motion.span>
        <motion.span variants={arrowVariants} transition={{ ease: 'easeOut', duration: 0.2 }} className="inline-block">
          &rarr;
        </motion.span>
      </motion.a>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const featuresData = [
    {
      imageUrl: 'https://source.unsplash.com/400x400/?microphone,studio,audio',
      title: 'Studio Climb',
      description: 'Experience crystal-clear audio capture with our AI-enhanced microphones, perfect for creators and musicians.',
      glowColor: 'blue' as const,
    },
    {
      imageUrl: 'https://source.unsplash.com/400x400/?security,lock,cyber',
      title: 'Secure Loucs',
      description: 'Privacy-first audio processing. Your data is yours, secured with end-to-end encryption on all our devices.',
      glowColor: 'pink' as const,
    },
    {
      imageUrl: 'https://source.unsplash.com/400x400/?gaming,esports,headset',
      title: 'Shadra Gamne',
      description: 'Gain a competitive edge with 3D spatial audio that lets you pinpoint every sound with accuracy.',
      glowColor: 'blue' as const,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <MotionWrapper stagger={0.1}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Hear the Unheard, Feel the Unfelt
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Our ecosystem is built on three pillars: pristine quality, ironclad security, and immersive experiences.
          </motion.p>
        </MotionWrapper>
        <MotionWrapper stagger={0.2} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Features;