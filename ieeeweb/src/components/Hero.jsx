import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
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

export default function Hero({ setActiveSection, setActive }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const TOTAL = slides.length;

  // AUTO SLIDE
  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAuto = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL);
    }, 4000);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % TOTAL);
    startAuto();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + TOTAL) % TOTAL);
    startAuto();
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">

      {/* Animation */}
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

      {/* SLIDER */}
      <div
        className="flex h-full transition-transform duration-1000"
        style={{
          width: `${TOTAL * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-[600px] shrink-0">
            <img
              src={slide.image}
              alt="IEEE"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="absolute top-[100px] left-10 md:left-16 z-20 movement">

        <h2 className="text-white text-[32px] md:text-[56px] font-extrabold leading-[60px] md:leading-[88px] tracking-tight">
          IEEE <br />
          RGPV STUDENT <br />
          BRANCH
        </h2>

        {/* CONTACT BUTTON */}
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
  mt-20 px-4 py-2 "
  

>
  Contact Us
</button>

      </div>

      {/* ARROWS */}
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

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              startAuto();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-500" : "bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}