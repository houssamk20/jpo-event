// sections/WhyExhibitSection.jsx
import React from 'react';
import { Target, Users, Building2 } from 'lucide-react';
import IconBox from '../components/IconBox';

const WhyExhibitSection = () => {
  const features = [
    {
      icon: Target,
      title: "Boost Your Brand Visibility",
      description: "By participating, your company strengthens its presence among future experts and industry leaders. Whether through live demos, presentations, or one-on-one interactions, JPO helps you position your brand as a top player and innovator in your field."
    },
    {
      icon: Users,
      title: "Connect with the Next Generation of Talent",
      description: "Exhibiting at JPO gives your company direct access to motivated students and young professionals eager to enter the job market. It's the perfect chance to share your vision, present your innovations, and attract passionate talents ready to grow with you."
    },
    {
      icon: Building2,
      title: "Partnerships",
      description: "Beyond recruitment, JPO opens doors to collaboration — with educational institutions, startups, and fellow exhibitors. It's a hub for exchanging ideas, building networks, and discovering new opportunities that can drive your company forward."
    }
  ];

  return (
    <section id="whyjpo" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white text-black">
      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 xs:mb-3 sm:mb-4 uppercase tracking-tight">
            Why Exhibit At 
          </h2>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            <span className="bg-cyan-400 px-2 xs:px-3 sm:px-4">JPO</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 mb-12 xs:mb-16 sm:mb-20 md:mb-24">
          {features.map((feature, index) => (
            <IconBox 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Purple CTA Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-6 xs:p-7 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-6 xs:gap-8 sm:gap-10 md:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 xs:mb-4 sm:mb-6 uppercase tracking-tight leading-tight">
                What Brings<br />You To JPO
              </h3>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed xs:leading-loose font-medium">
                The JPO is your golden opportunity to discover and connect with the biggest companies in your field! 
                Don't miss the chance — explore the latest innovations, network with professionals, and expand your career horizons.
                Be there and take your first step toward a successful future!
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/jpo20252.png" 
                  alt="Conference" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExhibitSection;