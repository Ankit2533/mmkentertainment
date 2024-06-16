"use client";
import React from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import "/styles/font.css";
import '/styles/servicedetails.css';

const WeddingForm = () => {
  const [state, handleSubmit] = useForm("xjvnqyae");
  const phoneNumberRegex = /^\d+(-\d+)*$/;

  const validatePhoneNumber = (value: string) => {
    if (!phoneNumberRegex.test(value)) {
      return "Please enter a valid phone number (only digits and hyphens are allowed)";
    }
  };

  if (state.succeeded) {
    return (
      <section className="text-gray-600 body-font background-section-contact">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="w-48 h-48 mb-10 rounded-full overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="MMKEntertainment Logo"
              width={192}
              height={192}
              objectFit="cover"
            />
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 para-text">Thank you for your inquiry!</h1>
            <p className="mb-8 leading-relaxed para-text">We appreciate your interest in MMKEntertainment. Our team will review your inquiry and get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font relative background-section-contact">
      <div className="w-full pt-5 flex justify-center items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium title-font mb-4 text-center golden-text">
          Get In Touch
        </h1>
      </div>
      <div className="container px-5 md:px-20 py-24 mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/3 md:w-1/2 text-lg sm:text-lg md:text-xl rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 items-center lg:items-start">
          <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl mb-1 font-medium title-font para-text-bold">Address</h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center lg:text-left para-text">
            Rock Garden, Off Link Road Kandarpada Near Lime and Spice Restaurant Dahisar West, Mumbai, Maharashtra 400068
          </p>
          <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl mb-1 font-medium title-font para-text-bold">Contact</h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center lg:text-left para-text">
            <a href="tel:+919322404922" className="text-gray-600 hover:text-yellow-500">+91 9322404922</a> / <a href="tel:+917666655513" className="text-gray-600 hover:text-yellow-500">+91 7666655513</a>
          </p>
          <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl mb-1 font-medium title-font para-text-bold">Email</h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-center lg:text-left para-text">
            <a href="mailto:contact@mmkentertainment.com" className="text-gray-600 hover:text-yellow-500">contact@mmkentertainment.com</a>
          </p>
          <h2 className="text-gray-900 text-xl sm:text-2xl md:text-3xl mb-1 font-medium title-font para-text-bold">Social Media</h2>
          <div className="flex space-x-5 pt-2">
            <a
              href="https://www.instagram.com/mmkentertainment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/social/instagram_logo_icon.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.facebook.com/mishalkalyani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/social/facebook_logo_icon.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@mmkentertainment5334"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/social/youtube_logo_icon.png"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg para-text">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-lg sm:text-lg md:text-xl text-gray-600"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base sm:text-lg md:text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-lg sm:text-lg md:text-xl text-gray-600"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base sm:text-lg md:text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="phoneNumber"
                    className="leading-7 text-lg sm:text-lg md:text-xl text-gray-600"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base sm:text-lg md:text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    onBlur={(e) => {
                      e.target.setCustomValidity(
                        validatePhoneNumber(e.target.value) || ""
                      );
                    }}
                  />
                  <ValidationError
                    prefix="PhoneNumber"
                    field="phoneNumber"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="eventDate"
                    className="leading-7 text-lg sm:text-lg md:text-xl text-gray-600"
                  >
                    Event Date*
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base sm:text-lg md:text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                  <ValidationError
                    prefix="EventDate"
                    field="eventDate"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="about"
                    className="leading-7 text-lg sm:text-lg md:text-xl text-gray-600"
                  >
                    Tell us about your event
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base sm:text-lg md:text-xl outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  />
                  <ValidationError
                    prefix="About"
                    field="about"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-[#F7CF4F] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-700 rounded text-lg sm:text-xl md:text-2xl"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .lg\\:items-start {
            align-items: center !important;
          }
          .lg\\:text-left {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WeddingForm;
