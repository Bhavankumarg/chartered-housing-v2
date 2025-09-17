"use client";
import Image from "next/image";
import Button from "../Shared/Button";

export default function LeadershipSection() {
  return (
    <>
      <div>
        <div className="w-full">
          <video
            width={1000}
            height={1000}
            src="/videos/Brand-Essence-Video.webm"
            alt="Built for Life"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover lg:block hidden"
          />
          <video
            width={1000}
            height={1000}
            src="/videos/Brand-Essence-Video-mobile.webm"
            alt="Built for Life"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover lg:hidden block"
          />
        </div>
        <section
          className="relative bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: "url('/about-us/visionary.png')" }} // replace with your bg image
        >
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

          <div className="relative max-w-7xl mx-auto px-5 lg:px-12 pt-10 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-end">
            {/* Left Content */}
            <div>
              <h4 className="text-red-600 font-semibold roboto-serif-regular text-xl lg:text-2xl">
                VISIONARY
              </h4>
              <h1 className="text-4xl lg:text-5xl font-bold roboto-serif-regular pt-5">
                LEADERSHIP
              </h1>
              <div className="w-28 h-1 bg-white my-3"></div>
              <h2 className="text-2xl md:text-4xl font-semibold pt-5">
                Mr. A. Balakrishna Hegde
              </h2>
              <h6 className="text-white uppercase text-lg mb-4">
                FOUNDER & CHAIRMAN
              </h6>
              <h6 className="text-white mb-6 max-w-lg leading-relaxed text-lg">
                Guided by clarity and purpose, Mr. Hegde brings decades of
                experience and a hands-on approach to creating spaces defined by
                integrity, quality, and lasting value.
              </h6>
              <Button href="/about-us/leadership">Meet our Leadership</Button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/about-us/abh.png" // replace with your person image (transparent background preferred)
                alt="Mr. A. Balakrishna Hegde"
                width={800}
                height={600}
                className="object-contain z-10 lg:mt-40"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
