import React from "react";

const SocialIcon = ({ type, className = "w-4 h-4" }) => {
  const base = "stroke-current";
  if (type === "linkedin") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-2-2 2 2 0 00-2 2v6h-4v-12h4v2" />
        <rect x="2" y="2" width="20" height="20" rx="2" />
      </svg>
    );
  }
  if (type === "twitter") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    );
  }
  return (
    <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};

export default function Team() {
  const members = [
    { name: "Ravi Kumar", role: "Community Lead", bio: "Coordinates local events and member outreach.", img: "/images/aboutuspage/ravi-kumar.jpg" },
    { name: "Sunita Sharma", role: "Programs Manager", bio: "Designs workshops and learning resources.", img: "/images/aboutuspage/sunita-sharma.jpg" },
    { name: "Aditi Malik", role: "Operations", bio: "Handles partnerships and logistics.", img: "/images/aboutuspage/aditi-malik.jpg" },
    { name: "Rahul Verma", role: "Finance Coordinator", bio: "Manages grants and financial literacy programs.", img: "/images/aboutuspage/rahul-verma.jpg" },
  ];

  return (
    <section className="py-16 bg-white text-[#004D40]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold">Meet the team</h2>
          <p className="text-[#004D40]/70 max-w-2xl mx-auto mt-2">
            A small, committed team coordinating programs, grants and member services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <article
              key={i}
              className="relative p-6 md:p-8 rounded-lg bg-[#FFF8E1] border border-[#004D40]/10 border-l-4 hover:border-[#004D40] hover:shadow-[0_28px_90px_rgba(0,77,64,0.18)] transition"
            >
              {/* Member Info */}
              <div className="flex items-center gap-4">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#004D40] shrink-0"
                />

                <div className="flex-1">
                  <h4 className="font-extrabold text-lg leading-snug">{m.name}</h4>
                  <div className="text-xs text-[#004D40]/70 mt-1">{m.role}</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-[#004D40]/80 mt-4">{m.bio}</p>

              {/* Social Icons (moved below bio) */}
              <div className="mt-5 flex items-center gap-3 text-[#004D40]">
                <a href="#" aria-label="LinkedIn" className="hover:text-[#FFB300]">
                  <SocialIcon type="linkedin" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-[#FFB300]">
                  <SocialIcon type="twitter" />
                </a>
                <a href="#" aria-label="Email" className="hover:text-[#FFB300]">
                  <SocialIcon type="email" />
                </a>
              </div>

              {/* Contact Button */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <a
                  href={`mailto:hello@gurukulcoop.org`}
                  className="text-xs inline-flex items-center gap-2 text-[#004D40] hover:text-[#FFB300]"
                >
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  Contact
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
