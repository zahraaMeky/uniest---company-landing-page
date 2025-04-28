import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Newsletters } from '@/components/Newsletters';
export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Benefits/>
    <WhyChoose/>
    <Features/>
    <div className='max-container padding-container mb-20'>
          <Newsletters/>
    </div>
    </>
  );
}
