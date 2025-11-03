import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

function IconMenu({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClose({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M6 18L18 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkBase =
    "relative text-[#FFF8E1] text-sm px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]/40";
  const activeText = "text-[#FFB300] font-semibold";

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 bg-[#4E342E] ${
        scrolled ? "shadow-xl shadow-black/20" : ""
      }`}
    >
      <div className="border-b border-[#004D40]/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <NavLink to="/" className="flex items-center gap-3 no-underline">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#004D40] text-white font-bold shadow-sm">
                G
              </div>
              <div className="hidden sm:block">
                <div className="text-[#FFF8E1] font-semibold leading-none">
                  GurukulCoop
                </div>
                <div className="text-[#BDBDBD] text-xs -mt-0.5">
                  Community • Trust • Growth
                </div>
              </div>
            </NavLink>

            {/* Middle: Nav (desktop) */}
            <div className="flex-1 flex items-center justify-center">
              <nav className="hidden md:flex items-center gap-1">
                {LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `${linkBase} mx-1 group ${
                        isActive ? activeText : "hover:text-[#FFB300]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {l.label}
                        <span
                          aria-hidden
                          className={`block h-[2px] bg-[#FFB300] absolute left-0 -bottom-2 transition-all duration-200 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Right: CTA / Mobile toggle */}
            <div className="flex items-center gap-3">
              {/* 💡 Updated Join Button */}
              <NavLink
                to="/membership"
                className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-[#004D40] text-white text-sm font-semibold 
                           shadow-md hover:bg-[#FFB300] hover:text-[#4E342E] transition-transform transform hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,179,0,0.25)]"
              >
                Join Now
              </NavLink>

              <button
                onClick={() => setOpen((v) => !v)}
                className="md:hidden p-2 rounded-md text-[#FFF8E1] hover:bg-[#004D40]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]/40"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden origin-top transform-gpu transition-all duration-300 ease-in-out overflow-hidden border-t border-[#004D40]/20 bg-[#4E342E] ${
            open ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 pt-4 space-y-3">
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#004D40] text-white font-bold">
                  G
                </div>
                <div>
                  <div className="text-[#FFF8E1] font-semibold">
                    GurukulCoop
                  </div>
                  <div className="text-[#BDBDBD] text-xs">
                    Community • Trust • Growth
                  </div>
                </div>
              </div>
              <NavLink
                to="/membership"
                className="text-sm inline-flex items-center px-5 py-2 rounded-full bg-[#004D40] text-white font-semibold hover:bg-[#FFB300] hover:text-[#4E342E] transition"
              >
                Join Now
              </NavLink>
            </div>

            <div className="space-y-1">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-2 rounded ${
                      isActive
                        ? "bg-[#004D40]/30 text-[#FFB300] font-semibold"
                        : "text-[#FFF8E1] hover:bg-[#004D40]/20"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#004D40]/20">
              <a
                href="/contact"
                className="block text-sm text-[#BDBDBD] hover:text-[#FFB300]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
