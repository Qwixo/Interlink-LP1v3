import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "INTERLINK helped me improve my English so much! I went from barely speaking to confidently presenting in my university classes.",
      name: "Carlos Rodriguez",
      designation: "University of Colorado",
      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The teachers at INTERLINK are amazing. They really care about your progress and make learning English fun and practical.",
      name: "David Kim",
      designation: "Indiana State University",
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "I was worried about studying in the US with my limited English, but INTERLINK made the transition so smooth. Now I'm thriving!",
      name: "Emma Chen",
      designation: "Valparaiso University",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "The cultural activities and support services at INTERLINK helped me adjust to American life while improving my language skills.",
      name: "James Wilson",
      designation: "St. Ambrose University",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "INTERLINK's pathway program made it possible for me to enter my dream university without taking the TOEFL. Best decision ever!",
      name: "Sophia Lee",
      designation: "University of North Carolina",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#064088] mb-12">
          What Our Students Say
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
