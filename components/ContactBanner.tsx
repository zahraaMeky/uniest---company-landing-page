import Image from 'next/image'

const ContactBanner = () => {
  return (
    <div className='w-full relative h-fit bg-[url("/contactBG.svg")] bg-cover bg-center bg-no-repeat flex flex-col gap-5 sm:gap-6 lg:gap-6 px-6 sm:px-12 lg:px-20 pb-32'>

      {/* Text Section */}
      <div className="max-w-3xl z-10 pt-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase">
          CONTACT <span className="text-[#744F9B]">US</span>
        </h3>
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#585858] mt-2">
          We’re Here to Help
        </h4>
      </div>

      <div className='max-w-lg z-10'>
        <p className="text-[#585858] text-base sm:text-lg md:text-xl">
          We’re here to assist you! Whether you have questions, need support, or want to explore investment opportunities, our team is ready to help.
        </p>
      </div>

      {/* Responsive Image Positioned Bottom-Right */}
      <div className="absolute bottom-0 right-0 lg:-right-1  z-0 
        w-[60%] sm:w-[50%] md:w-[45%] 
        lg:w-[50%] xl:w-[48%] 2xl:w-[46%]">
        <Image
          src="/contactMan.svg"
          alt="Contact Image"
          width={1076}
          height={724}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

    </div>
  )
}

export default ContactBanner
