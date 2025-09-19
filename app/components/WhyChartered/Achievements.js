"use client";
import React from "react";

const achievements = [
  {
    title: "NDTV PROFIT & BRAND ACADEMYAWARD - WINNER",
    desc: "Leading Residential Real Estate Development (Bangalore)",
  },
  {
    title: "CARE AWARDS BY CREDAI - WINNER",
    desc: "Chartered Veda - Best Plotted Development Karnataka",
  },
  {
    title: "CREDAI REAL ESTATE AWARD (KARNATAKA) - WINNER",
    desc: "Chartered Fireflies - Best Plotted Development Karnataka",
  },
  {
    title: "CREDAI KARNATAKA PLAQUE OF APPRECIATION",
    desc: "Awarded to our chairman Sri. Aerya Balakrishna Hegde for outstanding contribution to Realty sector.",
  },
];

const Achievements = () => {
  return (
    <section className="bg-black text-white py-20 lg:px-0 px-5">
      {/* Heading */}
      <div className="container mx-auto">
        <h3 className="text-[#ED1C24] roboto-serif-medium tracking-wide text-2xl uppercase">
          SOME OF OUR
        </h3>
        <h2 className="text-4xl pt-4 md:text-6xl font-bold text-[#fff] roboto-serif-regular uppercase">
          ACHIEVEMENTS
        </h2>
        <div className="w-32 h-1 bg-[#fff] my-4"></div>

        <div className="text-left mb-12">
          <h6 className="max-w-2xl leading-relaxed">
            Our work and our customers’ delight have been our biggest
            inspiration. But when the journey spans 30 years, rewards are bound
            to come your way. Ours have come in many ways, such as the multiple
            awards we’ve won over the years.
          </h6>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`relative ${idx < 3 ? "lg:border-r lg:border-b-0 border-b lg:pb-0 pb-5" : ""} border-[#ED1C25]`}
            >
              <h3 className="text-[#ED1C25] font-semibold mb-3 lg:text-lg text-2xl">
                {item.title}
              </h3>
              <h5 className="lg:text-base text-xl">{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
