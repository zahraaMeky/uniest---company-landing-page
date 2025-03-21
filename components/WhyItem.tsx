import Image from 'next/image'

type BenefitItemProps = {
  title: string;
  numberImage: string;  // Renamed for clarity
  image: string;
  description: string;
};

const WhyItem = ({ title, numberImage, image, description }: BenefitItemProps) => {
  return (
    <li className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 my-15">
      {/* Left Side - Number & Text */}
      <div className="flex flex-col items-center">
        <Image src={numberImage} alt={`${title} step`} width={43} height={140} />
        
        <h2 className="bold-18 lg:bold-32 mt-5 capitalize text-transparent bg-clip-text bg-gradient">
          {title}
        </h2>
        
        <p className="regular-20 mt-5 text-black lg:mt-[10px] line-clamp-2">
          {description}
        </p>
      </div>

      {/* Right Side - Image */}
      <div>
        <Image src={image} alt={`${title} illustration`} width={289} height={289} />
      </div>
    </li>
  );
};

export default WhyItem;
