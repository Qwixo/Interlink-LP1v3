import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '../components/ui/aurora-background';
import Footer from '../components/Footer';

const GuidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AuroraBackground className="flex-grow px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center z-10 relative">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center"
          >
            <img 
              src="https://i.imgur.com/P0IOLMW.png" 
              alt="Interlink Logo" 
              className="h-12 md:h-16"
            />
          </motion.div>
          
          {/* Coming Soon Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-3xl mb-12 bg-white/90 p-10 rounded-2xl shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#064088] mb-6">
              Coming Soon
            </h1>
            <p className="text-lg md:text-xl text-[#064088] opacity-90">
              Thank you for your interest! Your guide is being prepared and will be available shortly.
            </p>
          </motion.div>
        </div>
      </AuroraBackground>
      <Footer />
    </div>
  );
};

export default GuidePage;
