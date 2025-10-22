import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper, { itemVariants } from './MotionWrapper';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <MotionWrapper stagger={0.2} className="text-center md:text-left">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
            Cybernetic Sound, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">
              Immersive Audio
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
            Dive into an unparalleled audio dimension. Our technology crafts soundscapes so real, you won't just hear them—you'll feel them.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a 
              href="#pricing"
              className="px-8 py-3 font-semibold rounded-full bg-brand-pink text-white shadow-glow-pink text-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}>
              Request Access
            </motion.a>
            <motion.button 
              className="px-8 py-3 font-semibold rounded-full bg-transparent border-2 border-gray-700 hover:border-gray-500 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </motion.div>
        </MotionWrapper>

        <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
        >
          <motion.img 
            src="https://source.unsplash.com/800x800/?headphones,futuristic,neon" 
            alt="Glowing Headphones" 
            className="w-full h-auto max-w-md mx-auto rounded-full filter saturate-150 contrast-125 object-cover aspect-square" 
            animate={{
              y: ["-10px", "10px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-pink to-brand-blue opacity-30 mix-blend-color-dodge rounded-full"></div>
          <div className="absolute inset-0 rounded-full shadow-glow-pink opacity-70"></div>
          <div className="absolute inset-0 rounded-full shadow-glow-blue opacity-50 animation-delay-500"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;