// pages/workshops.jsx
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
  const cards = [
    {
      src: "/workshop.jpg",
      title: "Protected Consulting and exploring e-learning pathways with edX",
      description: "discover the fundamentals of Protected Consulting, an approach centered on secure, structured, and ethical digital solutions for modern organizations",
      className: "Advanced Security",
      formLink: "https://forms.gle/6iinMNNdGVwHNw7M6" // Replace with actual form link
    },
    {
      src: "/symfony.jpg",
      title: "Rapid Application Development",
      description: "Learn to build robust web applications quickly using Symfony framework and best practices in modern web development.",
      className: "Advanced Security",
      formLink: "https://forms.gle/gMUWWn3XNSVuqNPE9" // Replace with actual form link
    },
    {
      src: "/softskills.jpg",
      title: "Le code Legend",
      description: "Enhance your interpersonal skills, communication, and teamwork to excel in professional environments.",
      className: "Advanced Security",
      formLink: "https://forms.gle/ebU6nb2Qbh6DpBoQ7" // Replace with actual form link
    },
    {
      src: "/goMyCode.jpg",
      title: "Web development with React",
      description: "Master the fundamentals of web development using React, building dynamic and responsive user interfaces.",
      className: "Advanced Security",
      formLink: "https://forms.gle/gPUxvGEHxohs7qey8" // Replace with actual form link
    },
  ];

  const handleInscription = (formLink) => {
    window.open(formLink, '_blank', 'noopener,noreferrer');
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
                  <div className="flex-2 flex flex-col justify-center space-y-3">
                    <h2 className="text-lg md:text-xl font-bold text-cyan-400 line-clamp-2">
                      {card.title}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 font-bold">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-2 pt-4">
                    <button
                      onClick={() => handleInscription(card.formLink, card.title)}
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