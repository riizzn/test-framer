import { pricingTiers } from "@/constants";
import Check from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const Pricing = () => {

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 bg-white">
      <div className="max-w-[540px] mx-auto">
        <h2 className="text-4xl md:text-6xl  sub-heading text-center">
          Pricing
        </h2>
        <p className="para text-center leading-[30px] max-w-[340px] mx-auto">
          Free forever.Upgrade for unlimited tasks, better security and
          exclusive features.
        </p>
      </div>
      <div className=" mt-10 flex flex-col gap-6 items-center lg:flex-row lg:justify-between lg:items-baseline-last ">
        {pricingTiers.map(
          (
            { title, monthlyPrice, buttonText, popular, inverse, features },
            index
          ) => (
            <div
              className={twMerge(
                "card",
                inverse &&
                  "border-black text-white bg-black shadow-[0px_7px_14px_#ebe1ed]"
              )}
              key={index}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg  text-gray-500 font-semibold">
                  {title}
                </h3>
                {popular && (
                  <div className="text-sm inline-flex border border-white/20  px-4 py-1 rounded-full ">
                    <span className="aurora-text-animated">Most Popular</span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none ">
                  ${monthlyPrice}
                </span>
                <span className=" text-lg text-gray-500 font-semibold tracking-tight">
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full min-w-[271px]  mt-[30px]",
                  inverse && "bg-white text-black"
                )}
              >
                {buttonText}
              </button>
              <ul className="flex  flex-col gap-5 mt-[32px]">
                {features.map((feat, index) => (
                  <li className="text-sm flex gap-4 items-center" key={index}>
                    <Check className="h-6 w-6  " />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Pricing;
