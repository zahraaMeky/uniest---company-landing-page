type ContactItemProps = {
  title: string;
  icon: string;
  url?: string; 
};

const ContactItem = ({ title, icon, url }: ContactItemProps) => {
  return (
    <div className="cursor-pointer flex items-center gap-4 w-full border border-[#D9D9D9] rounded-xl px-4 sm:px-6 md:px-2 lg:px-6  md:gap-2  py-3 sm:py-4">
      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
      />

      <div className="flex-1">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-semibold text-black whitespace-nowrap"
          >
            {title}
          </a>
        ) : (
          <p className="text-base sm:text-lg font-semibold text-black whitespace-nowrap">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
