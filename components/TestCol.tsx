"use client";
import { testimonials } from "@/constants";

import Image from "next/image";
import React from "react";

import { motion } from "motion/react";

const TestCol = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className=" flex flex-col gap-5 pb-5  "
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {" "}
            {props.testimonials.map(
              ({ text, imageSrc, name, username }, index) => (
                <div key={index} className="card">
                  <p className="text-[16px]">{text}</p>
                  <div className="flex items-center gap-2 mt-5">
                    <Image src={imageSrc} width={42} height={42} alt="avatar" />
                    <div className="flex flex-col ">
                      <span className="text-[16px] font-medium leading-5 tracking-tight">
                        {name}
                      </span>
                      <span className="text-[16px] tracking-tight leading-5 ">
                        {username}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestCol;
