import logoPath from "@assets/Gemini_Generated_Image_vt15luvt15luvt15(cropped)_1754935026881.png";

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "", variant = 'light' }: LogoProps) {
  return (
    <img 
      src={logoPath}
      alt="GreenByte Solutions Logo"
      className={`h-8 w-auto ${className}`}
    />
  );
}
