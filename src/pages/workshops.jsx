// pages/workshops.jsx
import React, { useCallback } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
  const cards = [
    {
      src: "/images/test1.png",
      title: "Cyber Security Specialist",
      description: "Master ethical hacking, threat detection, and advanced network defense strategies.",
      className: "Advanced Security",
      formateur: "Dr. Ahmed Ben Salah",
    },
    {
      src: "/images/test2.png",
      title: "Advanced JavaScript & React",
      description: "Dive deep into modern JS (ES6+), React Hooks, and state management (Zustand/Redux).",
      className: "Web Development",
      formateur: "Prof. Maria Rodriguez",
    },
    {
      src: "/images/test3.png",
      title: "Data Science & Machine Learning",
      description: "Learn Python, Pandas, NumPy, and Scikit-learn to build predictive models and analyze datasets.",
      className: "Data Analytics",
      formateur: "Dr. James Wilson",
    },
    {
      src: "/images/test4.png",
      title: "UI/UX Design Certification",
      description: "Focus on user-centered design principles, wireframing, and prototyping with Figma.",
      className: "Design Mastery",
      formateur: "Sarah Chen",
    },
    {
      src: "/images/test5.png",
      title: "Cloud Computing (AWS/Azure)",
      description: "Get hands-on experience deploying, scaling, and managing applications in major cloud environments.",
      className: "Cloud Infrastructure",
      formateur: "Michael Thompson",
    },
    {
      src: "/images/test6.png",
      title: "Agile Project Management (Scrum)",
      description: "Master the Scrum framework, lead daily stand-ups, and deliver complex projects efficiently.",
      className: "Project Leadership",
      formateur: "Lisa Johnson",
    },
  ];

  // Memoized form handler
  const handleInscription = useCallback(() => {
    const googleFormsUrl = "https://forms.gle/8QtmeWPVvMfF2Dp48";
    window.open(googleFormsUrl, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div
      className="pt-16 xs:pt-20 sm:pt-24 md:pt-28 pb-6 xs:pb-8 sm:pb-10 md:pb-12 min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/images/background1.png')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Fixed Return Arrow Button */}
      <Link 
        to="/"
        className="fixed left-3 xs:left-4 sm:left-5 md:left-6 top-3 xs:top-4 sm:top-5 md:top-6 z-50 bg-cyan-400 hover:bg-cyan-300 text-black p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-all duration-200 transform hover:scale-110 active:scale-95 group inline-flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Go back to home"
      >
        <ArrowLeft className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform group-hover:-translate-x-0.5" />
      </Link>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-3 xs:px-4">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">
            Explore Our Workshops
          </h1>
          <p className="text-cyan-400 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-1 xs:mt-2 sm:mt-3 font-medium">
            Choose your path to success
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="
                  relative
                  rounded-lg xs:rounded-xl sm:rounded-2xl
                  overflow-hidden
                  shadow-md xs:shadow-lg sm:shadow-xl
                  cursor-pointer
                  group
                  h-36 xs:h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64
                  backdrop-blur-sm
                  bg-white/10
                  border
                  border-white/20
                  hover:border-cyan-400/50
                  transition-all
                  duration-300
                "
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
                    duration-500
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

                {/* Overlay Content */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-black/70 xs:bg-black/60 sm:bg-black/50 md:bg-black/60 lg:bg-black/80
                  lg:opacity-0
                  lg:group-hover:opacity-100
                  opacity-100
                  transition-all
                  duration-300
                  flex
                  flex-col
                  justify-center
                  items-center
                  p-2 xs:p-2.5 sm:p-3 md:p-4 lg:p-6 xl:p-8
                  text-center
                "
                >
                  <div className="text-white w-full max-w-full">
                    <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-white drop-shadow-sm line-clamp-2 lg:line-clamp-3">
                      {card.title}
                    </h2>

                    <p className="text-gray-200 text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg leading-tight xs:leading-relaxed mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 line-clamp-2 xs:line-clamp-3 lg:line-clamp-4">
                      {card.description}
                    </p>

                    <div className="mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 lg:mb-4">
                      <span className="text-cyan-400 font-semibold text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg">
                        Class:{" "}
                      </span>
                      <span className="text-white text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg">
                        {card.className}
                      </span>
                    </div>

                    <div className="mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                      <span className="text-cyan-400 font-semibold text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg">
                        Instructor:{" "}
                      </span>
                      <span className="text-white text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg">
                        {card.formateur}
                      </span>
                    </div>

                    <button
                      onClick={() => handleInscription(card.title)}
                      className="
                        bg-cyan-400
                        hover:bg-cyan-300
                        active:bg-cyan-500
                        text-black
                        font-bold xs:font-black
                        py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3
                        px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6
                        rounded xs:rounded-lg
                        transition-all
                        duration-200
                        transform
                        hover:scale-105
                        active:scale-95
                        border
                        border-cyan-400
                        text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg
                        w-full
                        max-w-32 xs:max-w-36 sm:max-w-40 md:max-w-44 lg:max-w-48
                        mx-auto
                        uppercase
                        tracking-wide xs:tracking-wider
                        shadow
                        hover:shadow-cyan-400/25
                        focus:outline-none focus:ring-4 focus:ring-cyan-400/50
                      "
                      aria-label={`Register for ${card.title}`}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;