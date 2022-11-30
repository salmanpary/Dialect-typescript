import React from "react";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import CourseHero from "./GameDevelopment";
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
  headerinfo: headerinfo;
  priceinfo: priceinfo;
  includesinfo: includesinfo[];
  descinfo: descinfo;
  footerinfo: footerinfo;
}
const CourseLaptopPage = ({
  navbarlogo,
  headerinfo,
  priceinfo,
  includesinfo,
  descinfo,
  footerinfo,
}: CoursePropsType) => {
  return (
    <>
      <Navbar navbarlogo={navbarlogo} />
      <CourseHero
        headerinfo={headerinfo}
        priceinfo={priceinfo}
        includesinfo={includesinfo}
        descinfo={descinfo}
      />
      <Footer footerinfo={footerinfo} />
    </>
  );
};

export default CourseLaptopPage;
