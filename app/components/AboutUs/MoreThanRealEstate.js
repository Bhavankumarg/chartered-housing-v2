"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    icon: "/about-us/icons/apartment.svg",
    label: "Apartments",
    width: 50,
    height: 50,
  },
  { icon: "/about-us/icons/plot.svg", label: "Plots", width: 50, height: 50 },
  {
    icon: "/about-us/icons/villas.svg",
    label: "Row Villas",
    width: 70,
    height: 70,
  },
  {
    icon: "/about-us/icons/commercial.svg",
    label: "Commercial",
    width: 60,
    height: 60,
  },
];

const MoreThanRealEstate = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full px-6 py-10 md:py-24 bg-white">
      {/* Heading */}
      <div className="container mx-auto">
        <h3 className="text-[#ED1C24] roboto-serif-medium tracking-wide text-2xl">
          MORE THAN
        </h3>
        <h2 className="text-4xl pt-4 md:text-6xl font-bold text-[#646464] roboto-serif-regular">
          JUST REAL ESTATE
        </h2>
        <div className="w-28 h-1 bg-[#ED1C24] my-4"></div>
      </div>

      {/* Infinite Carousel */}
      <div className="lg:mt-12 flex md:gap-10 lg:gap-28 flex-col lg:flex-row justify-center md:justify-end container mx-auto">
        <div>
          <h5 className="text-[#646464] lg:text-3xl text-2xl max-w-5xl pt-5">
            Chartered today delivers a <br /> diverse portfolio — including:
          </h5>
        </div>
        <div
          className="relative overflow-hidden w-full md:w-2/3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: isPaused ? 0 : ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {/* Double items for seamless loop */}
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 items-center text-center min-w-[150px] mr-12 lg:mt-10 mt-5"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={item.width}
                  height={item.height}
                />
                <h6 className="text-[#646464] text-md mt-2">{item.label}</h6>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MoreThanRealEstate;
