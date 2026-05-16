import { useEffect, useState } from "react";
import {
  Home,
  Smartphone,
  Phone,
  Code2,
  Menu,
} from "lucide-react";

export default function Navbar({ setActiveSection, active, setActive }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ACTIVE STYLE (WHITE BG + BLUE TEXT)
  const btnStyle = (name) =>
    `flex items-center gap-2 px-5 py-3 rounded-2xl
    font-medium transition-all duration-300
    ${
      active === name
        ? "bg-white text-[#2957FF] shadow-md"
        : "text-gray-700 hover:bg-white/50 hover:text-[#2957FF] hover:shadow-lg"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
      bg-gradient-to-r from-[#cfd7e6] via-[#dce3f0] to-[#eef2fb]
      border border-white/40 backdrop-blur-md transition-all duration-300
      ${shadow ? "shadow-xl" : "shadow-md"}`}
    >
      <div className="flex flex-row justify-between items-center h-[80px] px-8">

        {/* LOGO */}
        <div className="flex flex-row items-center gap-5 pl-[35px]">

          <img
            src="https://ieeergpv.in/dw.png"
            alt="IEEE Logo"
            className="w-20 object-contain"
          />

          <div>
            <h3 className="text-black font-semibold text-[13px]">
              IEEE
            </h3>
            <p className="text-[#1218b5] font-medium text-sm">
              RGPV STUDENT BRANCH
            </p>
          </div>

        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-row items-center gap-4 mr-8">

          <button
            onClick={() => {
              setActive("home");
              setActiveSection("home");
            }}
            className={btnStyle("home")}
          >
            <Home className="w-5 h-5" />
            Home
          </button>

          <button
            onClick={() => {
              setActive("events");
              setActiveSection("events");
            }}
            className={btnStyle("events")}
          >
            <Smartphone className="w-5 h-5" />
            Events
          </button>

          <button
            onClick={() => {
              setActive("contact");
              setActiveSection("contact");
            }}
            className={btnStyle("contact")}
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </button>

          <button
            onClick={() => {
              setActive("members");
              setActiveSection("members");
            }}
            className={btnStyle("members")}
          >
            <Code2 className="w-5 h-5" />
            Members
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/50 transition"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/40 shadow-md px-4 py-4">

          <div className="flex flex-col gap-2">

            <button
              onClick={() => {
                setActive("home");
                setActiveSection("home");
                setMobileOpen(false);
              }}
              className={btnStyle("home")}
            >
              <Home className="w-5 h-5" />
              Home
            </button>

            <button
              onClick={() => {
                setActive("events");
                setActiveSection("events");
                setMobileOpen(false);
              }}
              className={btnStyle("events")}
            >
              <Smartphone className="w-5 h-5" />
              Events
            </button>

            <button
              onClick={() => {
                setActive("contact");
                setActiveSection("contact");
                setMobileOpen(false);
              }}
              className={btnStyle("contact")}
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>

            <button
              onClick={() => {
                setActive("members");
                setActiveSection("members");
                setMobileOpen(false);
              }}
              className={btnStyle("members")}
            >
              <Code2 className="w-5 h-5" />
              Members
            </button>

          </div>

        </div>
      )}

    </nav>
  );
}