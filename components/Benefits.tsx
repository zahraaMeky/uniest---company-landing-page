import { BENEFITS } from '@/constants'
import BenefitItem from './BenefitItem';



export const Benefits = () => {
  return (
    <section className="max-container padding-container relative w-full flex-col items-center justify-center py-10 pb-32  lg:py-15">
        <h2 className="text-center bold-40 lg:bold-64 text-transparent bg-clip-text text-gradient">
            Key Benefits
        </h2>
        <h2></h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3 lg:mg-20 lg:gap-20">
            {BENEFITS.map((Benefit) => (
              <BenefitItem 
                key={Benefit.title}
                title={Benefit.title} 
                icon={Benefit.icon}
                description={Benefit.description}
              />
            ))}
          </ul>
    </section>
  )
}
