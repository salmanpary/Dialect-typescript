import React from "react";
import CourseLaptopPage from "./CourseLaptopPage";
import CourseMobilePage from "./CourseMobilePage";
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
const CoursePage = ({
  navbarlogo,
  headerinfo,
  priceinfo,
  includesinfo,
  descinfo,
  footerinfo,
}: CoursePropsType) => {
  return (
    <>
      <div className="hidden lg:block">
        <CourseLaptopPage
          navbarlogo={navbarlogo}
          headerinfo={headerinfo}
          priceinfo={priceinfo}
          includesinfo={includesinfo}
          descinfo={descinfo}
          footerinfo={footerinfo}
        />
      </div>
      <div className="block lg:hidden">
        <CourseMobilePage
          navbarlogo={navbarlogo}
          headerinfo={headerinfo}
          priceinfo={priceinfo}
          includesinfo={includesinfo}
          descinfo={descinfo}
          footerinfo={footerinfo}
        />
      </div>
    </>
  );
};

export default CoursePage;
