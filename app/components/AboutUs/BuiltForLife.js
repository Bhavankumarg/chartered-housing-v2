import React from "react";
import Image from "next/image";

const BuiltForLife = () => {
  return (
    <>
      <div className="lg:px-0 px-5">
        <div className="container mx-auto lg:py-10 py-5">
          <div className="flex items-center justify-center gap-7 lg:flex-row flex-col-reverse">
            <div className="flex flex-col gap-7 lg:w-1/2 w-full">
              <h2 className="text-[#646464] lg:text-[30px] text-2xl">
                Built for Life, Designed for Distinction the Difference You
                Feel, Not Just See.
              </h2>
              <div className="flex flex-col gap-5">
                <p>
                  The Chartered group was established in 1983 with Finance, Hire
                  Purchase and Leasing as its core business. Chartered Leasing,
                  was one of the first leasing companies to be registered as
                  NBFC by RBI way back in 1985.
                </p>
                <p>
                  Embarked into development of Residential Apartments in 1989.
                  The first project Chartered Resorts was a trendsetter which
                  changed the then prevalent matchbox concept to aesthetic
                  residential complexes. Starting with boutique complexes, we
                  have moved over the years, to building skyscrapers, commercial
                  complexes and plotted developments. But the core passion for
                  “an eye for detail” and to construct every apartment as “our
                  own home” remains unchanged and with this we have carved a
                  special niche of our own in the competitive Bangalore market.
                </p>
                <p>
                  We have added interiors, facilities management and premium
                  construction to our portfolio over a period of time.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <video
                width={1000}
                height={1000}
                src="/videos/Chattered-Video-2.webm"
                alt="Built for Life"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltForLife;
