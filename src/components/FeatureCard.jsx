// components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, borderColor = "border-cyan-400", iconColor = "text-cyan-400" }) => {
  return (
    <div className={`border-l-4 ${borderColor} pl-4 xs:pl-5 sm:pl-6 py-4 xs:py-5 sm:py-6 hover:bg-white/5 transition-all duration-200 rounded-r-lg`}>
      {Icon && <Icon className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 ${iconColor} mb-3 xs:mb-4 sm:mb-5`} />}
      <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black mb-2 xs:mb-3 sm:mb-4 uppercase tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed xs:leading-loose text-sm xs:text-base sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;