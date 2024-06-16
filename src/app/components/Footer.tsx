import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <section aria-label="Site Footer" className=" bg-[#091933]  text-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-white flex justify-center items-center">
                <Image 
                  src="/images/logo.png"
                  className="w-20"
                  alt="mmkentertainment-logo"
                  width={100}
                  height={100}
                />
              </div>
              <ul className="flex flex-col gap-6 mt-8">
                <li>
                  <div className="flex items-center">
                    <MdOutlineMailOutline className="text-white w-6 h-6 mr-2" />
                    <a
                      href="mailto:contact@mmkentertainment.com"
                      className="text-white"
                    >
                      contact@mmkentertainment.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <LuPhoneCall className="text-white w-6 h-6 mr-2" />
                    <a href="tel:+917666655513" className="text-white">
                       +91 9322404922 / +91 7666655513
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="flex gap-6 mt-8">
                <li>
                  <div className="flex items-center">
                    <a
                      href="https://www.instagram.com/mmkentertainment"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white transition-colors duration-300 relative"
                    >
                      <div className="rounded-full p-1 bg-[#FCC200] hover:bg-[#ffffff] transition-colors duration-300">
                        <PiInstagramLogo className="w-6 h-6 text-white hover:text-[#091933] transition-colors duration-300" />
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <a
                      href="https://www.facebook.com/mishalkalyani"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-800 relative"
                    >
                      <div className="rounded-full p-1 bg-[#FCC200] hover:bg-[#ffffff] transition-colors duration-300">
                        <PiFacebookLogo className="w-6 h-6 text-white hover:text-[#091933] transition-colors duration-300" />
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <a
                      href="https://www.youtube.com/@mmkentertainment5334"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-800 relative"
                    >
                      <div className="rounded-full p-1 bg-[#FCC200] hover:bg-[#ffffff] transition-colors duration-300">
                        <PiYoutubeLogoLight className="w-6 h-6 text-white hover:text-[#091933] transition-colors duration-300" />
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-bold">Services</p>
                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="text-white transition hover:opacity-75"
                      >
                        Wedding Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white transition hover:opacity-75"
                      >
                        Personal Celebrations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white transition hover:opacity-75"
                      >
                        Social Get-together
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white transition hover:opacity-75"
                      >
                        Birthday Parties
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-bold">Company</p>
                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        href="/about"
                        className="text-white transition hover:opacity-75"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-bold">Helpful Links</p>
                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        href="/contact"
                        className="text-white transition hover:opacity-75"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-white transition hover:opacity-75"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-bold ">Legal</p>
                <nav aria-label="Footer Navigation - Legal" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link
                        href="/disclaimer"
                        className="text-white transition hover:opacity-75"
                      >
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="text-white transition hover:opacity-75"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        className="text-white transition hover:opacity-75"
                      >
                        Terms and conditions
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">© 2024 MMKEntertainment</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
