"use client";
import ArrowRight from "@/assets/arrow-right.svg";

import star1 from "@/assets/star1.png";
import star2 from "@/assets/star2.png";
import star3 from "@/assets/newstar.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";


import { useRef } from "react";
const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])

  
  return (
    <section
      ref={heroRef}
      className="max-w-7xl mx-auto p-6 sm:px-10 bg-radial-hero overflow-x-clip"
    >
      <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag">Meet Amethyst 2.0</div>
          <h1 className=" text-5xl md:text-7xl heading">
            From Chaos <br />
            to Clarity
          </h1>
          <p className="para md:w-[400]">
            It blocks every distraction, fades the noise, and drops you into a
            space of focus where only your work exists and what you bring back
            is your own.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className=" btn btn-primary">Get for free</button>
            <button className=" btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowRight className="  h-5 w-5  mt-0.5" />
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:h-[600px] md:flex-1 relative ">
          <motion.img
            src={star1.src}
            alt="star"
            className="md:absolute md:h-full md:w-auto md:max-w-none  lg:left-14 lg:bottom-5"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={star2.src}
            alt="star2"
            width={220}
            height={220}
            className="hidden md:block -top-1 -left-22 md:absolute lg:-left-10 "
            style={{
              translateY: translateY
            }}
          />
          <motion.img
            src={star3.src}
            alt="star3"
            width={220}
            height={220}
            className=" hidden lg:block md:absolute top-[480px] left-[400px]"
            style={{
              translateY: translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
