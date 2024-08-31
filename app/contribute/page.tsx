"use client";

import React from "react";
import Image from "next/image";

import { Geminid, Star } from "@/components/shapes";
import { AnimatedTooltipPreview } from "@/components/ui";

import Setup from "./(components)/setup";

const Contribute = () => {
  return (
    <>
      <Star />
      <Geminid />
      <AnimatedTooltipPreview />
      <div className="w-full rounded-md flex flex-col md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="p-4 max-w-7xl mx-auto relative z-10  w-full flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 slide-in-left">
            Contribute
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto slide-in-right">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
          <Image
            className="mt-10"
            src="/code.svg"
            alt="Earth"
            width={150}
            height={150}
          />
        </div>
        <div className="p-1 mx-auto relative z-10 text-left max-w-[380px] md:max-w-[1000px] md:p-4 ">
          <Setup />
        </div>
      </div>
    </>
  );
};

export default Contribute;
