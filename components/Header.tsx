import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

const SineanLogo: React.FC = () => (
    <div className="flex items-center">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24Z" fill="url(#paint0_linear_1_2)"/>
                <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" fill="#080010"/>
                <defs>
                    <linearGradient id="paint0_linear_1_2" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F000B8"/>
                        <stop offset="1" stopColor="#6200EA"/>
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
        <div className="overflow-hidden ml-3">
             <motion.span 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-400"
                style={{ backgroundSize: '200% auto' }}
                animate={{ backgroundPosition: ['0% center', '200% center'] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                }}
            >
                Sinean
            </motion.span>
        </div>
    </div>
);


const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const navContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const navItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className={`py-6 px-4 md:px-8 lg:px-16 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-brand-dark/80 backdrop-blur-md shadow-2xl !py-4 shadow-brand-blue/10' : ''
        }`}>
        <div className="container mx-auto flex justify-between items-center">
          <SineanLogo />
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a 
                key={item.name} 
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                whileHover={{ y: -2 }}
                >
                  {item.name}
              </motion.a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">Sign In</button>
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-brand-pink text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 15px rgba(240, 0, 184, 0.7)',
                  '0 0 25px rgba(240, 0, 184, 1)',
                  '0 0 15px rgba(240, 0, 184, 0.7)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
              >
              Contact Sales
            </motion.button>
          </div>
          <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-[60] relative w-8 h-8">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                      <Path
                          variants={{
                              closed: { d: "M 4 6 L 20 6" },
                              open: { d: "M 6 18 L 18 6" }
                          }}
                          animate={isOpen ? "open" : "closed"}
                          transition={{ duration: 0.3 }}
                      />
                      <Path
                          d="M 4 12 L 20 12"
                          variants={{
                              closed: { opacity: 1 },
                              open: { opacity: 0 }
                          }}
                          animate={isOpen ? "open" : "closed"}
                          transition={{ duration: 0.1 }}
                      />
                      <Path
                          variants={{
                              closed: { d: "M 4 18 L 20 18" },
                              open: { d: "M 6 6 L 18 18" }
                          }}
                          animate={isOpen ? "open" : "closed"}
                          transition={{ duration: 0.3 }}
                      />
                  </svg>
              </button>
          </div>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 h-full w-full bg-brand-dark/95 backdrop-blur-sm z-50 p-8 flex flex-col items-center justify-center lg:hidden"
            >
              <motion.nav
                variants={navContainerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col space-y-8 text-center"
              >
                {navItems.map((item) => (
                    <motion.a variants={navItemVariants} key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors duration-300 text-3xl font-semibold">{item.name}</motion.a>
                ))}
                <motion.div variants={navItemVariants} className="w-24 mx-auto">
                  <hr className="border-gray-700 my-4"/>
                </motion.div>
                <motion.button variants={navItemVariants} className="text-gray-300 hover:text-white transition-colors duration-300 text-3xl font-semibold">Sign In</motion.button>
                <motion.button variants={navItemVariants} onClick={() => { setIsModalOpen(true); setIsOpen(false); }} className="px-6 py-4 text-xl font-semibold rounded-full bg-brand-pink text-white shadow-glow-pink w-full max-w-xs mx-auto">Contact Sales</motion.button>
              </motion.nav>
            </motion.div>
          )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;