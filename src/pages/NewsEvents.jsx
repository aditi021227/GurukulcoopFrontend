import React from "react";

const Icon = ({ type, className = "w-6 h-6" }) => {
  const base = "stroke-current stroke-2";
  if (type === "news") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    );
  }
  if (type === "event") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  if (type === "quote") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 17h6m-3-9v6m-7 7h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  if (type === "calendar") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  if (type === "location") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    );
  }
  if (type === "user") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
        <path d="M4 22v-2a8 8 0 0116 0v2" />
      </svg>
    );
  }
  return (
    <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};

export default function NewsEventsPage() {
const newsItems = [
  {
    title: "EmpowerHer Workshop",
    date: "October 2025",
    img: "/images/newspage/empowerher-workshop.jpg",
    desc: "A leadership workshop promoting women-led initiatives across communities.",
  },
  {
    title: "GreenTech Drive",
    date: "September 2025",
    img: "/images/newspage/greentech-drive.jpg",
    desc: "Our environmental awareness campaign focusing on sustainable practices.",
  },
  {
    title: "Local Entrepreneurs Meet",
    date: "August 2025",
    img: "/images/newspage/local-entrepreneurs-meet.jpg",
    desc: "A networking event for small business owners and creators.",
  },
];

const events = [
  {
    title: "Digital Literacy Camp",
    date: "Nov 15, 2025",
    place: "New Delhi",
    img: "/images/newspage/digital-literacy-camp.jpg",
    desc: "A hands-on camp teaching basic digital skills to local participants.",
  },
  {
    title: "Community Fair 2025",
    date: "Dec 10, 2025",
    place: "Jaipur",
    img: "/images/newspage/community-fair-2025.jpg",
    desc: "Annual fair showcasing member projects, stalls, and workshops.",
  },
  {
    title: "GreenTech Drive",
    date: "Jan 12, 2026",
    place: "Mumbai",
    img: "/images/newspage/greentech-drive-event.jpg",
    desc: "Awareness + hands-on sessions for low-cost sustainable tech.",
  },
];


  const testimonials = [
    {
      name: "Priya Sharma",
      msg: "GurukulCoop keeps me connected with changemakers and helps my projects grow.",
    },
    {
      name: "Rohit Verma",
      msg: "The workshops and events are life-changing — practical and full of learning.",
    },
    {
      name: "Sunita K.",
      msg: "I love volunteering here — the community support is real and meaningful.",
    },
  ];

  return (
    <div className="min-h-screen text-[#004D40] bg-[#FFF8E1]">
      <section className="py-20 bg-[#FFF8E1] text-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex justify-center items-center gap-3">
            <Icon type="news" className="w-8 h-8 text-[#FFB300]" />
            News, Events & Stories
          </h1>
          <p className="text-[#004D40]/80 text-lg max-w-2xl mx-auto">
            Stay informed about GurukulCoop's latest initiatives, community programs, and inspiring member experiences.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center flex justify-center items-center gap-3">
            <Icon type="news" className="w-8 h-8 text-[#FFB300]" />
            Latest News
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((n, i) => (
              <article
                key={i}
                className="p-5 rounded-xl bg-[#FFF8E1] border-2 border-[#004D40] shadow-[0_6px_18px_rgba(0,77,64,0.15)] hover:border-[#FFB300] hover:shadow-[0_14px_40px_rgba(255,179,0,0.25)] transition transform hover:-translate-y-1"
              >
                <img src={n.img} alt={n.title} className="w-full h-48 object-cover rounded-md border-2 border-[#004D40] mb-4" />
                <h3 className="font-extrabold text-lg flex items-center gap-2">
                  <Icon type="news" className="w-5 h-5 text-[#FFB300]" /> {n.title}
                </h3>
                <p className="text-xs text-[#004D40]/70 mb-2 flex items-center gap-1">
                  <Icon type="calendar" className="w-4 h-4 text-[#004D40]" /> {n.date}
                </p>
                <p className="text-sm text-[#004D40]/80">{n.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAF3DD]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center flex justify-center items-center gap-3">
            <Icon type="event" className="w-8 h-8 text-[#FFB300]" />
            Upcoming & Recent Events
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((e, i) => (
              <article
                key={i}
                className="p-5 rounded-xl bg-[#FFF8E1] border-2 border-[#004D40] shadow-[0_6px_18px_rgba(0,77,64,0.15)] hover:border-[#FFB300] hover:shadow-[0_14px_40px_rgba(255,179,0,0.25)] transition transform hover:-translate-y-1"
              >
                <img src={e.img} alt={e.title} className="w-full h-48 object-cover rounded-md border-2 border-[#004D40] mb-4" />
                <h3 className="font-extrabold text-lg flex items-center gap-2">
                  <Icon type="event" className="w-5 h-5 text-[#FFB300]" /> {e.title}
                </h3>
                <p className="text-xs text-[#004D40]/70 mb-1 flex items-center gap-1">
                  <Icon type="calendar" className="w-4 h-4 text-[#004D40]" /> {e.date}
                </p>
                <p className="text-xs text-[#004D40]/70 mb-2 flex items-center gap-1">
                  <Icon type="location" className="w-4 h-4 text-[#004D40]" /> {e.place}
                </p>
                <p className="text-sm text-[#004D40]/80">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center flex justify-center items-center gap-3">
            <Icon type="quote" className="w-8 h-8 text-[#FFB300]" />
            Member Voices
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#FAF3DD] border-2 border-[#004D40] shadow-[0_6px_18px_rgba(0,77,64,0.15)] hover:border-[#FFB300] hover:shadow-[0_14px_40px_rgba(255,179,0,0.25)] transition transform hover:-translate-y-1"
              >
                <p className="italic text-sm mb-4 text-[#004D40]/90">"{t.msg}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#004D40] text-white flex items-center justify-center font-bold">
                    <Icon type="user" className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-[#004D40]/70">Active Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#004D40] text-[#FFF8E1] text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3 flex justify-center items-center gap-3">
            <Icon type="quote" className="w-8 h-8 text-[#FFB300]" /> Got a story to share?
          </h3>
          <p className="text-[#BDBDBD] mb-6">
            Contribute your community success story or event highlight to GurukulCoop News.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-[#FFB300] text-[#004D40] font-semibold hover:bg-[#e6a100] hover:shadow-[0_24px_80px_rgba(230,161,0,0.18)] transition transform hover:-translate-y-1"
          >
            Contact the Team
          </a>
        </div>
      </section>
    </div>
  );
}
