import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import logo from "@/assets/amtlogo.png";
import am from "@/assets/amlogo.png";
import MenuIcon from "@/assets/menu.svg";
import { navLinks } from "@/constants";
const Header = () => {
  return (
    <header className="sticky top-0  backdrop-blur-sm z-20">
      <div className="flex items-center justify-center py-3 bg-black text-sm  text-white gap-3 ">
        <p className="text-white/60 hidden md:block">Clarity meets focus meets flow in one elegant workspace.</p>
        <div className="aurora-text-animated inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex  justify-center items-center  mt-0.5" />
        </div>
      </div>
      <div className="w-full px-4 py-2 ">
        <div className=" flex justify-between items-center  rounded-full px-5 py-3">
          <div className="flex">
          <Image src={logo} alt="logo" height={40} width={40} />
          <Image src={am} alt="amethyst" height={100} width={100}  className="object-contain hidden md:block"/>
          </div>
          <MenuIcon className="h-6 w-6 md:hidden" />
          <nav className=" hidden md:flex gap-6 text-black/60 items-center ">
            {navLinks.map((item) => (
              <a key={item.id} href={item.id}>
                {item.title}
              </a>
            ))}
            

            
          </nav>
          <button className="bg-black rounded-full text-white px-5 py-2 font-medium inline-flex justify-center tracking-tight max-md:hidden">Get for free</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
