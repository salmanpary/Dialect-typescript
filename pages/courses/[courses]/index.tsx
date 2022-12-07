import React from "react";
import CoursePage from "../../../components/course";
import { GetStaticPaths } from "next";
import {
  NavbarLogoQuery,
  footerSectionQuery,
  coursePathsQuery,
  coursePageHeaderQuery,
  coursePagePriceCardQuery,
  coursePagePriceCardThisIncludesQuery,
  coursePageDescriptionQuery,
  CoursePageSeoQuery,
} from "../../../graphql/queries";
import client from "../../../config/appolo.config";
import { ImSpinner2 } from "react-icons/im";
import Head from "next/head";
import MetaTags from "../../../components/common/seo/meta-tags";
import type { MetaTagsForSeo } from "../../../types/courses.types";
interface headerinfo {
  bannerimage: {
    url: string;
  };
  coursename: string;
  smallDescription: string;
  hours: number;
  minutes: number;
  numberofsections: number;
  instructor: string;
  language: string;
  rating: number;
}
interface footerinfo {
  title: string;
  footerDescription: string;
}
interface priceinfo {
  originalprice: number;
  discountprice: number;
  hours: number;
  minutes: number;
  numberofsections: number;
  homepageImage: {
    url: string;
  };
  pricecardButtontext: string;
  pricecardButtonredirecturl: string;
}
interface includesinfo {
  icon: {
    url: string;
  };
  shortText: string;
}
interface descinfo {
  description: {
    json: any;
  };
}
interface CoursePropsType {
  navbarlogo: string;
  courseheader: headerinfo;
  coursepricecard: priceinfo;
  coursepricecardthisincludes: includesinfo[];
  coursepagedescription: descinfo;
  footer: footerinfo;
  seo: MetaTagsForSeo;
}
const Courses = (props: CoursePropsType) => {
  if (
    !props.navbarlogo ||
    !props.courseheader ||
    !props.coursepricecard ||
    !props.coursepricecardthisincludes ||
    !props.coursepagedescription ||
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
      <MetaTags props={props.seo} />
      <CoursePage
        navbarlogo={props.navbarlogo}
        headerinfo={props.courseheader}
        priceinfo={props.coursepricecard}
        includesinfo={props.coursepricecardthisincludes}
        descinfo={props.coursepagedescription}
        footerinfo={props.footer}
      />
    </>
  );
};

export default Courses;
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: coursePathsQuery,
  });
  const paths = data?.coursesCollection?.items.map(
    (item: { slug: string }) => ({
      params: { courses: item.slug },
    })
  );
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: {
  params: {
    courses: string;
  };
}) => {
  const slug = params.courses;

  if (!slug) {
    return {
      notFound: true,
    };
  }
  const { data: navbardata } = await client.query({
    query: NavbarLogoQuery,
  });

  const { data: courseheaderdata } = await client.query({
    query: coursePageHeaderQuery,
    variables: { slug },
  });

  if (courseheaderdata?.coursesCollection?.items?.length === 0) {
    return {
      notFound: true,
    };
  }
  const { data: coursepricecarddata } = await client.query({
    query: coursePagePriceCardQuery,
    variables: { slug },
  });
  if (coursepricecarddata?.coursesCollection?.items?.length === 0) {
    return {
      notFound: true,
    };
  }
  const { data: coursepricecardthisincludesdata } = await client.query({
    query: coursePagePriceCardThisIncludesQuery,
    variables: { slug },
  });
  if (
    coursepricecardthisincludesdata?.coursePriceCardThisIncludesCollection
      ?.items?.length === 0
  ) {
    return {
      notFound: true,
    };
  }
  const { data: coursepagedescriptiondata } = await client.query({
    query: coursePageDescriptionQuery,
    variables: { slug },
  });
  if (
    coursepagedescriptiondata?.coursePageDescriptionCollection?.items
      ?.length === 0
  ) {
    return {
      notFound: true,
    };
  }
  const { data: footerdata } = await client.query({
    query: footerSectionQuery,
  });
  const { data: seodata } = await client.query({
    query: CoursePageSeoQuery,
    variables: { slug },
  });

  const navbarlogo = navbardata?.homePageCollection?.items[0]?.logo.url;
  const courseheader = courseheaderdata?.coursesCollection?.items[0];
  const coursepricecard = coursepricecarddata?.coursesCollection?.items[0];

  const coursepricecardthisincludes =
    coursepricecardthisincludesdata?.includesCoursesCollection?.items;
  const coursepagedescription =
    coursepagedescriptiondata?.coursesCollection?.items[0];
  const footer = footerdata?.footerSection;
  const seo = seodata?.coursesCollection.items[0].metaTagsForSeo;
  return {
    props: {
      navbarlogo,
      courseheader,
      coursepricecard,
      coursepricecardthisincludes,
      coursepagedescription,
      footer,
      seo,
    },
    revalidate: 10,
  };
};
