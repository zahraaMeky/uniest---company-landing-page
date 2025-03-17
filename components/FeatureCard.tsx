import Image from 'next/image'

type FeatureCardProps = {
  title: string;
  icon: string;
  description: string;
  variant: string;
}

const FeatureCard = ({ title, icon, description,variant }: FeatureCardProps) => {
  return (
    <li 
      className="card flex w-full flex-1 flex-col items-start border-b-4" 
      style={{ borderBottomColor: variant }} 
    >
      <div>
        <Image src={icon} alt="map" width={55.02} height={58.73} />
      </div>
      <h2 className="bold-16 lg:bold-20 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-14 mt-5  text-[#6D6D6D] lg:mt-[10px]">
        {description}
      </p>
    </li>
  )
}

export default FeatureCard; 
