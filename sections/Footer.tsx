import Image from "next/image";
import logo from "@/assets/amtlogo.png";
import { navLinks } from "@/constants";
import X from "@/assets/social-x.svg";
import Insta from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import Youtube from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto text-sm px-6 sm:px-10 py-10 bg-black text-[#BCBCBC] ">
      <div className="flex justify-center">
        <Image
          src={logo}
          alt="logo"
          height={60}
          width={60}
          className="invert "
        />
      </div>

      <nav className="flex flex-col items-center gap-5 mt-6 md:flex-row md:justify-center md:gap-6">
        {navLinks.map((item) => (
          <a key={item.id} href={item.id}>
            {item.title}
          </a>
        ))}
      </nav>
      <div className="flex justify-center mt-6 gap-5">
        <X />
        <Insta />
        <Linkedin />
        <Pin />
        <Youtube />
      </div>
      <p className="mt-6 text-center">&copy; 2025 Amethyst, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
