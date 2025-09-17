import React from "react";
import Banner from "../Shared/Banner";
const AboutUsBanner = () => {
  return (
    <div>
      <Banner
        backgroundImage="/about-us/banner.png"
        mobileBackgroundImage="/about-us/mobile-banner.png"
        logo="/logo.png"
        logoWidth={70}
        logoHeight={70}
        showLogo={true}
        sectionTitle="ABOUT US"
        title="A Legacy of Trust"
        subtitle="A Future Built with Purpose"
        textPosition="bottom-left"
        overlayOpacity={0.2}
      />
    </div>
  );
};

export default AboutUsBanner;
