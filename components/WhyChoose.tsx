import Image from 'next/image';
import React from 'react';
import WhyItem from './WhyItem';
import { WHYCHOOSE } from '@/constants';

export const WhyChoose = () => {
  return (
    <section className="max-container padding-container relative w-full flex-col items-center justify-start pb-32">
      <Image
        src="/QuestionmarkIcon.svg"
        alt="QuestionmarkIcon"
        width={417}
        height={222}
        className="block mx-auto"
      />
      <h2 className="text-center bold-40 lg:bold-64 text-transparent bg-clip-text bg-gradient-to-r from-[#E3058A] to-[#0A6195]">
        Why Choose UNIEST
      </h2>
      <h3 className="text-black regular-20 text-center mt-5 mb-2">
        A Smarter Way to Invest and Grow
      </h3>

      {/* Alternating Layout */}
      <ul className="flex flex-col items-center">
        {WHYCHOOSE.map((choose, index) => (
          <WhyItem
            key={choose.number}
            title={choose.title}
            numberImage={choose.number}
            image={choose.image}
            description={choose.description}
            reverse={index % 2 !== 0} // Reverse order for even items
          />
        ))}
      </ul>
    </section>
  );
};
