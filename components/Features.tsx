import { FEATURES } from "@/constants";
import FeatureCard from "./FeatureCard";

export const Features = () => {
  return (
    <section className="max-container padding-container relative w-full flex flex-col items-center justify-start pb-24">
      {/* Title */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient">
        Explore Features
      </h2>

      {/* Feature Grid */}
      <ul className="mt-10 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
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
  );
};
