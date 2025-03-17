import React from 'react';
import { Testimonials } from './ui/testimonials';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'INTERLINK helped me improve my English so much! I went from barely speaking to confidently presenting in my university classes.',
      name: 'Carlos Rodriguez',
      username: 'University of Colorado',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'The teachers at INTERLINK are amazing. They really care about your progress and make learning English fun and practical.',
      name: 'David Kim',
      username: 'Indiana State University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'I was worried about studying in the US with my limited English, but INTERLINK made the transition so smooth. Now I\'m thriving!',
      name: 'Emma Chen',
      username: 'Valparaiso University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'The cultural activities and support services at INTERLINK helped me adjust to American life while improving my language skills.',
      name: 'James Wilson',
      username: 'St. Ambrose University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'INTERLINK\'s pathway program made it possible for me to enter my dream university without taking the TOEFL. Best decision ever!',
      name: 'Sophia Lee',
      username: 'University of North Carolina',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'The small class sizes at INTERLINK gave me the confidence to speak up and practice my English in a supportive environment.',
      name: 'Michael Davis',
      username: 'Western Kentucky University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Thanks to INTERLINK, I not only improved my English but also made friends from all over the world. It\'s been an amazing experience!',
      name: 'Aisha Patel',
      username: 'University of Colorado',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'I love how INTERLINK teaches practical English skills that I use every day in my university classes and social life.',
      name: 'Sarah Taylor',
      username: 'Indiana State University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'The advisors at INTERLINK helped me with everything from visa applications to finding housing. They really care about students!',
      name: 'Kevin White',
      username: 'Valparaiso University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'INTERLINK\'s program is worth every penny. The quality of education and support you receive is exceptional.',
      name: 'Rachel Kim',
      username: 'St. Ambrose University',
      social: 'https://twitter.com'
    },
    {
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'I started with very basic English and now I\'m successfully taking university courses. INTERLINK made this possible!',
      name: 'Brian Martinez',
      username: 'University of North Carolina',
      social: 'https://twitter.com'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Testimonials 
          testimonials={testimonials} 
          title="What Our Students Say"
          description="Hear from international students who transformed their English skills and achieved their academic dreams with INTERLINK."
          maxDisplayed={6}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
