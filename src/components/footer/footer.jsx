// src/components/nav/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Membership", to: "/membership" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

function LogoMark({ className = "w-10 h-10" }) {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-[#004D40] text-white font-bold ${className}`}
      aria-hidden
    >
      G
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-[#373636] text-[#FFF8E1]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo + paragraph */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <div className="text-lg font-semibold">GurukulCoop</div>
                <div className="text-[#BDBDBD] text-sm -mt-0.5">
                  Community • Trust • Growth
                </div>
              </div>
            </div>

            <p className="text-[#BDBDBD] text-sm leading-relaxed">
              GurukulCoop is a community-driven cooperative focused on financial
              inclusion, knowledge sharing, and local growth initiatives. We
              bring members together through trusted services, events, and
              resources.
            </p>

            <NavLink
              to="/membership"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#004D40] text-white text-sm font-semibold shadow-sm hover:bg-[#FFB300] hover:text-[#4E342E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]/40 transition"
            >
              Join the community
            </NavLink>
          </div>

          {/* Middle: Quick Links */}
          <nav aria-label="Quick links" className="md:col-span-1">
            <h3 className="text-[#FFF8E1] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `inline-block text-sm leading-relaxed px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]/40 ${
                        isActive
                          ? "text-[#FFB300] font-semibold"
                          : "text-[#BDBDBD] hover:text-[#FFB300]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {link.label}
                        <span
                          aria-hidden
                          className={`block h-0.5 bg-[#FFB300] absolute left-0 -bottom-1 transition-all duration-200 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Contact info with icons */}
          <div>
            <h3 className="text-[#FFF8E1] font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm text-[#BDBDBD]">
              {/* Location */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#FFB300] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <div>
                  <div className="font-medium text-[#FFF8E1]">
                    GurukulCoop Office
                  </div>
                  <p className="text-sm">Plot 251, 2nd floor Udyog Vihar, Phase IV, Sector 18, Gurugram, Haryana, 122015</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#FFB300] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 013.15 9.81a19.86 19.86 0 01-3.07-8.63A2 2 0 012.08 2h3a2 2 0 012 1.72c.12.82.37 1.63.72 2.38l.6 1.32a2 2 0 01-.45 2.19l-1.27 1.27a16 16 0 006.88 6.88l1.27-1.27a2 2 0 012.19-.45l1.32.6c.75.35 1.56.6 2.38.72A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <div className="text-sm">Phone</div>
                  <a
                    href="tel:+911234567890"
                    className="block text-[#FFF8E1] hover:text-[#FFB300] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]/30"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#FFB300] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <div>
                  <div className="text-sm">Email</div>
                  <a
                    href="mailto:hello@gurukulcoop.example"
                    className="block text-[#FFF8E1] hover:text-[#FFB300] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]/30"
                  >
                    hello@gurukulcoop.example
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
   <div className="mt-8 border-t border-[#ffffff] pt-6">
  <div className="flex items-center justify-center text-center">
    <p className="text-xs text-[#BDBDBD]">
      © {year} GurukulCoop. All rights reserved.
    </p>
  </div>
</div>

      </div>
    </footer>
  );
}
