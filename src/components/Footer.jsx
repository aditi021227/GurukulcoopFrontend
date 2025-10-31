import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="text-[#FFF8E1]"
      style={{
        backgroundColor: "#4E342E",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* grid: left | center | right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* LEFT: Brand / About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              
          
                {/* Logo SVG */}
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 32 32"
                  fill="#FFB300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="15"
                    stroke="#004D40"
                    strokeWidth="2"
                    fill="#FFF8E1"
                  />
                  <text
                    x="16"
                    y="21"
                    textAnchor="middle"
                    fontWeight="bold"
                    fontSize="11"
                    fill="#004D40"
                    fontFamily="sans-serif"
                  >
                    GC
                  </text>
                </svg>
              
              <div>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: "#FFB300" }}
                >
                  GurukulCoop
                </h4>
                <div
                  className="text-xs"
                  style={{ color: "#FFF8E1" }}
                >
                  Building transparent and inclusive communities.
                </div>
              </div>
            </div>

            <p
              className="text-sm text-justify"
              style={{ color: "#FFF8E1" }}
            >
GurukulCoop is dedicated to fostering a transparent, inclusive, and thriving cooperative community. We empower our members with trustworthy financial solutions, accessible resources, and a collaborative platform built on honesty and mutual growth.            </p>
          </div>

          {/* CENTER: Quick Links */}
          <div className="flex flex-col items-center justify-start">
            <h5
              className="text-base font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#FFB300" }}
            >
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Dashboard", "/dashboard"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white hover:text-[#FFB300] transition-colors duration-300 focus:outline-none focus:text-[#FFB300]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Contact Info */}
          <div className="flex flex-col items-start">
            <h5
              className="text-base font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#FFB300" }}
            >
              Contact Us
            </h5>

            <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#FFF8E1" }}>
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#FFB300]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 6-9 11-9 11S3 16 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>
                  44, Cooperative Lane,<br />
                  City Center, State 123456
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#FFB300]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.88.37 1.75.74 2.56a2 2 0 0 1-.45 2.11L8.91 9.91a16 16 0 0 0 6 6l1.52-1.52a2 2 0 0 1 2.11-.45c.81.37 1.68.62 2.56.74A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+911234567890"
                  className="text-white hover:text-[#FFB300] transition-colors duration-300 focus:outline-none focus:text-[#FFB300]"
                >
                  +91 12345 67890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-[#FFB300]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7l9 6 9-6" />
                  <path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7" />
                </svg>
                <a
                  href="mailto:info@gurukulcoop.org"
                  className="text-white hover:text-[#FFB300] transition-colors duration-300 focus:outline-none focus:text-[#FFB300]"
                >
                  info@gurukulcoop.org
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Divider & Legal */}
        <div className="mt-8 border-t" style={{ borderColor: "#BDBDBD" }} />
        <div className="pt-3 text-center text-xs" style={{ color: "#BDBDBD" }}>
          © {new Date().getFullYear()} <span style={{ color: "#FFB300" }}>GurukulCoop</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
