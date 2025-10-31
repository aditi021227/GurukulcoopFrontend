import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' },
  { name: 'Dashboard', to: '/dashboard' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#004D40] shadow-md backdrop-blur-lg bg-opacity-70 backdrop-saturate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    
<NavLink to="/" className="flex-shrink-0 flex items-center space-x-2">
  {/* Logo SVG or Image */}
  <svg
    className="h-8 w-8"
    viewBox="0 0 32 32"
    fill="#FFB300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="15" stroke="#004D40" strokeWidth="2" fill="#FFF8E1"/>
    <text x="16" y="21" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#004D40" fontFamily="sans-serif">GC</text>
  </svg>
  <span className="text-[#FFF8E1] font-extrabold text-2xl tracking-tight uppercase">GurukulCoop</span>
</NavLink>



        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
  `transition duration-300 px-4 py-2 rounded-md 
   hover:text-[#FFB300] border-b-2 border-transparent hover:border-[#FFB300] 
   ${isActive ? 'text-[#FFB300] border-b-2 border-[#FFB300] font-bold' : 'text-[#FFF8E1]'}`

                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger menu on Mobile */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-8 h-8 flex flex-col justify-between items-center transition-transform duration-300 ${menuOpen ? 'rotate-45' : ''}`}
          >
            <div className="w-6 h-1 bg-[#FFF8E1]"></div>
            <div className="w-6 h-1 bg-[#FFF8E1]"></div>
            <div className="w-6 h-1 bg-[#FFF8E1]"></div>
          </div>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#004D40] bg-opacity-90 px-4 pb-4 pt-2 transition-all duration-300">
          <ul className="flex flex-col space-y-2 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md hover:text-[#FFB300] border-l-4 border-transparent hover:border-[#FFB300] ${
                      isActive ? 'text-[#FFB300] border-l-4 border-[#FFB300]' : 'text-[#FFF8E1]'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
