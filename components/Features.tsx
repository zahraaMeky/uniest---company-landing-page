import { FEATURES } from "@/constants"
import FeatureCard from "./FeatureCard"

export const Features = () => {
  return (
    <section className="max-container padding-container relative w-full flex-col items-center justify-start pb-32">
        <h2 className="text-center bold-40 lg:bold-64 text-transparent bg-clip-text text-gradient">
        Explore Features
        </h2>
        <ul className="mt-10 grid gap-5 lg:grid-cols-4 md:grid-cols-2 lg:mg-20 lg:gap-10">
            {FEATURES.map((feature) => (
              <FeatureCard 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
                variant={feature.variant}
              />
            ))}
        </ul>
    </section>
  )
}
