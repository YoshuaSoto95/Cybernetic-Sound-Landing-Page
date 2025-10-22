import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

const SineanLogo: React.FC = () => (
    <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24Z" fill="url(#paint0_linear_1_2)"/>
        <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" fill="#080010"/>
        <text fill="white" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" x="30" y="18">Sinean</text>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F000B8"/>
                <stop offset="1" stopColor="#6200EA"/>
            </linearGradient>
        </defs>
    </svg>
);


const Header: React.FC = () => {
  const navItems = [
    { name: "Products", href: "#" },
    { name: "Pricing", href: "#pricing" },
    { name: "Initiatives", href: "#" },
    { name: "Community", href: "#" },
    { name: "Blog & Guides", href: "#" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="py-6 px-4 md:px-8 lg:px-16 absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <SineanLogo />
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">{item.name}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">Sign In</button>
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-brand-pink text-white shadow-glow-pink"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Contact Sales
            </motion.button>
          </div>
          <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path></svg>
              </button>
          </div>
        </div>
        {isOpen && (
          <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                  <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300">{item.name}</a>
              ))}
              <hr className="border-gray-700"/>
              <button className="text-gray-300 hover:text-white transition-colors duration-300 text-left">Sign In</button>
              <button onClick={() => { setIsModalOpen(true); setIsOpen(false); }} className="px-5 py-2 text-sm font-semibold rounded-full bg-brand-pink text-white shadow-glow-pink w-full">Contact Sales</button>
              </nav>
          </motion.div>
          )}
      </header>
      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;