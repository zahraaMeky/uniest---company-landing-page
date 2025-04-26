import { AboutHero } from '@/components/AboutHero'
import { Ceo } from '@/components/Ceo'
import { Ecosystem } from '@/components/Ecosystem'
import {ModernTools} from '@/components/ModernTools'
import { Partnerships } from '@/components/Partnerships'
const About = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start pt-10 lg:pt-20'>
      <AboutHero/>
      <Ecosystem/>
      <Partnerships/>
      <ModernTools/>
      <Ceo/>
    </section>
  )
}

export default About