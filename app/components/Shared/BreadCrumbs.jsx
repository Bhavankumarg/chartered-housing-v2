import React from "react";
import Link from "next/link";

const BreadCrumbs = ({ title }) => {
  return (
    <>
      <div className="lg:px-0 px-5">
      <div className="container mx-auto pt-10">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-sm text-gray-500">Home</span>
          </Link>
          <span className="text-sm text-gray-500">/</span>
          <span className="text-sm text-gray-500">{title}</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default BreadCrumbs;
