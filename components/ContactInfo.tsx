import { ContactInfos } from '@/constants';
import ContactItem  from './ContactItem ';

const ContactInfo = () => {
  return (
    <div>
      {ContactInfos.map((category) => {
        const gridCols =
          category.title === 'social'
            ? 'grid-cols-1 md:grid-cols-3'
            : category.title === 'contact'
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1'; // Default for 'address'

        return (
          <div key={category.title} className="my-5 lg:my-10">
            <div className={`grid w-full gap-5 ${gridCols}`}>
              {category.contacts.map((contact) => (
                <div key={contact.title} className="w-full">
                  <ContactItem
                    title={contact.title}
                    icon={contact.icon}
                    url={contact.url}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
