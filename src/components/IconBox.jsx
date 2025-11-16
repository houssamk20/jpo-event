// components/IconBox.jsx
import React from 'react';

const IconBox = ({ icon: Icon, title, description, iconColor = "text-purple-600", borderColor = "border-purple-600" }) => {
  return (
    <div className="text-center md:text-left p-4 xs:p-5 sm:p-6 rounded-lg hover:bg-gray-50 transition-all duration-200">
      <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 mb-4 xs:mb-5 sm:mb-6 relative mx-auto md:mx-0">
        <div className={`absolute inset-0 border-4 ${borderColor} rounded-lg`}></div>
        <div className="absolute inset-2 flex items-center justify-center">
          {Icon && <Icon className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 ${iconColor}`} />}
        </div>
      </div>
      <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-black mb-3 xs:mb-4 sm:mb-5 uppercase text-purple-600 leading-tight">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed xs:leading-loose text-sm xs:text-base sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default IconBox;