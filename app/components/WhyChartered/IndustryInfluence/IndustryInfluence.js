import React from "react";
import Image from "next/image";
import Influence from "./Influence";
const IndustryInfluence = () => {
  return (
    <>
      <div className="container mx-auto lg:py-10 pt-10 flex lg:flex-row flex-col lg:px-0 px-5 justify-between items-center lg:gap-10">
        <div className="container mx-auto">
          <h3 className="text-[#ED1C24] roboto-serif-medium tracking-wide text-2xl uppercase">
            Industry
          </h3>
          <h2 className="text-4xl pt-4 md:text-6xl font-bold text-[#646464] roboto-serif-regular uppercase">
            Influence
          </h2>
          <div className="w-32 h-1 bg-[#ED1C24] my-4"></div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/why-chartered/credai.svg"
            alt="Industry Influence"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      <div className="">
        <Influence />
      </div>
    </>
  );
};

export default IndustryInfluence;
