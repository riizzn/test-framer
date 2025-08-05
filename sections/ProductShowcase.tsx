import productImage from "@/assets/product-image.png";
import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/constants";

import Image from "next/image";
const ProductShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 light-grad overflow-x-clip">
      <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center">
          <div className="tag">Distraction-Free Flow</div>
        </div>
        <h2 className=" text-4xl md:text-6xl  sub-heading text-center">
          A smoother path into crystal clear focus
        </h2>
        <p className="para text-center leading-[30px]">
          Effortlessly turn your ideas into a focused and distraction free
          workflow with time blocking and app control in one elegant space.
        </p>
      </div>
      <div className="relative">
      <Image src={productImage} alt="Product Image" className="mt-10"  />
      <Image src={s1} alt="star" width={300} className="hidden md:block md:absolute -left-30 bottom-10 "/>
      <Image src={s2} alt="star" width={300} className="hidden md:block md:absolute -right-36 bottom-75"/>
      </div>
      <div className=" grid grid-cols-1  mt-15 gap-20  place-items-center md:grid-cols-2 md:px-10 lg:flex  ">
        {features.map((feature,index)=>(
          <FeatureCard key={index} {...feature}/>
        ))}


      </div>
    </section>
  );
};

export default ProductShowcase;
