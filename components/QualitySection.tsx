import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper, { itemVariants } from './MotionWrapper';

const QualitySection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
        >
          <img src="https://source.unsplash.com/800x600/?retro,tech,neon" alt="Quality Product" className="w-full h-auto rounded-2xl filter saturate-150 contrast-110 object-cover aspect-[4/3]" />
           <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-blue opacity-30 mix-blend-hard-light rounded-2xl"></div>
          <div className="absolute inset-0 rounded-2xl shadow-glow-pink opacity-60"></div>
        </motion.div>
        
        <MotionWrapper stagger={0.2} className="text-center lg:text-left">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Quality in Every Photon
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8">
            Beyond the neon glow and sleek designs lies a commitment to unparalleled craftsmanship. Every component is meticulously engineered for durability, performance, and a sensory experience that stands the test of time.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <motion.a 
              href="#pricing"
              className="px-8 py-3 font-semibold rounded-full bg-brand-pink text-white shadow-glow-pink text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}>
              Explore Engineering
            </motion.a>
            <motion.button 
              className="px-8 py-3 font-semibold rounded-full bg-transparent border-2 border-gray-700 hover:border-gray-500 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </motion.div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default QualitySection;