"use client";
import { useState } from "react";
import Image from "next/image";

export const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4 md:px-8 py-12">
      {/* Image on top for sm/md, right side for lg */}
      <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 lg:mt-5">
        <Image
          src="/ContactFormImg.svg"
          width={552}
          height={690}
          alt="Contact Form Image"
          className="max-w-full h-auto"
        />
      </div>

      {/* Form below image on sm/md, left side on lg */}
      <form className="w-full lg:w-1/2 max-w-xl flex flex-col gap-4 order-2 lg:order-1 items-center">
        {/* Full Name input */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm shadow-sm"
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm shadow-sm"
          />
        </div>

        {/* Phone number input with Oman flag and country code */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Phone Number</label>
          <div className="flex items-center border border-[#E5E7EB] rounded-sm shadow-sm">
            {/* Flag and Country Code for Oman */}
            <div className="flex items-center p-3 bg-white border-none rounded-l-sm">
              <Image
                src="/OmanFlag.svg" 
                alt="Oman Flag"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-medium text-sm">+968</span>
            </div>

            {/* Phone number input */}
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-r-sm"
            />
          </div>
        </div>

        {/* Company name input */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Company Name</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm shadow-sm"
          />
        </div>

        {/* Inquiry textarea */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Inquiry</label>
          <textarea
            placeholder="Write your message here"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm resize-none min-h-[120px] shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 w-full font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#9B248E] to-[#2D5393] via-[#4A4792] text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
        >
          Send Message
          <Image
            src="/sendIcon.svg"
            width={20}
            height={20}
            alt="send icon"
          />
        </button>
      </form>
    </div>
  );
};
