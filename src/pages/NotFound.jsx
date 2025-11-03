import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FFF8E1] text-[#004D40] flex items-center justify-center p-6">
      <div
        className="max-w-xl w-full bg-white rounded-xl border-4 border-[#004D40] shadow-[0_12px_40px_rgba(0,77,64,0.12)]
                   p-10 flex flex-col items-center gap-6"
        role="alert"
        aria-labelledby="notfound-title"
      >
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-[#FFB300] flex items-center justify-center text-[#004D40] text-2xl font-bold shadow-sm">
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            <path d="M8 10s1.5-2 4-2 4 2 4 2" />
            <path d="M9 14h.01M15 14h.01" />
          </svg>
        </div>

        {/* Code & Message */}
        <div className="text-center">
          <h1 id="notfound-title" className="text-6xl md:text-7xl font-extrabold leading-none">404</h1>
          <p className="mt-3 text-lg md:text-xl text-[#004D40]/85 font-semibold">Page not found</p>
          <p className="mt-2 text-sm text-[#004D40]/70 max-w-md mx-auto">
            Oops — the page you’re looking for doesn’t exist or has been moved. Try one of the links below.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#004D40] text-white font-semibold
                       hover:bg-[#3a5e53] transition shadow-sm"
          >
            {/* home icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10.5z" />
            </svg>
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-[#FFB300] text-[#004D40] font-semibold
                       hover:bg-[#FFB300] hover:text-white transition shadow-sm"
          >
            {/* contact icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M4 4h16v12H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            Contact Support
          </Link>
        </div>

        {/* Small hint */}
        <p className="text-xs text-[#004D40]/60 mt-2">If you think this is an error, please reach out — we'll help get you back on track.</p>
      </div>
    </main>
  );
}
