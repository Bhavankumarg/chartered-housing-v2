"use client";
import React from "react";
import Image from "next/image";
import { team } from "@/app/utils/TeamData";

const TeamTabs = () => {
  return (
    <section className="w-full bg-white lg:hidden">
      <div className="max-w-7xl mx-auto space-y-5 px-5">
        {team.map((member) => (
          <div
            key={member.id}
            className="grid md:grid-cols-1 gap-10 items-start"
          >
            <div>
              <h3 className="text-[#ED1C25] lg:text-3xl text-2xl mb-3 font-semibold">
                {member.name}
              </h3>
              <h5 className="text-lg text-[#646464] mb-5 uppercase">
                {member.role}
              </h5>
              <Image
                src={member.img}
                alt={member.name}
                width={500}
                height={500}
                className="rounded-md object-contain grayscale brightness-105"
              />

              <p className="mb-5">{member.bio}</p>
              {member.quote && (
                <p className="text-[#ED1C25] nunito-semibold mb-5">
                  {member.quote}
                </p>
              )}
              <p className="mb-5">{member.bio2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamTabs;
