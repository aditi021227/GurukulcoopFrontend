import React from 'react';

const features = [
  {
    title: "Transparent Operations",
    desc: "Open records and fair management practices ensure trust and accountability."
  },
  {
    title: "Community Engagement",
    desc: "Programs and events that foster closer bonds among members."
  },
  {
    title: "Flexible Membership",
    desc: "Easy onboarding and various plans suitable for everyone."
  }
];

const FeaturesSection = () => (
  <section className="py-12 bg-neutral-50">
    <div className="max-w-5xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Why Join Us?</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
