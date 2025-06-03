"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner"
export const Newsletters = () => {
  const [email, setEmail] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();  
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });
  
      const data = await res.json();
      if (res.status === 200) {
        toast("🚀 Boom! You're now part of the Uniest", {
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
        toast("Something went wrong. Please try again later.", {
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
    setEmail("");
  };
  
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-6 md:px-8 py-10 bg-gradient-to-r from-[#9B248E]/90 via-[#4A4792]/90 to-[#2D5393]/90 rounded-xl">
      
      {/* Logo Section */}
      <div className="w-full lg:w-1/6 flex justify-center lg:justify-center items-end">
        <Image src="/uniest2.svg" width={184} height={58} alt="uniest logo" />
      </div>

      {/* Newsletter Text Section */}
      <div className="w-full lg:w-1/3 text-center lg:text-left">
        <h3 className="text-xl font-semibold text-[#FCFAED] mb-2">Newsletters</h3>
        <p className="text-[#FCFAED] text-sm leading-snug">
          Subscribe to receive the latest legal insights, industry updates,
          and expert advice directly to your inbox.
        </p>
      </div>

      {/* Email Input Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center">
        <form className="relative flex h-12 w-full max-w-md" onSubmit={onSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer h-full w-full rounded-md border-0 bg-[#FCFAED] px-4 py-2 pr-28 text-sm text-[#303030] shadow-sm placeholder-gray-400 focus:outline-none"
            placeholder="Enter Email address"
            
          />
          <button
            className="cursor-pointer absolute right-1 top-1 bottom-1 z-10 rounded-md bg-gradient-to-r from-[#9B248E] via-[#4A4792] to-[#2D5393] px-6 text-sm font-medium text-white shadow-md hover:bg-pink-700 transition"
            type="submit"
          >
            Subscribe
          </button>
        </form>
        {/* Align the paragraph to the left or right based on screen size */}
        <p className="mt-2 text-sm text-[#FCFAED] text-center lg:text-left lg:max-w-md">
          Your data is in safe hands. Check out our{"  "}
           <Link href="/privacy">
            Privacy Policy
           </Link>{"  "}
          for more info.
        </p>
      </div>
    </div>
  );
};
