// pages/workshops.jsx
import React, { useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
  const cards = [
    {
      src: "/images/test1.png",
      title: "Cyber Security Specialist",
      description: "Master ethical hacking, threat detection, and advanced network defense strategies. Learn from industry experts and gain hands-on experience.",
      className: "Advanced Security",
      formateur: "Dr. Ahmed Ben Salah",
    },
    {
      src: "/images/test2.png",
      title: "Advanced JavaScript & React",
      description: "Dive deep into modern JS (ES6+), React Hooks, and state management (Zustand/Redux). Build real-world applications with best practices.",
      className: "Web Development",
      formateur: "Prof. Maria Rodriguez",
    },
    {
      src: "/images/test3.png",
      title: "Data Science & Machine Learning",
      description: "Learn Python, Pandas, NumPy, and Scikit-learn to build predictive models and analyze datasets. Transform data into insights.",
      className: "Data Analytics",
      formateur: "Dr. James Wilson",
    },
    {
      src: "/images/test4.png",
      title: "Cloud Computing (AWS/Azure)",
      description: "Get hands-on experience deploying, scaling, and managing applications in major cloud environments. Master cloud infrastructure and services.",
      className: "Cloud Infrastructure",
      formateur: "Michael Thompson",
    }
  ];

  // Memoized form handler
  const handleInscription = useCallback(() => {
    const googleFormsUrl = "https://forms.gle/1VsZmLsQSieGhAnPA";
    window.open(googleFormsUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div
      className="pt-16 xs:pt-18 sm:pt-20 md:pt-24 lg:pt-28 pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-16 min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/images/background1.png')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Fixed Return Arrow Button */}
      <Link 
        to="/"
        className="fixed left-3 xs:left-4 sm:left-5 md:left-6 lg:left-8 top-3 xs:top-4 sm:top-5 md:top-6 lg:top-8 z-50 bg-cyan-400 hover:bg-cyan-300 text-black p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-all duration-200 transform hover:scale-110 active:scale-95 group inline-flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Go back to home"
      >
        <ArrowLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform group-hover:-translate-x-0.5" />
      </Link>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 px-3 xs:px-4 sm:px-5 md:px-6">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg mb-3 xs:mb-4 sm:mb-5">
            Explore Our Workshops
          </h1>
          <p className="text-cyan-400 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium max-w-4xl mx-auto leading-relaxed">
            Choose your path to success with our specialized training programs
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className="
                  relative
                  rounded-lg xs:rounded-xl sm:rounded-2xl
                  overflow-hidden
                  shadow-lg xs:shadow-xl sm:shadow-2xl
                  cursor-pointer
                  group
                  h-52 xs:h-56 sm:h-60 md:h-64 lg:h-68 xl:h-72 2xl:h-76
                  backdrop-blur-sm
                  bg-white/10
                  border
                  border-white/20
                  hover:border-cyan-400/50
                  transition-all
                  duration-300
                  hover:shadow-2xl
                  hover:scale-105
                  animate-fade-in-up
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Image with lazy loading */}
                <img
                  src={card.src}
                  alt={`${card.title} workshop`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  loading="lazy"
                  width="400"
                  height="300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/400x300/1e40af/ffffff?text=${encodeURIComponent(card.title)}`;
                  }}
                />

                {/* Overlay Content - Perfectly centered and fitting */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-b from-black/40 to-black/95
                  lg:bg-black/90
                  lg:opacity-0
                  lg:group-hover:opacity-100
                  opacity-100
                  transition-all
                  duration-500
                  flex
                  flex-col
                  justify-between
                  items-center
                  p-3 xs:p-4 sm:p-5 md:p-6
                  text-center
                "
                >
                  {/* Top Content - Title and Description */}
                  <div className="w-full flex-1 flex flex-col justify-center space-y-2 xs:space-y-3 sm:space-y-4">
                    {/* Workshop Title */}
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-sm line-clamp-2 leading-tight">
                      {card.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-200 text-xs xs:text-sm sm:text-base leading-relaxed line-clamp-2 xs:line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  {/* Middle Content - Class and Instructor */}
                  <div className="w-full space-y-1 xs:space-y-2 sm:space-y-3">
                    {/* Class Name */}
                    <div className="pt-1 xs:pt-2">
                      <span className="text-cyan-400 font-semibold text-xs xs:text-sm sm:text-base">
                        Category:{" "}
                      </span>
                      <span className="text-white text-xs xs:text-sm sm:text-base font-medium">
                        {card.className}
                      </span>
                    </div>

                    {/* Instructor Name */}
                    <div className="pb-1 xs:pb-2 sm:pb-3">
                      <span className="text-cyan-400 font-semibold text-xs xs:text-sm sm:text-base">
                        Instructor:{" "}
                      </span>
                      <span className="text-white text-xs xs:text-sm sm:text-base font-medium">
                        {card.formateur}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content - Button */}
                  <div className="w-full pt-2 xs:pt-3 sm:pt-4">
                    <button
                      onClick={() => handleInscription(card.title)}
                      className="
                        bg-cyan-400
                        hover:bg-cyan-300
                        active:bg-cyan-500
                        text-black
                        font-bold xs:font-black
                        py-2 xs:py-2.5 sm:py-3 md:py-3.5
                        px-4 xs:px-5 sm:px-6 md:px-7
                        rounded-lg xs:rounded-xl
                        transition-all
                        duration-300
                        transform
                        hover:scale-105
                        active:scale-95
                        border-2
                        border-cyan-400
                        text-xs xs:text-sm sm:text-base md:text-lg
                        w-full
                        max-w-36 xs:max-w-40 sm:max-w-44 md:max-w-48
                        mx-auto
                        uppercase
                        tracking-wide xs:tracking-wider
                        shadow-lg
                        hover:shadow-cyan-400/30
                        focus:outline-none focus:ring-4 focus:ring-cyan-400/50
                        min-h-10 xs:min-h-11 sm:min-h-12 md:min-h-14
                        flex
                        items-center
                        justify-center
                      "
                      aria-label={`Register for ${card.title}`}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 px-4 xs:px-5 sm:px-6">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 max-w-4xl mx-auto border border-cyan-400/20">
            <h3 className="text-cyan-400 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 sm:mb-5">
              Why Choose Our Workshops?
            </h3>
            <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
              Our workshops are designed by industry experts to provide hands-on experience, 
              practical skills, and real-world projects that prepare you for today's competitive job market.
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        /* Perfect touch targets for mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px; /* Apple HIG recommendation */
          }
        }
        
        /* Custom heights for ultra-responsive design */
        @media (min-width: 1536px) {
          .h-76 {
            height: 19rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Workshops;