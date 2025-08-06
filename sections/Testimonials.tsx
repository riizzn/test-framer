"use client";
import TestCol from "@/components/TestCol";
import { testimonials } from "@/constants";
import { motion } from "motion/react";

const Testimonials = () => {
  const fc = testimonials.slice(0, 3);
  const sc = testimonials.slice(3, 6);
  const tc = testimonials.slice(6, 9);
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 bg-white">
      <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center">
          <div className="tag">Version 2.0 is here</div>
        </div>

        <h3 className="text-4xl md:text-6xl  sub-heading text-center mt-6">
          What our users say
        </h3>
        <p className="para text-center leading-[30px]">
          From intuitive designs to powerful features,our app has become an
          essential tool for users around the world.
        </p>
      </div>
      <div className="flex justify-center gap-6 mask-fade-y mt-10 max-h-[738px] overflow-hidden  ">
        <TestCol testimonials={fc} duration={15} />
        <TestCol testimonials={sc} duration={19} className="hidden md:block"/>
        <TestCol testimonials={tc} duration={17} className="hidden lg:block"/>
   
   
      </div>
    </section>
  );
};

export default Testimonials;
