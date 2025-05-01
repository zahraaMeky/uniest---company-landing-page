import Image from 'next/image';

type EcosystemCardProps = {
  title: string;
  icon: string;
  description: string;
};

const EcosystemCard = ({ title, icon, description }: EcosystemCardProps) => {
  return (
    <li 
      className="relative flex flex-col items-center justify-start pt-15 pb-8 px-6 cursor-pointer rounded-lg shadow-lg bg-white border-t-4 border-[#93278F] transition-transform duration-300 hover:scale-105 mb-15 md:mb-0 last:mb-0"
    >
      {/* Background Image at top */}
      <Image
        src={icon}
        alt="Card Background"
        width={189}
        height={63}
        className="absolute -top-[21px] left-1/2 -translate-x-1/2 z-0" 
      />

      {/* Title */}
      <h2 className="text-xl font-bold capitalize text-[#18273A] text-center">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm lg:text-base text-[#5D5D5D] mt-3 text-center">
        {description}
      </p>
    </li>
  );
};

export default EcosystemCard;
