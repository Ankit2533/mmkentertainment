"use client";
import React from "react";
import Image from 'next/image';
import { useForm, ValidationError } from "@formspree/react";
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

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
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="w-48 h-48 mb-10 rounded-full overflow-hidden">
            <Image
              src="/images/logo.png" // Replace with the actual path to your company logo image
              alt="MMKEntertainment Logo"
              width={192}
              height={192}
              objectFit="cover"
            />
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Thank you for your inquiry!</h1>
            <p className="mb-8 leading-relaxed">We appreciate your interest in MMKEntertainment. Our team will review your inquiry and get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-20 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Address</h2>
          <p className="leading-relaxed mb-5 text-gray-600 capitalize">
            Rock Garden, Off Link Road Kandarpada Near Lime And Spice Restaurant Dahisar West, Mumbai, Maharashtra 400068
          </p>
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            <a href="tel:+919322404922" className="text-gray-600 hover:text-yellow-500">+91 9322404922</a> / <a href="tel:+917666655513" className="text-gray-600 hover:text-yellow-500">+91 7666655513</a>
          </p>
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Email</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            <a href="mailto:contact@mmkentertainment.com" className="text-gray-600 hover:text-yellow-500">contact@mmkentertainment.com</a>
          </p>
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Social Media</h2>
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/mmkentertainment" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/mishalkalyani" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.youtube.com/@mmkentertainment5334" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="w-full mb-12">
            <h1 className="text-2xl font-bold title-font mb-4 p text-gray-900">
              Get In Touch
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="leading-7 text-sm text-gray-600"
                  >
                    Event Date*
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="leading-7 text-sm text-gray-600"
                  >
                    Tell us about you two!
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
                  className="flex mx-auto text-white bg-[#F7CF4F] border-0 py-2 px-8 focus:outline-none hover:bg-yellow-700 rounded text-lg"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WeddingForm;
