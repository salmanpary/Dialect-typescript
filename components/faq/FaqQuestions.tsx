import React from "react";
import { FaqPageQuestions } from "../common/faq/Faqs";
const Faqsection = () => {
  return (
    <>
      <div className="sm:bg-gradient-to-l sm:from-wrappergrey bg-right-top bg-none             pt-10   px-10 sm:px-36 sm:pt-5 ">
        <div className="sm:pt-5">
          <div className={`flex justify-center flex-col gap-10`}>
            <div className=" flex flex-col justify-center items-start gap-2 sm:gap-8">
              <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
                Any questions?
              </h2>
              <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
                We got you.
              </h2>
            </div>
            <FaqPageQuestions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqsection;
