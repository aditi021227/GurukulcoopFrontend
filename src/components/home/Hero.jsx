import React from "react";

const FeatureIcon = ({ name, className = "w-5 h-5" }) => {
  const base = "stroke-current";
  if (name === "community") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M12 12c2.2 0 3.5-2 3.5-3.8S14.2 4.4 12 4.4 8.5 6.4 8.5 8.2 9.8 12 12 12z" />
        <path d="M4 20c0-3 3.6-5.5 8-5.5s8 2.5 8 5.5" />
      </svg>
    );
  }
  if (name === "events") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }
  if (name === "resources") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M4 19h16M4 6h16M8 6v13M16 6v13" />
      </svg>
    );
  }
  if (name === "support") {
    return (
      <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M8 14s1.5-2 4-2 4 2 4 2" />
      </svg>
    );
  }
  return (
    <svg className={`${className} ${base}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};

export default function Home() {
  const features = [
    { title: "Communities", desc: "Meetups & groups", icon: "community", imgText: "Communities" },
    { title: "Events", desc: "Workshops", icon: "events", imgText: "Events" },
    { title: "Resources", desc: "Guides & templates", icon: "resources", imgText: "Resources" },
    { title: "Support", desc: "Member assistance", icon: "support", imgText: "Support" },
  ];

  const testimonials = [
    { name: "Ravi", msg: "GurukulCoop helped me find local collaborators and learn useful skills." },
    { name: "Sunita", msg: "The events are practical and well run — I learned a lot." },
    { name: "Erika", msg: "I love the community focus — it's practical and supportive." },
  ];

  return (
    <div className="min-h-screen text-[#004D40]">
      {/* HERO */}
     <section
  className="relative text-[#ffffff]"
  style={{
    backgroundImage: "url('/images/homepage/community.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* soft tinted overlay */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

  <div className="relative max-w-6xl mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20">
      <div className="space-y-6 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug tracking-tight">
          Welcome to GurukulCoop
        </h1>
        <p className="text-[#ffffff]/80 max-w-xl">
          A community-driven cooperative focused on financial inclusion, skills sharing, and local growth.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="/membership"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#004D40] text-white font-semibold shadow-sm transition transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]/40"
          >
            Join Now
          </a>

    <a
  href="#how"
  className="inline-flex items-center px-4 py-3 rounded-full border-[3px] border-[#ffffff]/60 text-[#ffffff] hover:border-[#ffd900] hover:text-[#ffea00] transition transform hover:-translate-y-1"
>
  <svg
    className="w-4 h-4 mr-2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
  Learn more
</a>

        </div>

        <div className="flex items-center gap-6 mt-4 text-sm font-bold text-[#ffffff]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFB300] text-[#004D40] flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11z" />
                <path d="M2 20c0-3.314 4-6 10-6s10 2.686 10 6" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[#ffffff]">1000+</div>
              <div>Members</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFB300] text-[#004D40] flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 11h18" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[#ffffff]">150+</div>
              <div>Events hosted</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFB300] text-[#004D40] flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M20.5 3l-5 2-5-2-6 2.5v14.5l6-2 5 2 6-2.5V3z" />
                <circle cx="12" cy="10" r="2.2" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-[#ffffff]">20</div>
              <div>Communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* right card */}
      <div className="z-10">
        <div
          className={
            "rounded-2xl bg-[#004D40] p-6 text-[#FFF8E1] shadow-md border border-transparent " +
            "border-l-4 border-[#004D40] transition transform hover:-translate-y-1 " +
            "hover:border-[#FFB300] hover:shadow-[0_24px_80px_rgba(255,179,0,0.18)]"
          }
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFB300] text-[#004D40] font-bold">G</div>
            <div>
              <div className="font-semibold text-lg">Welcome Offer</div>
              <div className="text-sm text-[#FFF8E1]/80">Join now and access member-only resources</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="p-4 rounded-lg bg-[#FFF8E1]/10 border border-[#FFF8E1]/20 border-l-4 hover:border-[#FFB300] hover:shadow-[0_14px_54px_rgba(255,179,0,0.14)] transition transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#FFF8E1] text-[#004D40]">
                    <FeatureIcon name="community" className="w-5 h-5 stroke-current" />
                  </div>
                  <div>
                    <div className="font-semibold">Monthly Meetups</div>
                    <div className="text-sm text-[#FFF8E1]/70">Local meetups & skill-sharing</div>
                  </div>
                </div>
                <div className="text-[#FFB300] font-bold">Free</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#FFF8E1]/10 border border-[#FFF8E1]/20 border-l-4 hover:border-[#FFB300] hover:shadow-[0_14px_54px_rgba(255,179,0,0.14)] transition transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#FFF8E1] text-[#004D40]">
                    <FeatureIcon name="resources" className="w-5 h-5 stroke-current" />
                  </div>
                  <div>
                    <div className="font-semibold">Resource Library</div>
                    <div className="text-sm text-[#FFF8E1]/70">Guides, templates & recordings</div>
                  </div>
                </div>
                <div className="text-[#FFB300] font-bold">Members</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
            <a
              href="/membership"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB300] text-[#004D40] font-semibold hover:bg-[#e6a100] hover:shadow-[0_20px_80px_rgba(230,161,0,0.20)] transition transform hover:-translate-y-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FEATURES */}
      <section className="py-16 bg-white text-[#004D40]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">What We Offer</h2>
            <p className="text-[#004D40]/70 max-w-2xl mx-auto mt-3">Programs, events and resources designed to help members learn, connect and grow.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <article
                key={i}
                className="p-6 rounded-lg bg-[#FFF8E1] shadow-sm border border-l-4 border-[#004D40] hover:border-[#FFB300] hover:shadow-[0_24px_80px_rgba(255,179,0,0.18)] transition transform hover:-translate-y-1"
                aria-labelledby={`feature-${i}`}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-[#004D40] flex items-center justify-center text-white">
                      <FeatureIcon name={f.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 id={`feature-${i}`} className="font-extrabold text-lg">{f.title}</h3>
                      <p className="text-sm text-[#004D40]/70 mt-1">{f.desc}</p>
                    </div>
                  </div>
                </div>

                <img
                  src={`/images/homepage/${f.imgText.toLowerCase()}.jpg`}
                  alt={f.title}
                  className="w-full mt-4 rounded-md object-cover border border-transparent hover:border-[#FFB300] hover:shadow-[0_16px_60px_rgba(255,179,0,0.14)] transition"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 bg-[#004D40] text-[#FFF8E1]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">How It Works</h2>
          <p className="text-[#BDBDBD] max-w-2xl mx-auto mt-3">Getting involved is simple — join, participate, and contribute to community projects.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { num: 1, title: "Join", desc: "Sign up and access resources", icon: "community" },
              { num: 2, title: "Participate", desc: "Attend events and connect with peers", icon: "events" },
              { num: 3, title: "Contribute", desc: "Support local initiatives and help others grow", icon: "support" },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 bg-[#004D40]/80 rounded-lg border border-[#FFB300] border-l-4 hover:border-white hover:shadow-[0_28px_90px_rgba(255,179,0,0.2)] transition transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-full bg-[#FFB300] text-[#004D40]">
                    <FeatureIcon name={step.icon} className="w-5 h-5 stroke-current" />
                  </div>
                </div>
                <div className="text-[#FFB300] text-2xl md:text-3xl font-extrabold">{step.num}</div>
                <div className="font-extrabold mt-3 text-lg">{step.title}</div>
                <p className="text-sm text-[#BDBDBD] mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-[#FFF8E1] text-[#004D40]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">What Members Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="p-6 rounded-lg bg-[#FAF3DD] shadow-sm border border-[#004D40] border-l-4 hover:border-[#FFB300] hover:shadow-[0_24px_80px_rgba(255,179,0,0.18)] transition transform hover:-translate-y-1"
              >
                <blockquote>
                  <p className="text-sm italic">"{t.msg}"</p>
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-center gap-3">
                  <img
                    src={`/images/homepage/${t.name.toLowerCase()}.jpg`}
                    alt={t.name}
                    className="w-30 h-30 rounded-full bg-[#004D40] object-cover"
                  />
                  <div>
                    <div className="font-extrabold">{t.name}</div>
                    <div className="text-xs text-[#004D40]/70">Member since 2023</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section className="py-16 bg-[#004D40] text-[#FFF8E1]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Stay in the loop with GurukulCoop</h3>
          <p className="text-[#BDBDBD] mb-6">Join our newsletter for community updates, resources, and events.</p>

          <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full sm:w-80 px-4 py-3 rounded-full bg-[#FFF8E1] text-[#004D40] border border-[#004D40]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB300]/40"
            />
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#FFB300] text-[#004D40] font-semibold hover:bg-[#e6a100] hover:shadow-[0_28px_90px_rgba(230,161,0,0.22)] transition transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
