"use client";
import React from "react";
import Image from 'next/image';
import { useForm, ValidationError } from "@formspree/react";

const WeddingForm = () => {
  const [state, handleSubmit] = useForm("xbjnvgka");
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Wedding Inquiry Form
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please fill out the form below to inquire about our wedding
            services.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="brideName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Bride’s Name*
                  </label>
                  <input
                    type="text"
                    id="brideName"
                    name="brideName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                  <ValidationError
                    prefix="BrideName"
                    field="brideName"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="groomName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Groom’s Name*
                  </label>
                  <input
                    type="text"
                    id="groomName"
                    name="groomName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                  <ValidationError
                    prefix="GroomName"
                    field="groomName"
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
                    htmlFor="weddingDates"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Wedding Dates*
                  </label>
                  <input
                    type="text"
                    id="weddingDates"
                    name="weddingDates"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="dd-mm-yyyy"
                    required
                  />
                  <ValidationError
                    prefix="WeddingDates"
                    field="weddingDates"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="weddingDestination"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Wedding Destination
                  </label>
                  <input
                    type="text"
                    id="weddingDestination"
                    name="weddingDestination"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ValidationError
                    prefix="WeddingDestination"
                    field="weddingDestination"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="weddingVenue"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Wedding Venue
                  </label>
                  <input
                    type="text"
                    id="weddingVenue"
                    name="weddingVenue"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-yellow-300 focus:border-[#F7CF4F] focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ValidationError
                    prefix="WeddingVenue"
                    field="weddingVenue"
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
                  className="flex mx-auto text-white bg-[#F7CF4F] border-1 py-2 px-8 focus:outline-none hover:bg-yellow-700
                   rounded text-lg"
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
