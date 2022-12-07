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
  faqPageDataQuery,
} from "../graphql/queries";
import client from "../config/appolo.config";
import Head from "next/head";
import MetaTags from "../components/common/seo/meta-tags";
import type { MetaTagsForSeo } from "../types/courses.types";
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
  seo: MetaTagsForSeo;
}
const faq = (props: Props) => {
  return (
    <>
      <MetaTags props={props.seo} />
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
  const { data: faqpagedata } = await client.query({
    query: faqPageDataQuery,
  });

  const navbarlogo = navbardata?.homePageCollection?.items[0]?.logo.url;
  const faq = faqpagedata?.faqPageFullData;
  const seo = faqpagedata?.faqPageFullData?.seo;
  const getcritical =
    getcriticaldata?.getCriticalSectionHomePageCollection?.items[0];
  const footer = footerdata?.footerSection;
  return {
    props: {
      navbarlogo,
      faq,
      getcritical,
      footer,
      seo,
    },
    revalidate: 1000,
  };
}
