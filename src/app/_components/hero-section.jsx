/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = ({ name, img }) => {
  return (
    <>
      <div className="relative md:h-[20vw] max-md:h-[30vh] text-primary-main overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products1.jpg"
            fill
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-[#7979797a]" />
        </div>
        <div className="relative max-w-6xl mx-auto z-10 flex flex-col justify-center md:items-start h-full text-center  max-md:px-4">
          <div className="font-medium text-center ">
            <p className="text-primary-main md:text-[60px] max-md:text-[34px] drop-shadow-2xl">
              {name}
            </p>
            <div className="flex max-md:justify-center items-center gap-2">
              <Link href="/">
                <h1 className="md:text-2xl max-md:text-xl text-[#FFF]">
                  Home
                </h1>
              </Link>
              <p className="md:text-2xl max-md:text-xl">{` / `}</p>
              <h1 className="md:text-2xl max-md:text-xl text-[#FFF]">
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
