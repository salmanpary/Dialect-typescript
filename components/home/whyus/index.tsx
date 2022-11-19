import React from "react";
import Card from "./Card";
import LandingPageData from "../data/LandingPageData";
const WhyChooseUs = () => {
  return (
    <div className="lg:px-28 px-0">
      <div className="relative bg-wrappergrey rounded-2xl  pt-14 pb-[5.625rem] w-full mt-[5.188rem] overflow-x-hidden">
        <h3 className="flex justify-center items-center text-blue text-xl font-extrabold text-center sm:text-left pb-6">
          WHY DIALECT
        </h3>
        <h2 className="flex justify-center items-center font-bold sm:text-cardheading text-center pb-[3.125rem] text-4xl md:whitespace-nowrap">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap gap-10 justify-center p-5">
          {LandingPageData?.whychooseus?.cards?.map((item, index) => {
            return (
              <Card
                key={index}
                roundcolor={item.roundcolor}
                heading={item.heading}
                content={item.content}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
