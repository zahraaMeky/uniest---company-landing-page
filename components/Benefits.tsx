import { BENEFITS } from '@/constants'
import BenefitItem from './BenefitItem';

export const Benefits = () => {
  return (
    <section className="max-container padding-container relative w-full flex flex-col items-center justify-center py-10 pb-32 lg:py-20">
        {/* Responsive Title */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient">
            Key Benefits
        </h2>

        {BENEFITS.map((category) => (
          <div key={category.title} className="mt-5 mb-5 lg:mt-10 lg:mb-15">
            {/* Responsive Category Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black-gradient text-transparent bg-clip-text">
              {category.title}
            </h2>

            {/* Centering only 3 columns */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 mx-auto w-full max-w-5xl">
              {category.benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className={`flex flex-col items-center text-center w-full 
                    ${index === category.benefits.length - 1 && category.benefits.length % 2 !== 0 ? 'md:col-span-2 md:flex md:justify-center lg:col-span-1' : ''}`}
                >
                  <BenefitItem 
                    title={benefit.title} 
                    icon={benefit.icon}
                    description={benefit.description}
                  />
                </div>
              ))}
            </div>    
          </div>
        ))} 
    </section>
  )
}
