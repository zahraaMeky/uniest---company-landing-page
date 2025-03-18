import Image from 'next/image'

type BenefitItemProps = {
  title: string;
  icon: string;
  description: string;
}

const BenefitItem = ({ title, icon, description }: BenefitItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-center">
      <div>
        <Image src={icon} alt="map" width={83} height={83} />
      </div>
      <h2 className="bold-18 lg:bold-20 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5  text-black lg:mt-[10px] text-center">
        {description}
      </p>
    </li>
  )
}

export default BenefitItem; 
