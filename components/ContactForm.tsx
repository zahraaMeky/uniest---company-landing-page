import Image from "next/image";

export const ContactForm = () => {
  return (
    <div className="flex justify-between items-center gap-10 px-8 py-12">
      <form className="flex-1 flex flex-col gap-6">
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
          className="mt-4 w-full font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#E9038A] to-[#0A6195] text-white px-6 py-3 rounded-sm hover:opacity-90 transition"
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

      <div>
        <Image
          src="/ContactFormImg.svg"
          width={552}
          height={690}
          alt="uniest contact form"
        />
      </div>
    </div>
  );
};
