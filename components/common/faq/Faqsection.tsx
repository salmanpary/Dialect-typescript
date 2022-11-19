import React from "react";
import Faqs from "./Faqs";
const Faqsection = () => {
  return (
    <>
      <div className="p-5 sm:px-28 my-10">
        <div className={`flex justify-center flex-col gap-y-10`}>
          <div className=" flex flex-col justify-center items-center gap-3 sm:gap-7">
            <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
              Any questions?
            </h2>
            <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
              We got you.
            </h2>
          </div>
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default Faqsection;
