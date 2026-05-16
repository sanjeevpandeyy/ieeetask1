// src/components/Img.jsx

import galleryData from "../data/galleryData";

export default function Img() {
  return (
    <section className="bg-[#dfe4f3] w-full py-[60px] overflow-x-hidden [perspective:1000px]">

      {/* Heading */}
      <div className="text-center">

        <h1
          className="text-[42px] font-[700] text-[#1d3f91]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Gallery
        </h1>

        <div className="flex items-center justify-center mt-[16px]">

        

<img
  src="https://ieeergpv.in/devider.png"
  alt="divider"
  className="w-[200px] h-20 mx-[14px] -mt-4"
/>

</div>

      </div>

      {/* Gallery Grid */}
      <div className="w-full max-w-[1440px] mx-auto mt-[55px] px-[80px]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">

          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-[14px] aspect-[4/3] bg-slate-300 shadow-md cursor-pointer transition-all duration-500 ease-out [transform-style:preserve-3d] hover:[transform:translateZ(40px)_scale(1.04)] hover:shadow-2xl ${
                item.id === 10
                  ? "md:col-span-2 md:max-w-[calc(50%-14px)] md:mx-auto lg:col-span-1 lg:col-start-2 lg:max-w-full lg:mx-0"
                  : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}