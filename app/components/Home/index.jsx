import React from "react";
import Banner from "../Shared/Banner";
import Content from "./Content";

const index = () => {
  return (
    <>
      <div className="container mx-auto">
        <Banner
          backgroundImage={null}
          mobileBackgroundImage={null}
          title={false}
          subtitle={false}
          textPosition="bottom-left"
          overlayOpacity={0.2}
          showDivide={false}
          logo="/logo.png"
          logoWidth={70}
          logoHeight={70}
          useVideo={true}
          backgroundVideo={"/videos/Chattered-Banner.webm"}
          mobileBackgroundVideo={"/videos/Chattered-Banner-Mobile.webm"}
        />
      </div>
      <Content />
    </>
  );
};

export default index;
