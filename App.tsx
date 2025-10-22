import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import QualitySection from './components/QualitySection';
import DeviceSection from './components/DeviceSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark overflow-hidden relative">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-purple/10 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <QualitySection />
          <Pricing />
          <DeviceSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;