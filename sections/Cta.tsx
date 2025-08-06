"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import glass1 from "@/assets/glass1.png";
import glass2 from "@/assets/glass2.png";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const Cta = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ctaRef}
      className="max-w-7xl mx-auto px-6 sm:px-10 py-20 bg-white light-grad overflow-x-clip"
    >
      <div className="max-w-[540px] mx-auto">
        <h3 className="text-4xl md:text-6xl  sub-heading text-center">
          Sign up for free today
        </h3>
        <p className="para text-center leading-[30px]">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex gap-1 justify-center mt-10">
          <button className=" btn btn-primary">Get for free</button>
          <button className=" btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="  h-5 w-5  mt-0.5" />
          </button>
        </div>
      </div>
      <div className="relative">
        <motion.img
          src={glass1.src}
          alt="glass"
          width={360}
          className="hidden  md:block md:absolute -top-90 -left-50"
          style={{ translateY: translateY }}
        />
        <motion.img
          src={glass2.src}
          alt="glass"
          width={360}
          className="hidden md:block md:absolute -top-90 -right-50"
          style={{ translateY: translateY }}
        />
      </div>
    </section>
  );
};

export default Cta;
