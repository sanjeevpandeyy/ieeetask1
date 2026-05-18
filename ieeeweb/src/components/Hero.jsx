import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const realSlides = [
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=80",
  },
];

// 🔥 clones (JS-style infinite loop)
const slides = [
  realSlides[realSlides.length - 1],
  ...realSlides,
  realSlides[0],
];

export default function Hero({ setActiveSection, setActive }) {
  const [index, setIndex] = useState(1); // start from first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef(null);

  const TOTAL = realSlides.length;

  // AUTO SLIDE
  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAuto = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const resetAuto = () => {
    clearInterval(intervalRef.current);
    startAuto();
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIndex((prev) => prev + 1);
    setIsTransitioning(true);
    resetAuto();
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIndex((prev) => prev - 1);
    setIsTransitioning(true);
    resetAuto();
  };

  // 🔥 same as your JS transitionend logic
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // jumped to last clone → reset to real first
    if (index === TOTAL + 1) {
      setIndex(1);
    }

    // jumped to first clone → reset to real last
    if (index === 0) {
      setIndex(TOTAL);
    }
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${index * 100}vw)`,
          transition: isTransitioning
            ? "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-screen h-[600px] shrink-0">
            <img
              src={slide.image}
              alt="IEEE"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* OVERLAY (UNCHANGED) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT (UNCHANGED) */}
      <div className="absolute top-[100px] left-10 md:left-16 z-20 movement">
        <style>
          {`
            .movement {
              animation: float 3s ease-in-out infinite;
            }

            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

        <h2 className="text-white text-[32px] md:text-[56px] font-extrabold leading-[60px] md:leading-[88px] tracking-tight">
          IEEE <br />
          RGPV STUDENT <br />
          BRANCH
        </h2>

        <button
          onClick={() => {
            setActiveSection("contact");
            setActive("contact");
          }}
          className="md:mt-10 md:px-8 md:py-4 rounded-full
          bg-white text-[#2957FF]
          md:text-2xl md:font-semibold
          shadow-lg
          transition-all duration-300
          hover:scale-105
          text-[16px]
          mt-20 px-4 py-2"
        >
          Contact Us
        </button>
      </div>

      {/* ARROWS (UNCHANGED UI) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronLeft className="w-10 h-10 text-[#2957FF]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronRight className="w-10 h-10 text-[#2957FF]" />
      </button>

      {/* DOTS (UNCHANGED UI, only logic fixed) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {realSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i + 1);
              resetAuto();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i + 1 ? "bg-blue-500" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}