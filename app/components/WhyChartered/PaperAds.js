import React from "react";
import Image from "next/image";
const PaperAds = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <Image
          src="/why-chartered/paper.png"
          alt="Paper Ads"
          width={1000}
          height={1000}
          className="w-full h-full object-cover hidden md:block"
        />
        <Image
          src="/why-chartered/mobile-ads.png"
          alt="Paper Ads"
          width={1000}
          height={1000}
          className="w-full h-full object-cover block md:hidden"
        />
      </div>
    </>
  );
};

export default PaperAds;
