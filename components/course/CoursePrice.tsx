import React from "react";
import CoursePriceStyle from "./CoursePrice.module.css";
import StartLearning from "../common/button/StartLearning";
import Image from "next/image";
interface priceinfo {
  discountprice: string;
  hours: number;
  minutes: number;
  sections: number;
  imageurl: string;
  buttontext: string;
  redirecturl: string;
  price: string;
  includes: {
    icon: {
      url: string;
    };
    shortText: string;
  }[];
}
const CoursePrice = ({
  imageurl,
  discountprice,
  price,
  hours,
  minutes,
  sections,
  includes,
  buttontext,
  redirecturl,
}: priceinfo) => {
  return (
    <div className="w-screen sm:w-[340px] rounded-2xl shadow-xl border-2 border-grey p-6 bg-white">
      <Image
        src={imageurl}
        alt=""
        width={441}
        height={240}
        className="rounded-2xl"
      />

      <div className="flex justify-between p-4">
        <div className="flex flex-col">
          {price && (
            <div className="text-base text-coursediscount px-2 whitespace-nowrap">
              <span className={CoursePriceStyle.strikethrough}>₹ {price}</span>
            </div>
          )}
          <div className="text-2xl sm:text-3xl font-bold text-courseheading whitespace-nowrap">
            ₹ {discountprice}
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-1 font-semibold">
          <div className="flex gap-2">
            <Image
              src="/icons/video.svg"
              alt=""
              className="max-h-4 mt-1"
              width={20}
              height={20}
            />
            <span>
              {(hours && hours !== 0) && `${hours}hr`}{" "}
              {(minutes && minutes !== 0) && `${minutes}min`}
            </span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/cap.svg"
              alt=""
              className="max-h-4 mt-1"
              width={20}
              height={20}
            />
            <span className="whitespace-nowrap">{sections} Sections</span>
          </div>
        </div>
      </div>
      <StartLearning text={buttontext} redirecturl={redirecturl} />
      <div>
        <h1 className="text-courseheading font-bold px-2 text-xl py-1 mt-5">
          This Includes:
        </h1>
        {includes?.map((item, index) => {
          return (
            <div className="flex gap-2 px-2 py-1" key={index}>
              <Image
                src={item?.icon?.url}
                alt=""
                className="max-h-4 max-w-[30px] mt-1"
                width={20}
                height={20}
              />
              <span className="font-semibold whitespace-nowrap">
                {item?.shortText}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursePrice;
