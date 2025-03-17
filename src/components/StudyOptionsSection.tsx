import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Check, Laptop, Calendar } from 'lucide-react';

const StudyOptionsSection = () => {
  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#064088] mb-4">
            Study Options – Choose the Best Fit for You
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you prefer the full U.S. campus experience or the flexibility of online learning, INTERLINK has a program for you.
          </p>
        </motion.div>
        
        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: In-Person Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#064088] mb-6">In-Person Program</h3>
              
              {/* Program Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Location:</span>
                    <span className="ml-2 text-gray-700">U.S. University Campus</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">5 weeks per term</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition Fee:</span>
                    <span className="ml-2 text-gray-700">$1,650 per term</span>
                  </div>
                </div>
              </div>
              
              {/* Who Is This Best For */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Who Is This Best For?
                </h4>
                <ul className="space-y-2 pl-7 list-disc text-gray-700">
                  <li>Students who want to <span className="font-medium">fully immerse</span> in American university life.</li>
                  <li>Those planning to transition to a <span className="font-medium">U.S. college/university</span>.</li>
                  <li>Students who learn best through <span className="font-medium">face-to-face interactions</span>.</li>
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Benefits:
                </h4>
                <ul className="space-y-2 pl-7 list-disc text-gray-700">
                  <li>Small, <span className="font-medium">interactive classes</span> (8-12 students) for personalized learning.</li>
                  <li>Full <span className="font-medium">access to university facilities</span> (libraries, sports, clubs).</li>
                  <li>Cultural immersion – <span className="font-medium">live, study, and interact</span> with U.S. students.</li>
                  <li>Pathway to <span className="font-medium">university admission without TOEFL</span>.</li>
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold rounded-lg transition-colors shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Card 2: Online Program */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#064088] mb-6">Online Program</h3>
              
              {/* Program Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Laptop className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Location:</span>
                    <span className="ml-2 text-gray-700">100% Online</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Duration:</span>
                    <span className="ml-2 text-gray-700">5 weeks per term</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition Fee (Full-Time):</span>
                    <span className="ml-2 text-gray-700">$1,650 per term</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-[#064088] mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <span className="font-semibold text-gray-800">Tuition Fee (Part-Time):</span>
                    <span className="ml-2 text-gray-700">$825 per term</span>
                  </div>
                </div>
              </div>
              
              {/* Who Is This Best For */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  <Users className="inline-block w-5 h-5 mr-2 text-[#064088]" />
                  Who Is This Best For?
                </h4>
                <ul className="space-y-2 pl-7 list-disc text-gray-700">
                  <li>Students who need a <span className="font-medium">flexible schedule</span> and prefer to study from home.</li>
                  <li>Those who want to <span className="font-medium">prepare for U.S. study</span> before moving abroad.</li>
                  <li>Busy professionals looking to <span className="font-medium">improve their English without travel</span>.</li>
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  <Check className="inline-block w-5 h-5 mr-2 text-green-500" />
                  Benefits:
                </h4>
                <ul className="space-y-2 pl-7 list-disc text-gray-700">
                  <li><span className="font-medium">Live, interactive lessons</span> with expert instructors.</li>
                  <li><span className="font-medium">Same curriculum</span> as the in-person program.</li>
                  <li>Learn from anywhere in the world, with <span className="font-medium">flexible scheduling</span>.</li>
                  <li>Perfect <span className="font-medium">stepping stone</span> before transitioning to an in-person program.</li>
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <button className="px-6 py-3 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold rounded-lg transition-colors shadow-md">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudyOptionsSection;
