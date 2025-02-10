import Image from "next/image";
import React from "react";
// import { FaLocationDot, FaFacebookF, , FaHome } from "react-icons/fa";
import { FaFacebookF , FaInstagram , FaHome} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";
// import { ubuntu } from "@/app/font";

export default function Footer() {
  return (
    <div className="bg-primary-main/10  md:p-10 border-t-primary-main border-t">
      <div className="lg:flex lg:justify-between items-center sm:grid sm:grid-cols-2 grid-cols-2 lg:py-20 max-w-7xl mx-auto xl:p-0 max-md:p-6" style={{ fontFamily: `'Prata', serif` }}>
        {/* Logo & Slogan Section */}
        <div className="lg:col-span-1 col-span-2 grid items-start justify-items-center">
          <div className="relative h-24 w-36 cursor-pointer">
            {/* <Image src="/assests/images/homeImage/01.png" alt="No Preview" fill className="object-cover scale-100" /> */}
          </div>
          <div className={"md:text-3xl sm:text-2xl text-xl text-center font-bold pb-3 "}>
            <span className="text-primary-main">We build the foundation</span> <br /> for your dreams
          </div>
          <div className="lg:flex gap-5 md:mt-5 hidden">
            <FaFacebookF className="text-xl bg-primary-main  h-10 w-10 p-2 rounded-xl" />
            <CiTwitter className="text-xl bg-primary-main  h-10 w-10 p-2 rounded-xl" />
            <FaInstagram className="text-xl bg-primary-main  h-10 w-10 p-2 rounded-xl" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="md:grid gap-3 md:text-lg text-sm hidden">
          <h1 className="text-2xl md:my-3 mt-3 text-primary-main capitalize">Quick Links</h1>
          <Link href="/" className="font-medium hover:text-primary-main flex gap-5 items-center">
             Home
          </Link>
          <Link href="/products" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Products
          </Link>
          <Link href="/blogs" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Our blogs
          </Link>
          <Link href="/aboutUs" className="font-medium hover:text-primary-main flex gap-5 items-center">
            About us
          </Link>
          <Link href="/contactUs" className="font-medium hover:text-primary-main flex gap-5 items-center">
            Contact Us
          </Link>
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-3 font-medium col-span-1 items-start xl:w-[30%]">
          <h1 className="text-xl sm:text-2xl md:my-3 mt-3 text-primary-main">Address Company</h1>
          <div className="flex items-center gap-3 md:text-lg text-sm w-full">
            <FaLocationDot className="md:text-2xl text-xl text-primary-main" />
            <Link href="https://www.google.com/maps/search/MBBL+COLLEGE+ROAD,+CHANDANI+CHOWK,+MUZAFFARPUR-842002/" className="max-sm:w-[80%] xl:w-full hover:text-primary-main capitalize">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus 
            </Link>
          </div>
          <div className="flex items-center gap-3 md:text-lg text-base md:w-[80%]">
            <IoCall className="md:text-2xl text-xl text-primary-main" />
            <p className="grid">
              <Link href="tel:9876543210" className="hover:text-primary-main">1234 567 890</Link>
              <Link href="tel:9876543210" className="hover:text-primary-main">1234 567 890</Link>
            </p>
          </div>
          <div className="flex items-center gap-3 md:text-lg text-sm md:w-[80%]">
            <MdEmail className="md:text-2xl text-xl text-primary-main" />
            <p className="grid">
              <Link href="mailto:xyz123@gmail.com" className="hover:text-primary-main">xyz123@gmail.com</Link>
              <Link href="mailto:xyz123@gmail.com" className="hover:text-primary-main">abcdef@gmail.com</Link>
            </p>
          </div>
        </div>

        {/* Mobile Social Icons Section */}
        <div className="lg:hidden gap-5 md:mt-10 flex mt-5 max-lg:justify-center">
          <FaFacebookF className="text-xl bg-primary-main  h-10 w-10 p-2 rounded-xl" />
          <CiTwitter className="text-xl bg-primary-main  h-10 w-10 p-2 rounded-xl" />
          <FaInstagram className="text-xl bg-primary-main  h-10 w-10 p-2 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
