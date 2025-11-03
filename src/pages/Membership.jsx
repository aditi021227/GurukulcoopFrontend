import React from "react";
import { Link } from "react-router-dom";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E1] text-[#004D40]">
      {/* HERO SECTION */}
      <section className="py-20 bg-[#FFF8E1] text-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex justify-center items-center gap-3">
            <svg
              className="w-8 h-8 text-[#FFB300]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M3 10l9-6 9 6v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
            </svg>
            Become a Member
          </h1>
          <p className="text-[#004D40]/80 text-lg max-w-2xl mx-auto mb-8">
            Join GurukulCoop and be part of a growing network of changemakers,
            learners, and community builders working toward sustainable growth.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004D40] text-white font-semibold shadow-sm hover:bg-[#3a5e53] hover:shadow-[0_20px_60px_rgba(0,77,64,0.25)] transition"
          >
            Join Now
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center flex justify-center items-center gap-3">
            <svg
              className="w-8 h-8 text-[#FFB300]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M3 12l2-2 4 4L19 4l2 2L9 18z" />
            </svg>
            Membership Benefits
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Networking Opportunities",
                desc: "Meet fellow professionals and entrepreneurs in your community.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21a8.38 8.38 0 0113 0" />
                  </svg>
                ),
              },
              {
                title: "Skill Development",
                desc: "Access learning resources and participate in workshops and mentorship programs.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 2l9 5-9 5-9-5 9-5z" />
                    <path d="M3 10v6a2 2 0 002 2h14a2 2 0 002-2v-6" />
                  </svg>
                ),
              },
              {
                title: "Funding Access",
                desc: "Apply for micro-grants and cooperative financial support for your projects.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 1v22" />
                    <path d="M17 5H9a4 4 0 000 8h6a4 4 0 010 8H7" />
                  </svg>
                ),
              },
              {
                title: "Exclusive Events",
                desc: "Participate in special events and leadership summits organized by GurukulCoop.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                  </svg>
                ),
              },
              {
                title: "Community Recognition",
                desc: "Feature your story or project in our member spotlight and newsletters.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
                  </svg>
                ),
              },
              {
                title: "Social Impact",
                desc: "Contribute to local and national initiatives that make a difference.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 22s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                ),
              },
            ].map((b, i) => (
              <article
                key={i}
                className="p-6 rounded-xl bg-[#FFF8E1] border-2 border-[#004D40] shadow-[0_6px_18px_rgba(0,77,64,0.15)]
                           hover:border-[#FFB300] hover:shadow-[0_14px_40px_rgba(255,179,0,0.2)] transition transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#004D40] text-[#FFF8E1]">
                    {b.icon}
                  </div>
                  <h3 className="font-extrabold text-lg">{b.title}</h3>
                </div>
                <p className="text-sm text-[#004D40]/80">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO JOIN SECTION */}
      <section className="py-16 bg-[#FAF3DD]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 flex justify-center items-center gap-3">
            <svg
              className="w-8 h-8 text-[#FFB300]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 2v20M5 12h14" />
            </svg>
            How to Join
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Learn About Membership",
                desc: "Understand how GurukulCoop empowers individuals and communities.",
              },
              {
                step: "2",
                title: "Connect With Us",
                desc: "Reach out to our team to get guidance on the membership process.",
              },
              {
                step: "3",
                title: "Join the Network",
                desc: "Become an active member and start participating in events and programs.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border-2 border-[#004D40] shadow-[0_6px_18px_rgba(0,77,64,0.15)]
                           hover:border-[#FFB300] hover:shadow-[0_14px_40px_rgba(255,179,0,0.2)] transition transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#004D40] text-[#FFF8E1] flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="font-extrabold mb-2">{s.title}</h3>
                <p className="text-sm text-[#004D40]/80">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFB300] text-[#004D40] font-semibold hover:bg-[#e6a100] hover:shadow-[0_24px_80px_rgba(230,161,0,0.18)] transition transform hover:-translate-y-1"
            >
              Contact Us to Join
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
