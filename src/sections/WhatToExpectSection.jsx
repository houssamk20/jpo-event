// sections/WhatToExpectSection.jsx
import React from 'react';
import { Briefcase, Code2, Target } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const WhatToExpectSection = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Discover Companies",
      description: "You'll have the chance to meet top companies from various sectors. Explore their projects, internships, and career opportunities, and see firsthand what makes them leaders in their domains. It's your moment to ask questions, make connections, and find where your ambitions fit best."
    },
    {
      icon: Code2,
      title: "Workshops",
      description: "Get hands-on experience through interactive workshops led by experts in different fields. Learn the latest tools, techniques, and trends shaping the industry — from tech innovations to professional development skills. Each session is designed to inspire, educate, and prepare you for real-world challenges."
    },
    {
      icon: Target,
      title: "Expand Your Network",
      description: "Networking is at the heart of JPO. Engage with professionals, recruiters, and fellow students who share your passion and goals. Build relationships that can open new doors, spark collaborations, and guide your journey toward a successful career."
    }
  ];

  return (
    <section id="whattoexpect" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-black">
      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 xs:mb-10 sm:mb-12 md:mb-16 uppercase tracking-tight text-center">
          What to <span className="text-cyan-400">Expect</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;