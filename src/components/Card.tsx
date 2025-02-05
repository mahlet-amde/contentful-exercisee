import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CardItemProps {
  i: number;
  icon: LucideIcon;
  description: string;
  image: StaticImageData;
}

const Card = ({ i, icon: Icon, description, image }: CardItemProps) => {
  return (
    <div className="h-screen flex items-center justify-center lg:sticky md:sticky sm:relative top-0">
    <div
      className="h-screen flex items-center justify-center md:sticky bottom-0"
      style={{ zIndex: `${3 - i}` }}
    >
      <div
        className={`relative bg-[#141a20] rounded-3xl w-[1328px] h-[464px] flex flex-row shadow-2xl shadow-black`}
        style={{ top: `calc(-5vh + ${-i * 82}px)` }}
        style={{ bottom: `calc(-5vh + ${-i * 82}px)` }}
      >
        <div className="flex flex-col justify-between w-[60%] p-14">
          <Icon className="h-14 w-14" />
          <div className="w-2/3">
             <p className="text-xl text-[#d1d9e1]">{description}</p>
          </div>
        </div>
        <div className="relative w-1/2 h-full rounded-3xl">
          <Image
            fill
            src={image}
            alt="image"
            className="object-cover absolute top-0 left-0 w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
