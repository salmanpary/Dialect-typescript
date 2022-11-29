import React from "react";
import Faqs from "./Faqs";
interface faqInfo {
  title: string;
  subtitle: string;
  faqCollection: {
    items: {
      question: string;
      answer: string;
    }[];
  };
}
const Faqsection = ({ faqinfo }: { faqinfo: faqInfo }) => {
  return (
    <>
      <div className="p-5 sm:px-28 my-10">
        <div className={`flex justify-center flex-col gap-y-10`}>
          <div className=" flex flex-col justify-center items-center gap-3 sm:gap-7">
            <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
              {faqinfo?.title}
            </h2>
            <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
              {faqinfo?.subtitle}
            </h2>
          </div>
          <Faqs faqinfo={faqinfo.faqCollection.items} />
        </div>
      </div>
    </>
  );
};

export default Faqsection;
