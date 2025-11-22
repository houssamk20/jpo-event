// pages/workshops.jsx
import React from "react";
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
      description: "Dive deep into modern JS (ES6+), React Hooks, and state management.",
      className: "Web Development",
      formateur: "Prof. Maria Rodriguez",
    },
    {
      src: "/images/test3.png",
      title: "Data Science & Machine Learning",
      description: "Learn Python, Pandas, NumPy to build predictive models and analyze datasets.",
      className: "Data Analytics",
      formateur: "Dr. James Wilson",
    },
    {
      src: "/images/test4.png",
      title: "Cloud Computing (AWS/Azure)",
      description: "Get hands-on experience deploying and managing applications in cloud environments.",
      className: "Cloud Infrastructure",
      formateur: "Michael Thompson",
    }
  ];

  const handleInscription = () => {
    const googleFormsUrl = "https://forms.gle/8QtmeWPVvMfF2Dp48";
    window.open(googleFormsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="min-h-screen bg-black pt-16 pb-8 relative"
      style={{
        backgroundImage: "url('/images/background1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Fixed Return Arrow */}
      <Link 
        to="/"
        className="fixed left-4 top-4 z-50 bg-cyan-400 hover:bg-cyan-300 text-black p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
        aria-label="Go back to home"
        prefetch={true}
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Explore Our Workshops
          </h1>
          <p className="text-cyan-400 text-lg md:text-2xl max-w-2xl mx-auto">
            Choose your path to success
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  relative
                  rounded-xl
                  overflow-hidden
                  shadow-lg
                  group
                  h-64 md:h-72
                  bg-white/5
                  border border-white/20
                  hover:border-cyan-400/50
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                {/* Optimized Image */}
                <img
                  src={card.src}
                  alt={`${card.title} workshop`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  loading="lazy"
                  width="400"
                  height="300"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x300/1e40af/ffffff?text=${encodeURIComponent(card.title)}`;
                  }}
                />

                {/* Overlay Content */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-black/80
                  md:opacity-0
                  md:group-hover:opacity-100
                  opacity-100
                  transition-opacity
                  duration-300
                  flex
                  flex-col
                  justify-between
                  p-4
                  text-center
                "
                >
                  {/* Top Content */}
                  <div className="flex-1 flex flex-col justify-center space-y-3">
                    <h2 className="text-lg md:text-xl font-bold text-white line-clamp-2">
                      {card.title}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-2 pt-4">
                    <div>
                      <span className="text-cyan-400 font-semibold text-sm">
                        Category:{" "}
                      </span>
                      <span className="text-white text-sm">
                        {card.className}
                      </span>
                    </div>
                    <div className="pb-2">
                      <span className="text-cyan-400 font-semibold text-sm">
                        Instructor:{" "}
                      </span>
                      <span className="text-white text-sm">
                        {card.formateur}
                      </span>
                    </div>
                    <button
                      onClick={() => handleInscription(card.title)}
                      className="
                        bg-cyan-400
                        hover:bg-cyan-300
                        text-black
                        font-bold
                        py-3
                        px-6
                        rounded-lg
                        transition-all
                        duration-200
                        hover:scale-105
                        border-2 border-cyan-400
                        text-base
                        w-full
                        uppercase
                        tracking-wide
                        shadow-lg
                        focus:outline-none focus:ring-4 focus:ring-cyan-400/50
                        min-h-12
                      "
                      aria-label={`Register for ${card.title}`}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 px-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-cyan-400/20">
            <h3 className="text-cyan-400 text-2xl font-bold mb-4">
              Why Choose Our Workshops?
            </h3>
            <p className="text-white text-base leading-relaxed">
              Industry experts provide hands-on experience and practical skills for today's job market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Workshops);