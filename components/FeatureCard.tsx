import Image, { StaticImageData } from "next/image";
import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";

type FeatureCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
  href: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
  link,
  href,
}: FeatureCardProps) => {
  return (
    <div className="space-y-2  w-full max-w-xs">
      <Image src={icon} alt="image" height={24} />
      <h4 className="text-md font-bold">{title}</h4>
      <p className="text-sm max-md:max-w-[260]">{description}</p>
      <div className="flex items-center">
        <a href={href} className="text-sm ">
          {link}
           <ArrowRight className="inline-flex h-4 w-4 ml-1" />
        </a>
       
      </div>
    </div>
  );
};

export default FeatureCard;
