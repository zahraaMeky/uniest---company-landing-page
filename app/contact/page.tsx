import ContactBanner from '@/components/ContactBanner';
import { ContactForm } from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { Newsletters } from '@/components/Newsletters';


const Contact = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start pt-10 lg:pt-20'>
     <ContactBanner/>
     <div className='max-container padding-container relative w-full flex  flex-col items-center justify-start py-10 lg:py-20'>
      <div className='w-full border border-[#D9D9D9] shadow-md rounded-xl px-4 sm:px-6 lg:px-10 py-6'>
        <ContactForm/>
        <ContactInfo/>
      </div>
      <div className='mt-10'>
        <Newsletters/>
      </div>
     </div>
    </section>
  );
}

export default Contact;
