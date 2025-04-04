import React from 'react'

const ContactBanner = () => {
  return (
    <div className='w-full min-h-screen bg-[url("/contactBG.svg")] bg-cover bg-center sm:bg-right bg-no-repeat flex flex-col gap-5 sm:gap-6 lg:gap-6 px-6 sm:px-12 lg:px-20 pb-32'>
      <div className="text-left">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase">
          CONTACT <span className="text-[#744F9B]">US</span>
        </h3>
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#585858]">
          We’re Here to Help
        </h4>
      </div>
      <div className='max-w-md sm:max-w-sm lg:max-w-lg text-left'>
        <p className="text-[#585858] text-base sm:text-lg md:text-xl">
          We’re here to assist you! Whether you have questions, need support, or want to explore investment opportunities, our team is ready to help.
        </p> 
      </div>
    </div>
  )
}

export default ContactBanner
