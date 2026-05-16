// src/components/About.jsx

export default function About() {
  return (
    <section className="bg-[#dfe4f3] w-full py-[60px] overflow-x-hidden">

      {/* About Heading */}
      <div className="text-center -mb-10">

        <h1
          className="text-[28px] font-[700] text-[#1d3f91]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          About IEEE RGPV
        </h1>

        <div className="flex items-center justify-center mt-[16px]">

        

          <img
            src="https://ieeergpv.in/devider.png"
            alt="divider"
            className="w-[200px] h-20 mx-[14px] -mt-4"
          />

        </div>
      </div>

      {/* About Content */}
      <div className="w-full max-w-[1600px] mx-auto mt-[45px] px-[80px] ">

        <p
          className="text-[18px] leading-[34px] text-[#2c3d63] tracking-[0.2px] text-justify"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          IEEE is the world’s largest technical professional organization,
          dedicated to advancing technology for the betterment of humanity.
          Rooted in this global vision, the IEEE Student Branch RGPV stands as
          a hub for innovation, learning, and technical excellence within the
          student community.
        </p>

        <p
          className="text-[18px] leading-[34px] text-[#2c3d63] tracking-[0.2px] mt-[26px] text-justify"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Driven by curiosity and a passion for engineering, IEEE SB RGPV
          strives to create an environment that encourages students to explore
          emerging technologies, enhance their technical competence, and
          develop strong professional values. Through technical workshops,
          expert talks, competitions, and collaborative initiatives, the branch
          actively bridges the gap between theoretical knowledge and real-world
          application.
        </p>

        <p
          className="text-[18px] leading-[34px] text-[#2c3d63] tracking-[0.2px] mt-[26px] text-justify"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          With a commitment to continuous learning and societal impact, IEEE
          Student Branch RGPV aims to nurture future-ready engineers,
          researchers, and leaders who are not only technically skilled but
          also socially responsible. Guided by the core ideals of IEEE, the
          branch continues to work diligently toward shaping a technologically
          empowered and innovative generation.
        </p>

      </div>

      {/* Announcements Heading */}
      <div className="text-center mt-[75px]">

        <h1
          className="text-[42px] font-[700] text-[#1d3f91]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Announcements
        </h1>

        <div className="flex items-center justify-center mt-[16px]">

        

          <img
            src="https://ieeergpv.in/devider.png"
            alt="divider"
            className="w-[200px] h-20 mx-[14px] -mt-4"
          />

        </div>

      </div>

      <section className="bg-[#dfe4f3] w-full py-[60px] px-[20px] font-sans">

<div className="max-w-[1100px] mx-auto flex flex-col gap-[32px] items-center">

  {/* Card 1 */}
  <div className="w-full bg-[#f8fafc] rounded-[16px] p-[28px] relative shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] border border-[#e2e8f0]/50 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-300">

    <div className="flex items-center gap-[8px] mb-[12px]">

      <span className="relative flex h-[8px] w-[8px]">

        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>

        <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-red-600"></span>

      </span>

      <span className="text-[12px] font-[700] text-red-600 tracking-wider uppercase">
        New
      </span>

    </div>

    <div className="text-center px-[40px]">

      <h2 className="text-[24px] font-[600] text-[#1d3f91] mb-[12px] flex items-center justify-center gap-[6px]">
        SYNAPSE Winners Announced 🎉
      </h2>

      <p className="text-[16px] text-[#475569] leading-[1.6] mb-[20px] max-w-[900px] mx-auto">
        The winners of SYNAPSE have been officially announced.
        Congratulations to all participants for their outstanding
        performance and innovation.
      </p>

      <a
        href="#"
        className="inline-flex items-center text-[#2563eb] font-[600] text-[15px] hover:text-[#1d4ed8] hover:underline transition-colors duration-200"
      >
        View Winners
        <span className="ml-[4px] transform translate-y-[-1px]">
          →
        </span>
      </a>

    </div>

  </div>

  {/* Card 2 */}
  <div className="w-full bg-[#f8fafc] rounded-[16px] p-[28px] relative shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] border border-[#e2e8f0]/50 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-300">

    <div className="flex items-center justify-between mb-[12px]">

      <span className="bg-[#3b82f6] text-white text-[11px] font-[700] px-[12px] py-[4px] rounded-full uppercase tracking-wider">
        Event
      </span>

      <span className="text-[14px] text-[#64748b] font-[500]">
        24 Mar 2026
      </span>

    </div>

    <div className="text-center px-[40px]">

      <h2 className="text-[24px] font-[600] text-[#1d3f91] mb-[12px] flex items-center justify-center gap-[6px]">
        Call for Articles – Gyanganaga Volume 2 ✍️ 📘
      </h2>

      <p className="text-[16px] text-[#475569] leading-[1.6] mb-[20px] max-w-[900px] mx-auto">
        Submissions for Gyanganaga Volume 2 are now closed.
        We thank all participants for their valuable contributions.
        Winners and selected articles will be announced soon.
      </p>

      <a
        href="#"
        className="inline-flex items-center text-[#2563eb] font-[600] text-[15px] hover:text-[#1d4ed8] hover:underline transition-colors duration-200"
      >
        View Details
        <span className="ml-[4px] transform translate-y-[-1px]">
          →
        </span>
      </a>

    </div>

  </div>

  {/* Button */}
  <div className="mt-[16px]">

    <button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-[600] text-[16px] px-[32px] py-[12px] rounded-full shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 flex items-center gap-[6px]">
      View All Events
      <span>→</span>
    </button>

  </div>

</div>

</section>
    </section>
  );
}