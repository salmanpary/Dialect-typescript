import React from "react";
import { FaqPageQuestions } from "../common/faq/Faqs";
interface faqInfo {
  title: string;
  subtitle: string;
  faqsCollection: {
    items: {
      question: string;
      answer: string;
    }[];
  };
}
const Faqsection = ({ faqinfo }: { faqinfo: faqInfo }) => {
  return (
    <>
      <div className="sm:bg-gradient-to-l sm:from-wrappergrey bg-right-top bg-none pt-10   px-6 sm:px-36 sm:pt-5 ">
        <div className="sm:pt-5">
          <div className={`flex justify-center flex-col gap-10`}>
            <div className=" flex flex-col justify-center items-start gap-2 sm:gap-8">
              <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
                {faqinfo?.title}
              </h2>
              <h2 className="font-extrabold sm:text-faqheading text-center text-4xl">
                {faqinfo?.subtitle}
              </h2>
            </div>
            <FaqPageQuestions faqinfo={faqinfo?.faqsCollection?.items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqsection;
