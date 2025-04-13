import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  variant: string;
  full?: boolean;
  textColor?: string;
  className?: string; 
  icon?: string;
  onClick: () => void;
  
}

const Button = ({ type, title, variant, full ,textColor,className="", icon}: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} ${className}`}
      type={type}
    >
      <label className={`bold-16 whitespace-nowrap cursor-pointer ${textColor}`}>{title}</label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  )
}

export default Button