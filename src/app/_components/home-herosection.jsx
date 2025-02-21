import Link from "next/link";
import React from "react";

const HomeHerosection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen">
      {/* Background Image */}
      <img
        alt="Various spices in bowls"
        className="w-full h-full object-cover"
        src="https://storage.googleapis.com/a1aa/image/tIepk7f6n3niAgf07uDsL4C-dG-PgcIchqz3-6qh2sQ.jpg"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex  items-center  px-6 md:px-12 lg:px-24">
        <div className="flex flex-col justify-center items-start text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-main mb-4">
          PREMIUM QUALITY SPICES
        </h1>
        <p className="text-heaing-main text-sm sm:text-lg md:text-xl lg:text-2xl">
          Exported to 20+ Countries
        </p>
        <p className="text-heaing-main text-sm sm:text-lg md:text-xl lg:text-2xl">
          Best-in-Class Processing & Packaging
        </p>
        <p className="text-heaing-main text-sm sm:text-lg md:text-xl lg:text-2xl mb-6">
          Trusted by Global Clients
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <Link
            className="bg-primary-main text-heaing-main text-sm md:text-lg px-5 py-2 rounded-full hover:bg-secondary-main transition-all duration-300"
            href="/contect-us"
          >
            CONTACT US
          </Link>
          <Link
            className="text-heaing-main text-sm md:text-lg px-5 py-2 rounded-full border border-heaing-main hover:bg-heaing-main hover:text-primary-main transition-all duration-300"
            href="/about-us"
          >
            Learn More
          </Link>
        </div>

        </div>
      {/* <div className="hidden md:block  bg-color-main  h-96"></div> */}
      </div>

      {/* Decorative Box */}
    </section>
  );
};

export default HomeHerosection;
