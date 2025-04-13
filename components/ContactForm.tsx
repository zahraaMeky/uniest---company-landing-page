"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { toast } from "sonner"

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // console.log('Data from client', name, email, phoneNumber, company, message);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          company,
          message,
        }),
      });
  
      const data = await res.json();
      if (res.status === 200) {
        toast("Your message has been sent successfully!", {
          position: "top-center", // Change position
          style: {
            background: "linear-gradient(to right, #E9038A, #0A6195)", // Gradient background
            color: "#fff", // White text color
            fontSize: "16px", // Custom font size
            borderRadius: "8px", // Rounded corners
            padding: "12px", // Padding
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: add shadow
          },
        });
        clearForm(); 
      }
      if (res.status === 500) {
        toast("Your message has failed to send.", {
          position: "top-center", // Change position
          style: {
            background: "linear-gradient(to right, #E9038A, #0A6195)", // Gradient background
            color: "#fff", // White text color
            fontSize: "16px", // Custom font size
            borderRadius: "8px", // Rounded corners
            padding: "12px", // Padding
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: add shadow
          },
        });
      }
      // console.log('Response from server:', data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCompany("");
    setMessage("");
  };
  
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
      <form  onSubmit={onSubmit}
        className="w-full lg:w-1/2 max-w-xl flex flex-col gap-4 order-2 lg:order-1 items-center">
        {/* Full Name input */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Full Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Full Name"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm shadow-sm"
          />
        </div>

        {/* Email input */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Email Address</label>
          <input
           required
           value={email}
           onChange={(e) => setEmail(e.target.value)}
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
              required
              pattern="\d{8}"
              title="Please enter exactly 8 digits"
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
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            placeholder="Enter Company Name"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm shadow-sm"
          />
        </div>

        {/* Inquiry textarea */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-black font-medium text-base">Inquiry</label>
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Write your message here"
            className="w-full border border-[#E5E7EB] px-4 py-3 rounded-sm resize-none min-h-[120px] shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="cursor-pointer  mt-2 w-full font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#9B248E] to-[#2D5393] via-[#4A4792] text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
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
