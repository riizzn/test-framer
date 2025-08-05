import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import quantum from "@/assets/logo-quantum.png";
import pulse from "@/assets/logo-pulse.png";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-hidden mask-fade-x">
        <div className="flex gap-14 ">
          <Image src={acme} alt="acme" className="logo-ticker-img" />
          <Image src={apex} alt="apex" className="logo-ticker-img" />
          <Image src={celestial} alt="celestial" className="logo-ticker-img" />
          <Image src={echo} alt="echo" className="logo-ticker-img" />
          <Image src={quantum} alt="quantum" className="logo-ticker-img" />
          <Image src={pulse} alt="pulse" className="logo-ticker-img" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;