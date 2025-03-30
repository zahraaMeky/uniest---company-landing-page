import Image from 'next/image';

type FeatureCardProps = {
  title: string;
  icon: string;
  description: string;
  variant: string;
};

const FeatureCard = ({ title, icon, description, variant }: FeatureCardProps) => {
  return (
    <li 
      className="card flex flex-col items-start border-b-4 p- cursor-pointer rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105" 
      style={{ borderBottomColor: variant }}
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
      <p className="text-sm lg:text-base text-gray-600 mt-3">
        {description}
      </p>
    </li>
  );
};

export default FeatureCard;
