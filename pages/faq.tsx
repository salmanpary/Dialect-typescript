import React from "react";
import Navbar from "../components/common/navbar";
import GetCritical from "../components/home/getcriticalskills";
import Faqsection from "../components/faq/FaqQuestions";
import Footer from "../components/common/footer";
import {
  NavbarLogoQuery,
  faqPageQuery,
  getCriticalHomePageQuery,
  footerSectionQuery,
} from "../graphql/queries";
import client from "../config/appolo.config";
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
interface criticalinfo {
  title: string;
  subtitle: string;
  buttontext: string;
  buttonRedirectUrl: string;
}
interface footerinfo {
  title: string;
  footerDescription: string;
}
interface Props {
  navbarlogo: string;
  faq: faqInfo;
  getcritical: criticalinfo;
  footer: footerinfo;
}
const faq = (props: Props) => {
  return (
    <>
      <Navbar navbarlogo={props.navbarlogo} />
      <Faqsection faqinfo={props.faq} />
      <GetCritical criticalinfo={props.getcritical} />
      <Footer footerinfo={props.footer} />
    </>
  );
};

export default faq;
export async function getStaticProps() {
  const { data: navbardata } = await client.query({
    query: NavbarLogoQuery,
  });
  const { data: faqdata } = await client.query({
    query: faqPageQuery,
  });
  const { data: getcriticaldata } = await client.query({
    query: getCriticalHomePageQuery,
  });
  const { data: footerdata } = await client.query({
    query: footerSectionQuery,
  });

  const navbarlogo = navbardata?.homePageCollection?.items[0]?.logo.url;
  const faq = faqdata?.faqPageFullDataCollection?.items[0];
  const getcritical =
    getcriticaldata?.getCriticalSectionHomePageCollection?.items[0];
  const footer = footerdata?.footerSection;
  return {
    props: {
      navbarlogo,
      faq,
      getcritical,
      footer,
    },
    revalidate: 1000,
  };
}
