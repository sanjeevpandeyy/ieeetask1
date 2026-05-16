// src/components/Footer.jsx

import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (

    <footer className="relative bg-[#0b1320] text-white overflow-hidden">

      <style>
        {`
          .lamp-animation {
            animation: lampMove 3s ease-in-out infinite;
          }

          @keyframes lampMove {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(20px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

      {/* Left Hanging Lamps */}
      <div className="absolute top-0 left-0 lamp-animation">
        <img
          src="https://ieeergpv.in/image.png"
          className="w-56 md:w-72"
          alt="decorative lamps"
        />
      </div>

      {/* Right Street Lamp */}
      <div className="absolute bottom-0 right-0">
        <img
          src="https://ieeergpv.in/lamp3.png"
          className="h-[400px]"
          alt="street lamp"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-10 pb-8">

        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="https://ieeergpv.in/ieeergpv.png"
            className="w-60"
            alt="IEEE"
          />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-center text-[14px] mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2 text-center text-gray-300">

              <li className="text-[12px] hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="text-[12px] hover:text-white cursor-pointer transition">
                Team
              </li>

              <li className="text-[12px] hover:text-white cursor-pointer transition">
                Events
              </li>

              <li className="text-[12px] hover:text-white cursor-pointer transition">
                Contact
              </li>

            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center">

            <h2 className="font-bold text-[14px] mb-4">
              Follow Us
            </h2>

            <div className="flex flex-col gap-6">

              <a
                href="#"
                className="hover:scale-110 transition w-fit"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="hover:scale-110 transition w-fit"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>

          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">

            <h2 className="font-bold text-[14px] mb-4 text-center">
              Contact
            </h2>

            <div className="space-y-2 text-gray-300 text-[12px] ">

              <div className="flex gap-4 items-center">

                <Mail className="w-5 h-5" />

                <span>
                  ieeestb1146@gmail.com
                </span>

              </div>

              <div className="flex gap-4 items-center text-center">

                <Phone className="w-5 h-5" />

                <span>
                  +91 9039813288
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-20 text-center">

          <p className="font-semibold text-md">
            © 2025 IEEE RGPV Bhopal Student Branch.
            Designed & Developed by IEEE RGPV Team.
          </p>

        </div>

      </div>

    </footer>
  );
}