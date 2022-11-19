import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import AddressCard from "./AddressCard";
import Typeform from "./Typeform";
const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <Typeform />
      <AddressCard />
      <Footer />
    </>
  );
};

export default ContactUsPage;
