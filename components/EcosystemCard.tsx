import Image from 'next/image';

type EcosystemCardProps = {
  title: string;
  icon: string;
  description: string;
};

const EcosystemCard = ({ title, icon, description }: EcosystemCardProps) => {
  return (
    <li 
      className="relative flex flex-col items-center justify-center border-t-4 border-[#93278F] px-6 py-6 cursor-pointer rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105"
    >
      {/* Icon with Background */}
      <div className="relative w-full flex items-center justify-center h-[63px] mb-4">
        {/* Background Image */}
        <Image
          src="/cardbg.svg"
          alt="card background"
          width={189}
          height={63}
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />

        {/* Icon */}
        <div className="relative z-10 w-14 h-14 flex items-center justify-center">
          <Image src={icon} alt={title} width={48} height={36} />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mt-2 capitalize text-[#18273A]">
        {title}
      </h2>

      {/* Description */}
      <p className="regular-16 text-[#5D5D5D] mt-3 text-center">
        {description}
      </p>
    </li>
  );
};

export default EcosystemCard;
