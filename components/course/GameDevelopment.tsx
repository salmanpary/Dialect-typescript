import React, { useEffect } from "react";
import CourseDescription from "./CourseDescription";
import CourseDetails from "./CourseDetails";
import CoursePrice from "./CoursePrice";
import { useRouter } from "next/router";
import Image from "next/image";
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
  headerinfo: headerinfo;
  priceinfo: priceinfo;
  includesinfo: includesinfo[];
  descinfo: descinfo;
}
const GameDevelopment = ({
  headerinfo,
  priceinfo,
  includesinfo,
  descinfo,
}: CoursePropsType) => {
  const router = useRouter();

  return (
    <>
      <div className="px-20 pt-4">
        <div className="">
          <div className="relative">
            <Image
              fill
              className="object-center object-cover pointer-events-none rounded-lg -z-20"
              src={headerinfo?.bannerimage.url}
              alt=""
            />
            <div className="relative z-1 py-11 px-10">
              <CourseDetails
                title={headerinfo?.coursename}
                description={headerinfo?.smallDescription}
                hours={headerinfo?.hours}
                minutes={headerinfo?.minutes}
                numberofsections={headerinfo?.numberofsections}
                instructor={headerinfo?.instructor}
                language={headerinfo?.language}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="basis-3/4 pt-8">
            <div className="prose text-black marker:text-black">
              {descinfo &&
                documentToReactComponents(descinfo?.description?.json)}
            </div>
          </div>
          <div className="mt-[-100px] mr-7">
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
        </div>
      </div>
    </>
  );
};

export default GameDevelopment;
