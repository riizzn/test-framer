"use client";
import acme from "@/assets/logo-acme.png";
import apex from "@/assets/logo-apex.png";
import celestial from "@/assets/logo-celestial.png";
import echo from "@/assets/logo-echo.png";
import quantum from "@/assets/logo-quantum.png";
import pulse from "@/assets/logo-pulse.png";
import Image from "next/image";
import { motion } from "motion/react";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-hidden mask-fade-x">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }} // move by one full set of logos
            transition={{
              duration: 20, // slower so you can see it
              ease: "linear",
              repeat: Infinity, // <- this is what you’re missing
            }}
          >
            <Image src={acme} alt="acme" className="logo-ticker-img" />
            <Image src={apex} alt="apex" className="logo-ticker-img" />
            <Image
              src={celestial}
              alt="celestial"
              className="logo-ticker-img"
            />
            <Image src={echo} alt="echo" className="logo-ticker-img" />
            <Image src={quantum} alt="quantum" className="logo-ticker-img" />
            <Image src={pulse} alt="pulse" className="logo-ticker-img" />

            {/*second set of logo for animation*/}
            <Image src={acme} alt="acme" className="logo-ticker-img" />
            <Image src={apex} alt="apex" className="logo-ticker-img" />
            <Image
              src={celestial}
              alt="celestial"
              className="logo-ticker-img"
            />
            <Image src={echo} alt="echo" className="logo-ticker-img" />
            <Image src={quantum} alt="quantum" className="logo-ticker-img" />
            <Image src={pulse} alt="pulse" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
