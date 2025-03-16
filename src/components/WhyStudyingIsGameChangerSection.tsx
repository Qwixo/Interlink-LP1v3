import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaComments, FaUsers, FaChartLine } from 'react-icons/fa';
import { AnimatedText } from './ui/animated-text';

const WhyStudyingIsGameChangerSection = () => {
  const benefits = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#064088]" />,
      title: "Earn a world-class degree",
      description: "U.S. universities open doors to global careers."
    },
    {
      icon: <FaComments className="text-4xl text-[#064088]" />,
      title: "Master English & gain confidence",
      description: "Speak fluently in any situation."
    },
    {
      icon: <FaUsers className="text-4xl text-[#064088]" />,
      title: "Build a powerful network",
      description: "Meet top professors & students from around the world."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#064088]" />,
      title: "More career opportunities",
      description: "U.S. graduates earn higher salaries & land global jobs."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <AnimatedText 
            text="Why should you even consider learning english?"
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
        </div>
        
        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-6 bg-[#f9fafb] p-6 rounded-lg"
            >
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-[#dc5d33] mr-2">📌</span>
                  <h3 className="text-xl font-bold text-[#064088]">{benefit.title}</h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <button className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyStudyingIsGameChangerSection;
