// components/ArticleSection.tsx
type SubSection = {
  subtitle: string;
  content?: string;
  items?: string[];
};

type ArticleSectionProps = {
  title: string;
  content?: string;
  subsections?: SubSection[];
  items?: string[];
  note?: string;
};

const PrivacySection = ({ title, content, subsections, items, note }: ArticleSectionProps) => {
  return (
    <article className="space-y-2">
      <h4 className="text-xl font-bold text-[#303030]">{title}</h4>

    {typeof content === "string" && (
        <p
            className="text-[#303030]"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )}
      {subsections?.map((sub, idx) => (
        <div key={idx} className="space-y-1">
          <h5 className="text-lg font-bold text-[#303030]">{sub.subtitle}</h5>
          {sub.content && <p className="text-[#303030]">{sub.content}</p>}
          {sub.items && (
            <ul className="list-disc pl-5 space-y-1 text-[#303030]">
              {sub.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {items && (
        <ul className="list-disc pl-5 space-y-1 text-[#303030]">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {note && (
        <p
            className="text-gray-700 mt-4"
            dangerouslySetInnerHTML={{ __html:note }}
        />
)}

    </article>
  );
};

export default PrivacySection;
