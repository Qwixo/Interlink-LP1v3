import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaUniversity, FaGlobeAmericas } from 'react-icons/fa';
import { AnimatedText } from './ui/animated-text';

const HowInterlinkHelpsSection = () => {
  const benefits = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#064088] mb-4" />,
      title: "No TOEFL Required",
      description: "Complete Interlink and enter university without needing a TOEFL/IELTS score."
    },
    {
      icon: <FaUsers className="text-4xl text-[#064088] mb-4" />,
      title: "Small Classes & Personalized Support",
      description: "Get individual attention from experienced teachers in classes of 8-12 students."
    },
    {
      icon: <FaUniversity className="text-4xl text-[#064088] mb-4" />,
      title: "University Preparation & Pathway",
      description: "Learn the skills needed for university success—writing, presentations, note-taking, and critical thinking."
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-[#064088] mb-4" />,
      title: "Cultural & Academic Support",
      description: "Adjust to U.S. life with our guidance, activities, and welcoming community."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#f5f8fc]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-10">
          <AnimatedText 
            text="More Than Just English—Your Success Partner in the U.S."
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
          
          {/* Short Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto"
          >
            At Interlink, we don't just teach English—we prepare you for success in the U.S. 
            Our programs are designed to give you the confidence, skills, and support you need 
            to thrive in university and beyond!
          </motion.p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
            >
              {/* Icon */}
              {benefit.icon}
              
              {/* Benefit Title */}
              <h3 className="text-xl font-bold text-[#064088] mb-3">{benefit.title}</h3>
              
              {/* Benefit Description */}
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Encouraging CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#064088]">
            We've helped thousands of students just like you—let's start your journey together!
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default HowInterlinkHelpsSection;
