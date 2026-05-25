import Image from "next/image";

type MediovateLogoProps = {
  priority?: boolean;
  className?: string;
};

export default function MediovateLogo({
  priority = false,
  className = "",
}: MediovateLogoProps) {
  return (
    <Image
      src="/assets/Home/mediovate_logo.png"
      alt="Mediovate"
      width={190}
      height={22}
      priority={priority}
      className={`object-contain max-lg:h-[30px] max-lg:w-auto max-lg:object-left lg:h-auto lg:w-auto ${className}`}
      style={{ width: "auto" }}
    />
  );
}
