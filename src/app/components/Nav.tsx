"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  if (!isMounted) return null;

  return (
    <>
      <nav className="flex items-center flex-wrap bg-[#091933] p-1 pl-15 pr-15 ">
        <Link href="/" className="inline-flex items-center p-2 mr-4">
          <Image  src="/images/logo.png" alt="" className="w-20"  width={100}
            height={100}/>
          <span className="text-xl text-white font-bold tracking-wide">
            MMKEntertainment
          </span>
        </Link>
        <button
          className="inline-flex p-3 hover:bg-[#F7CF4F] rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          {active ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link href="/" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#F7CF4F] hover:text-[#353534]">
              Home
            </Link>
            <Link href="/aboutus" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-[#F7CF4F] hover:text-[#353534]">
            About Us
            </Link>
            <Link href="/services" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-[#F7CF4F] hover:text-[#353534]">
            Services
            </Link>
            <Link href="/gallery" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-[#F7CF4F] hover:text-[#353534]">
              Photo Gallery
            </Link>
            <Link href="/contact" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center  hover:bg-[#F7CF4F] hover:text-[#353534]">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
