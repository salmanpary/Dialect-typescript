import React, { useEffect } from "react";
import CourseDetails from "./CourseDetails";
import CoursePrice from "./CoursePrice";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
const CourseMobilePage = ({
  navbarlogo,
  headerinfo,
  priceinfo,
  includesinfo,
  descinfo,
  footerinfo,
}: CoursePropsType) => {
  const router = useRouter();
  return (
    <>
      <Navbar navbarlogo={navbarlogo} />
      <div className="relative">
        <Image
          fill
          className="object-center object-cover pointer-events-none rounded-lg -z-20"
          src={headerinfo?.bannerimage.url}
          alt=""
        />
        <div className="relative z-1 py-20 px-2 sm:px-10">
          <CourseDetails
            title={headerinfo?.coursename}
            description={headerinfo?.smallDescription}
            hours={headerinfo?.hours}
            minutes={headerinfo?.minutes}
            numberofsections={headerinfo?.numberofsections}
            instructor={headerinfo?.instructor}
            language={headerinfo?.language}
            rating={headerinfo?.rating}
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <CoursePrice
          price={priceinfo?.originalprice}
          discountprice={priceinfo?.discountprice}
          hours={priceinfo?.hours}
          minutes={priceinfo?.minutes}
          sections={priceinfo?.numberofsections}
          imageurl={priceinfo?.homepageImage?.url}
          buttontext={priceinfo?.pricecardButtontext}
          redirecturl={priceinfo?.pricecardButtonredirecturl}
          includes={includesinfo}
        />
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="prose text-black marker:text-black">
          {descinfo && documentToReactComponents(descinfo?.description?.json)}
        </div>
      </div>
      <Footer footerinfo={footerinfo} />
    </>
  );
};

export default CourseMobilePage;
