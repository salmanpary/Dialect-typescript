import Navbar from "../components/common/navbar";
import Hero from "../components/home/hero";
import CoursesToGetYouStarted from "../components/home/courses";
import WhyChooseUs from "../components/home/whyus";
import Faqsection from "../components/common/faq/Faqsection";
import GetCritical from "../components/home/getcriticalskills";
import Footer from "../components/common/footer";
import { ImSpinner2 } from "react-icons/im";
import {
  courseListingInHomePageQuery,
  NavbarLogoQuery,
  HeroQuery,
  WhyDialectQuery,
  faqHomePageQuery,
  getCriticalHomePageQuery,
  footerSectionQuery,
} from "../graphql/queries";
import client from "../config/appolo.config";
interface headerinfo {
  tagline1: string;
  tagline2: string;
  points: string[];
  image: {
    url: string;
    description: string;
  };
  buttontext: string;
  redirectUrl: string;
}
interface CoursePropsType {
  slug: string;
  homepageImage: {
    url: string;
  };
  coursename: string;
  instructor: string;

  hours: number;
  minutes: number;

  numberofsections: number;
  discountprice: number;
  originalprice: number;
}
interface CardProps {
  title: string;
  content: string;
  icon: {
    url: string;
  };
}
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
interface IProps {
  navbarlogo: string;
  headerinfo: headerinfo;
  coursedata: CoursePropsType[];
  whyus: CardProps[];
  faq: faqInfo;
  getcritical: criticalinfo;
  footer: footerinfo;
}
export default function Home(props: IProps) {
  if (
    !props.coursedata ||
    !props.headerinfo ||
    !props.whyus ||
    !props.faq ||
    !props.getcritical ||
    !props.footer
  ) {
    return (
      <div className="h-screen w-full justify-center flex items-center">
        <ImSpinner2 className="animate-spin" size={80} />
      </div>
    );
  }
  return (
    <>
      <Navbar navbarlogo={props.navbarlogo} />
      <Hero headerinfo={props.headerinfo} />
      <CoursesToGetYouStarted courses={props.coursedata} />
      <WhyChooseUs cardinfo={props.whyus} />
      <Faqsection faqinfo={props.faq} />
      <GetCritical criticalinfo={props.getcritical} />
      <Footer footerinfo={props.footer} />
    </>
  );
}
export async function getStaticProps() {
  const { data: coursesdata } = await client.query({
    query: courseListingInHomePageQuery,
  });
  const { data: navbardata } = await client.query({
    query: NavbarLogoQuery,
  });
  const { data: headerdata } = await client.query({
    query: HeroQuery,
  });
  const { data: whyusdata } = await client.query({
    query: WhyDialectQuery,
  });
  const { data: faqdata } = await client.query({
    query: faqHomePageQuery,
  });
  const { data: getcriticaldata } = await client.query({
    query: getCriticalHomePageQuery,
  });
  const { data: footerdata } = await client.query({
    query: footerSectionQuery,
  });
  const coursedata = coursesdata?.coursesCollection?.items;
  const navbarlogo = navbardata?.homePageCollection?.items?.[0]?.logo.url;
  const headerinfo = headerdata?.homePageCollection?.items?.[0]?.headerdetails;
  const whyus = whyusdata?.whyDialectCardCollection?.items;
  const faq = faqdata?.faqSectionHomePageCollection?.items?.[0];
  const getcritical =
    getcriticaldata?.getCriticalSectionHomePageCollection?.items?.[0];
  const footer = footerdata?.footerSection;
  return {
    props: {
      coursedata,
      navbarlogo,
      headerinfo,
      whyus,
      faq,
      getcritical,
      footer,
    },
    revalidate: 1000,
  };
}
