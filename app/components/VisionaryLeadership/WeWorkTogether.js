"use client";
import React from "react";
import Image from "next/image";

const WeWorkTogether = () => {
  return (
    <section className="w-full bg-white lg:py-16 py-5">
      <div className="container lg:px-0 px-5 mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-7xl font-bold text-[#ED1C25] mb-6 leading-snug roboto-serif-medium">
            “We Work Together, <br /> We Innovate Together”
          </h2>
          <p className="text-[#646464] max-w-md mb-8">
            Meet our professional team member who’re dedicating themselves to
            create innovation to help people through pushing limitation of the
            technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeWorkTogether;
