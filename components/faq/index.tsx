import React from "react";
import Navbar from "../common/navbar";
import GetCritical from "../home/getcriticalskills";
import Footer from "../common/footer";
import Faqsection from "./FaqQuestions";
const FaqPage = () => {
  return (
    <>
      <Navbar />
      <Faqsection />

      <GetCritical />
      <Footer />
    </>
  );
};

export default FaqPage;
