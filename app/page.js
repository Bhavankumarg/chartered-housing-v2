import React from "react";
import Header from "./components/Shared/Header";
import Banner from "./components/Shared/Banner";

const page = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        <Header />
      </div>
    </>
  );
};

export default page;
