import Navbar from "../../components/common/navbar";

import CoursesToGetYouStarted from "../../components/home/courses";
import Footer from "../../components/common/footer";
import { ImSpinner2 } from "react-icons/im";
import {
  NavbarLogoQuery,
  footerSectionQuery,
  coursesPageFullDataQuery,
} from "../../graphql/queries";
import client from "../../config/appolo.config";
import Head from "next/head";
import MetaTags from "../../components/common/seo/meta-tags";
import type { MetaTagsForSeo } from "../../types/courses.types";

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
  discountprice: string;
  originalprice: string;
  rating: number;
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

  coursedata: CoursePropsType[];
  footer: footerinfo;
  coursetitle: string;
  seo: MetaTagsForSeo;
}
export default function Courses(props: IProps) {
  if (
    !props.coursedata ||
    !props.navbarlogo ||
    !props.footer ||
    !props.coursetitle
  ) {
    return (
      <div className="h-screen w-full justify-center flex items-center">
        <ImSpinner2 className="animate-spin" size={80} />
      </div>
    );
  }
  return (
    <>
     <MetaTags props={props.seo}/>
      <Navbar navbarlogo={props.navbarlogo} />

      <CoursesToGetYouStarted
        coursetitle={props.coursetitle}
        courses={props.coursedata}
      />

      <Footer footerinfo={props.footer} />
    </>
  );
}
export async function getStaticProps() {
  const { data: navbardata } = await client.query({
    query: NavbarLogoQuery,
  });
  const { data: footerdata } = await client.query({
    query: footerSectionQuery,
  });
  const { data: coursespagedata } = await client.query({
    query: coursesPageFullDataQuery,
  });

  const coursedata =
    coursespagedata?.coursesPageFullData?.coursesCollection?.items;
  const coursetitle = coursespagedata?.coursesPageFullData?.title;
  const seo = coursespagedata?.coursesPageFullData?.seo;
  const navbarlogo = navbardata?.homePageCollection?.items?.[0]?.logo.url;
  const footer = footerdata?.footerSection;
  return {
    props: {
      coursedata,
      navbarlogo,
      footer,
      coursetitle,
      seo,
    },
    revalidate: 1000,
  };
}
