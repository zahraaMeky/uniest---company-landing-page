import Image from 'next/image';
import React from 'react';
import WhyItem from './WhyItem';
import { WHYCHOOSE } from '@/constants';

export const WhyChoose = () => {
  return (
    <section className="max-container padding-container relative w-full flex flex-col items-center justify-start py-5  lg:py-10 ">
      {/* Responsive Image */}
      <div className="w-52 sm:w-64 md:w-80 lg:w-[417px] mx-auto">
        <Image
          src="/QuestionmarkIcon.svg"
          alt="QuestionmarkIcon"
          width={417}
          height={222}
          className="w-full h-auto"
        />
      </div>

      {/* Responsive Title */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient">
        Why Choose UNIEST
      </h2>

      {/* Subtitle */}
      <h3 className="text-black text-sm lg:text-[22px] md:text-xl text-center mt-4 mb-6">
        A Smarter Way to Invest and Grow
      </h3>

      {/* Alternating Responsive Layout */}
      <ul className="flex flex-col items-center w-full max-w-5xl px-4 md:px-8 lg:px-12">
        {WHYCHOOSE.map((choose, index) => (
          <WhyItem
            key={choose.number}
            title={choose.title}
            numberImage={choose.number}
            image={choose.image}
            description={choose.description}
            reverse={index % 2 !== 0} // Reverse layout for alternating items
          />
        ))}
      </ul>
    </section>
  );
};
