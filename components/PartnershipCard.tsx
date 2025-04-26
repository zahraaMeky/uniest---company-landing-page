import Image from 'next/image';

type PartnershipCardProps = {
  title: string;
  icon: string;
  description: string;

};

const PartnershipCard = ({ title, icon, description }: PartnershipCardProps) => {
  return (
    <li 
      className="bg-gradient-multiColor px-6 py-4 flex flex-col items-start cursor-pointer rounded-lg shadow-lg text-white transition-transform duration-300 hover:scale-105" 
  
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center">
        <Image src={icon} alt={title} width={55} height={58} />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mt-4 capitalize">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm lg:text-base mt-3 text-left">
        {description}
      </p>
    </li>
  );
};

export default PartnershipCard;
