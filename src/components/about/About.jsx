import React from "react";

const ProgramIcon = ({ name, className = "w-5 h-5" }) => {
  const base = "stroke-current";
  if (name === "education") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden>
        <path d="M12 2l9 5-9 5-9-5 9-5z" />
        <path d="M3 10v6a2 2 0 002 2h14a2 2 0 002-2v-6" />
      </svg>
    );
  }
  if (name === "finance") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden>
        <path d="M12 1v22" />
        <path d="M17 5H9a4 4 0 000 8h6a4 4 0 010 8H7" />
      </svg>
    );
  }
  if (name === "community") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden>
        <path d="M12 12c2.2 0 3.5-2 3.5-3.8S14.2 4.4 12 4.4 8.5 6.4 8.5 8.2 9.8 12 12 12z" />
        <path d="M4 20c0-3 3.6-5.5 8-5.5s8 2.5 8 5.5" />
      </svg>
    );
  }
  return (
    <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};

export default function About() {
  const programs = [
    {
      title: "Skill Workshops",
      desc: "Hands-on technical & soft skills.",
      icon: "education",
      imgText: "Workshop",
      img: "/images/aboutuspage/workshop.jpg",
    },
    {
      title: "Seed Grants",
      desc: "Small grants to kickstart projects.",
      icon: "finance",
      imgText: "Grants",
      img: "/images/aboutuspage/grants.jpg",
    },
    {
      title: "Mentor Network",
      desc: "Pairing members with experienced mentors.",
      icon: "community",
      imgText: "Mentors",
      img: "/images/aboutuspage/mentors.jpg",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Community Meetups Begin",
      text: "Small neighbourhood meetups to share skills and tools.",
      img: "/images/aboutuspage/2018-meetup.jpg",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M12 12c2.2 0 3.5-2 3.5-3.8S14.2 4.4 12 4.4 8.5 6.4 8.5 8.2 9.8 12 12 12z" />
          <path d="M4 20c0-3 3.6-5.5 8-5.5s8 2.5 8 5.5" />
        </svg>
      ),
    },
    {
      year: "2019",
      title: "Formal Founding",
      text: "Members organized, set up governance and initial funding plans.",
      img: "/images/aboutuspage/2019-founding.jpg",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M3 10l9-6 9 6v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
        </svg>
      ),
    },
    {
      year: "2020",
      title: "First Grants",
      text: "Seed grants awarded to 12 community projects — micro enterprises and local initiatives.",
      img: "/images/aboutuspage/2020-grants.jpg",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M12 1v22M7 7h10" />
        </svg>
      ),
    },
    {
      year: "2022",
      title: "Network Growth",
      text: "Expanded to 20+ active communities and launched a resource library online.",
      img: "/images/aboutuspage/2022-growth.jpg",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen text-[#004D40]">
      {/* HERO */}
      <section className="bg-[#FFF8E1] text-[#004D40]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">About GurukulCoop</h1>
              <p className="text-[#004D40]/80 text-lg max-w-xl">
                A member-driven cooperative that builds local capacity through education, events, and micro-finance.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="/membership"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#004D40] text-white font-semibold shadow-sm transition transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]/40"
                >
                  Join the movement
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-[#004D40]/20 text-[#004D40] hover:border-[#FFB300] hover:text-[#FFB300] transition transform hover:-translate-y-1"
                >
                  Explore programs
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#004D40]/10 border-l-4 border-[#FFB300] hover:border-[#004D40] hover:shadow-[0_28px_90px_rgba(0,77,64,0.18)] transition transform hover:-translate-y-1">
              {/* fixed-size wrapper to control hero image height */}
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <img
                  src="/images/aboutuspage/about-community.jpg"
                  alt="About GurukulCoop members in a community event"
                  loading="lazy"
                  decoding="async"
                  width="1600"
                  height="900"
                  className="w-full h-full object-cover object-center"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-white text-[#004D40]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">Our Mission</h2>
              <p className="text-[#004D40]/80">
                To empower local communities with skills, access to resources and fair financial tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-[#FFB300] text-[#004D40]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                      <path d="M12 2l9 5-9 5-9-5 9-5z" />
                      <path d="M3 10v8a2 2 0 002 2h14" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Practical learning</div>
                    <div className="text-sm text-[#004D40]/70">Workshops, mentoring and digital resources.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-[#FFB300] text-[#004D40]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                      <path d="M3 12l4 4 4-4M17 8l4 4-4 4" />
                      <path d="M7 16l3 3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Collaborative networks</div>
                    <div className="text-sm text-[#004D40]/70">Peer groups and local partnerships.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-[#FFB300] text-[#004D40]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                      <path d="M12 2v10" />
                      <path d="M6 12c0 3 3 6 6 6s6-3 6-6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Seed funding</div>
                    <div className="text-sm text-[#004D40]/70">Small grants for community initiatives.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-md bg-[#FFB300] text-[#004D40]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                      <path d="M8 14s1.5-2 4-2 4 2 4 2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Ongoing support</div>
                    <div className="text-sm text-[#004D40]/70">Advisory and resource access for members.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlighted cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-[#FFF8E1] border border-[#004D40]/10 border-l-4 border-[#FFB300] hover:border-[#004D40] hover:shadow-[0_20px_80px_rgba(0,77,64,0.14)] transition transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-[#004D40] text-white">
                    <ProgramIcon name="education" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold">Education & Training</h3>
                    <p className="text-sm text-[#004D40]/70 mt-1">Workshops, mentoring and digital resources.</p>
                  </div>
                </div>

                {/* card image wrapper */}
                <div className="w-full mt-4 overflow-hidden rounded-md border border-[#004D40]/10">
                  <div className="w-full h-40 md:h-56 overflow-hidden">
                    <img
                      src="/images/aboutuspage/training.jpg"
                      alt="Training session"
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="675"
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
                      style={{ aspectRatio: "16/9" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-16 bg-[#FAF3DD] text-[#004D40]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug flex items-center justify-center gap-3">
              Programs & Services
            </h2>
            <p className="text-[#004D40]/70 max-w-2xl mx-auto mt-3">Practical programs designed to help members build skills, start initiatives and access support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, idx) => (
              <article
                key={idx}
                className="p-6 rounded-lg bg-[#FFF8E1] shadow-sm border border-[#004D40]/10 border-l-4 border-[#FFB300] hover:border-[#004D40] hover:shadow-[0_28px_90px_rgba(0,77,64,0.18)] transition transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-[#004D40] flex items-center justify-center text-white shrink-0">
                    <ProgramIcon name={p.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-lg">{p.title}</h3>
                    <p className="text-sm text-[#004D40]/70 mt-1">{p.desc}</p>
                    <div className="mt-3 flex gap-3 items-center">
                      <a className="text-sm inline-flex items-center gap-2 text-[#004D40] hover:text-[#FFB300]" href="#">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Learn more
                      </a>
                      <span className="text-xs text-[#004D40]/60">•</span>
                      <span className="text-xs text-[#004D40]/60">Free / Paid</span>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-4 overflow-hidden rounded-md border border-[#004D40]/10">
                  <div className="w-full h-40 md:h-48 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.03]"
                      style={{ aspectRatio: "4/3" }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / STORY */}
      <section className="py-16 bg-white text-[#004D40]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Story</h2>
          <p className="text-[#004D40]/80 mb-10">From a small local group to a network of communities — milestones that shaped our journey.</p>

          <div className="space-y-12">
            {timeline.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                <div className="flex items-center gap-4 flex-shrink-0 relative">
                  <svg aria-hidden className="w-16 h-16 md:w-20 md:h-20 text-[#004D40] animate-[arrowMove_2.5s_ease-in-out_infinite]" viewBox="0 0 64 64" fill="none">
                    <path d="M6 32h42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 20l18 12-18 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#004D40] text-[#FFF8E1] font-bold text-lg md:text-xl shadow-lg ring-4 ring-[#FFB300]/60 animate-[glowPulse_3s_ease-in-out_infinite]">
                    {step.year}
                  </div>
                </div>

                <div className="flex-1 p-6 rounded-lg bg-[#FFF8E1] border border-[#004D40]/20 border-l-4 border-[#FFB300] hover:border-[#004D40] hover:shadow-[0_20px_80px_rgba(0,77,64,0.14)] transition transform hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-[#FFB300] text-[#004D40]">{step.icon}</div>
                    <h3 className="font-extrabold text-lg">{step.title}</h3>
                  </div>

                  <p className="text-sm text-[#004D40]/80 mt-3">{step.text}</p>

                  <div className="mt-4 w-full overflow-hidden rounded-md border border-[#004D40]/10">
                    <div className="w-full h-44 md:h-56 overflow-hidden">
                      <img
                        src={step.img}
                        alt={step.title}
                        loading="lazy"
                        decoding="async"
                        width="1200"
                        height="675"
                        className="w-full h-full object-cover object-center"
                        style={{ aspectRatio: "16/9" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes arrowMove {
            0%,100% { transform: translateX(0); opacity: 0.8; }
            50% { transform: translateX(6px); opacity: 1; }
          }
          @keyframes glowPulse {
            0%,100% { box-shadow: 0 0 0px rgba(255,179,0,0.2); }
            50% { box-shadow: 0 0 25px rgba(255,179,0,0.6); }
          }
        `}</style>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-[#004D40] text-[#FFF8E1]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Get involved</h3>
          <p className="text-[#BDBDBD] mb-6">Want to run a workshop or start a local project? Reach out — we’ll support you.</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#FFB300] text-[#004D40] font-semibold hover:bg-[#e6a100] hover:shadow-[0_24px_80px_rgba(230,161,0,0.18)] transition transform hover:-translate-y-1"
            >
              Contact Us
            </a>
            <a
              href="/membership"
              className="px-6 py-3 rounded-full border border-[#FFF8E1]/20 text-[#FFF8E1] hover:bg-[#FFF8E1] hover:text-[#004D40] transition transform hover:-translate-y-1"
            >
              Become a member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
