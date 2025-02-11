import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary-main/10 md:p-10 border-t-primary-main border-t">
      <div
        className="lg:flex lg:justify-between items-center sm:grid sm:grid-cols-2 grid-cols-2 
        lg:py-20 max-w-7xl mx-auto xl:p-0 max-md:p-6"
        style={{ fontFamily: `'Prata', serif` }}
      >
        {/* Logo & Slogan Section */}
        <div className="lg:col-span-1 col-span-2 grid items-start justify-items-center">
          <div className="relative h-24 w-36 cursor-pointer">
            <img src="/assests/images/homeImage/01.png" alt="No Preview" className="object-cover scale-100" />
          </div>
          <div className={"md:text-3xl sm:text-2xl text-xl text-center font-bold pb-3 "}>
            <span className="text-primary-main">Quality you can trust</span> <br /> Products you can rely on.
          </div>
          <div className="lg:flex gap-5 md:mt-5 hidden">
            <FaFacebookF className="text-xl bg-primary-main h-10 w-10 p-2 rounded-xl" />
            <CiTwitter className="text-xl bg-primary-main h-10 w-10 p-2 rounded-xl" />
            <FaInstagram className="text-xl bg-primary-main h-10 w-10 p-2 rounded-xl" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="md:grid gap-3 md:text-lg text-sm hidden">
          <h1 className="text-2xl md:my-3 mt-3 text-primary-main capitalize">Quick Links</h1>
          <Link href="/" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Home
          </Link>
          <Link href="/products" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Our Products
          </Link>
          
          <Link href="/blogs" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Our Blogs
          </Link>
          <Link href="/aboutUs" className="font-medium hover:text-primary-main flex gap-5 items-center">
            About Us
          </Link>
          <Link href="/contactUs" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Contact Us
          </Link>
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-3 font-medium col-span-1 items-start xl:w-[30%]">
          <h1 className="text-xl sm:text-2xl md:my-3 mt-3 text-primary-main">Company Address</h1>
          <div className="flex items-center gap-3 md:text-lg text-sm w-full">
            <FaLocationDot className="md:text-2xl text-xl text-primary-main" />
            <Link
              href="https://www.google.com/maps/search/Kosiyanada,+Merta+Road+Marg,+Merta+City,+Nagour,+Rajasthan/"
              className="max-sm:w-[80%] xl:w-full hover:text-primary-main capitalize"
            >
              HANUMANT Warehouse, Kosiyanada, Merta Road Marg, Merta City 341510, District Nagour, Rajasthan, India.
            </Link>
          </div>
          <div className="flex items-center gap-3 md:text-lg text-base md:w-[80%]">
            <IoCall className="md:text-2xl text-xl text-primary-main" />
            <p className="grid">
              <Link href="tel:+919XXXXXXXXX" className="hover:text-primary-main">
                +91 XXXXXXXXXX
              </Link>
              {/* <Link href="tel:+919XXXXXXXXX" className="hover:text-primary-main">
                +91 XXXXXXXXXX
              </Link> */}
            </p>
          </div>
          <div className="flex items-center gap-3 md:text-lg text-sm md:w-[80%]">
            <MdEmail className="md:text-2xl text-xl text-primary-main" />
            <p className="grid">
              <Link href="mailto:info@hanumantwarehouse.com" className="hover:text-primary-main">
                info@hanumantwarehouse.com
              </Link>
              <Link href="mailto:support@hanumantwarehouse.com" className="hover:text-primary-main">
                support@hanumantwarehouse.com
              </Link>
            </p>
          </div>
        </div>

        {/* Mobile Social Icons Section */}
        <div className="lg:hidden gap-5 md:mt-10 flex mt-5 max-lg:justify-center">
          <FaFacebookF className="text-xl bg-primary-main h-10 w-10 p-2 rounded-xl" />
          <CiTwitter className="text-xl bg-primary-main h-10 w-10 p-2 rounded-xl" />
          <FaInstagram className="text-xl bg-primary-main h-10 w-10 p-2 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
