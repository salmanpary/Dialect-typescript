import React from "react";
import Navbar from "../components/common/navbar";
import Typeform from "../components/contact/Typeform";
import AddressCard from "../components/contact/AddressCard";
import Footer from "../components/common/footer";
import client from "../config/appolo.config";
import { NavbarLogoQuery, footerSectionQuery } from "../graphql/queries";
interface footerinfo {
  title: string;
  footerDescription: string;
}
interface Props {
  navbarlogo: string;
  footer: footerinfo;
}
const contact = (props:Props) => {
  return (
    <>
      <Navbar navbarlogo={props.navbarlogo} />
      <Typeform />
      <AddressCard />
      <Footer footerinfo={props.footer} />
    </>
  );
};

export default contact;
export async function getStaticProps() {
  const { data: navbardata } = await client.query({
    query: NavbarLogoQuery,
  });
  const { data: footerdata } = await client.query({
    query: footerSectionQuery,
  });

  const navbarlogo = navbardata?.homePageCollection?.items[0]?.logo.url;
  const footer = footerdata?.footerSection;
  return {
    props: {
      navbarlogo,
      footer,
    },
    revalidate: 1000,
  };
}
