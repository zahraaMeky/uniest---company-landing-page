import Image from 'next/image';

type ModernToolsCardProps = {
  title: string;
  icon: string;
  description: string[]; 
};

const ModernToolsCard = ({ title, icon, description }: ModernToolsCardProps) => {
  return (
    <li className="flex flex-col items-start">
      <div className="flex items-center gap-2">
        {/* Icon */}
        <div className="flex items-center justify-center">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>

        {/* Title */}
        <h2 className="md:text-lg text-base font-semibold capitalize text-[#2F3B59] text-left">
          {title}
        </h2>
      </div>

      {/* Description */}
      <ul className="text-sm text-left text-[#2F3B59] mt-3">
        {description.map((item, index) => (
          <li key={index} className='mb-4'>
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ModernToolsCard;
