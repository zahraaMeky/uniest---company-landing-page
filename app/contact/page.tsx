import ContactBanner from '@/components/ContactBanner';
import ContactInfo from '@/components/ContactInfo';


const Contact = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start py-10 lg:py-20'>
     <ContactBanner/>
     <div className='max-container padding-container relative w-full flex  pb-32  flex-col items-center justify-start py-10 lg:py-20'>
      <ContactInfo/>
     </div>
    </section>
  );
}

export default Contact;
