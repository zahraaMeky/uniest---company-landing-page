import { BENEFITS } from '@/constants'
import BenefitItem from './BenefitItem';



export const Benefits = () => {
  return (
    <section className="max-container padding-container relative w-full flex-col items-center justify-center py-10 pb-32  lg:py-15">
        <h2 className="text-center bold-40 lg:bold-64 text-transparent bg-clip-text text-gradient">
            Key Benefits
        </h2>
        {BENEFITS.map((category) => (
          <div key={category.title} className="mt-5 mb-5 lg:mt-10 lg:mb-15">
            <h2 className='regular-64 text-center text-black-gradient text-transparent bg-clip-text'>{category.title}</h2>
            <ul className="grid gap-10 md:grid-cols-3 lg:gap-20">
              {category.benefits.map((benefit) => (
                <BenefitItem 
                  key={benefit.title}
                  title={benefit.title} 
                  icon={benefit.icon}
                  description={benefit.description}
                />
              ))}
            </ul>
          </div>
        ))} 
    </section>
  )
}
