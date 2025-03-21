import Image from "next/image";

type BenefitItemProps = {
  title: string;
  numberImage: string;
  image: string;
  description: string;
  reverse?: boolean; // ✅ New Prop
};

const WhyItem = ({ title, numberImage, image, description, reverse = false }: BenefitItemProps) => {
  return (
    <li className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 my-10 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Left Side - Number & Text */}
      <div className="flex flex-col items-start w-full max-w-md">
        {/* Number Image - Centered */}
        <div className="w-full flex justify-center mb-3">
          <Image src={numberImage} alt={`${title} step`} width={43} height={140} />
        </div>

        {/* Title - Left Aligned */}
        <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E9038A] to-[#0A6195]">
          {title}
        </h2>

        {/* Description - Ensures Two-Line Display */}
        <p className="mt-3 text-black text-lg leading-relaxed" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
          {description}
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex-shrink-0">
        <Image src={image} alt={`${title} illustration`} width={289} height={289} />
      </div>
    </li>
  );
};

export default WhyItem;
