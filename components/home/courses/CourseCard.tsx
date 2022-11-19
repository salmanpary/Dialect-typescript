import Link from "next/link";
import React from "react";
import CourseCardStyle from "./CourseCard.module.css";
import Image from "next/image";
interface Props {
  imageurl: string;
  heading: string;
  instructor: string;
  time: {
    hours?: number;
    minutes?: number;
  };
  sections: number;
  discountprice: number | undefined;
  price: number;
  path: string;
}
const CourseCard = ({
  imageurl,
  heading,
  instructor,
  time,
  sections,
  discountprice,
  price,
  path,
}: Props) => {
  return (
    <div className="border-2 border-blue rounded-2xl p-2 w-[365px] h-[380px] shadow-lg">
      <Image
        src={imageurl}
        width={342.56}
        height={182.82}
        alt=""
        className="rounded-xl max-h-[182.82px] max-w-[342.56px]"
      />
      <h1 className="font-bold text-base p-2 h-12">{heading}</h1>
      <div className="flex gap-2 p-2 text-sm">
        <h2 className="text-coursecardinstructor">Instructor</h2>
        <div className="line border-l-2 h-4 mt-1 text-coursecardline"></div>
        <h2 className="text-coursecardinstructor">{instructor}</h2>
      </div>
      <div className="flex   justify-between">
        <div className="flex gap-1">
          <Image
            alt=""
            src="/icons/video.svg"
            width={18}
            height={20}
            className="max-h-3.5 mt-0.5 "
          />
          <div className="flex gap-1 text-sm">
            <span className="whitespace-nowrap">
              {time.hours && <span>{time.hours} Hr</span>} {time.minutes && <span>{time.minutes} Min</span>}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            alt=""
            src="/icons/cap.svg"
            width={20}
            height={20}
            className="max-h-4 mt-0.5 "
          />
          <div className="text-sm whitespace-nowrap">{sections} sections</div>
        </div>

        <Image alt="" src="/icons/rating.svg" width={80} height={80} />
      </div>

      <div className="text-base text-coursediscount px-2 py-1 h-8">
        {price && (
          <span className={CourseCardStyle.strikethrough}>
            ₹ {price}
          </span>
        )}
      </div>

      <div>
        <div className={`flex justify-between p-2`}>
          <div className="text-xl font-bold">₹ {discountprice}</div>
          <Link href={`/${path}`}>
            <div className="text-bluebutton border rounded-lg w-28 border-bluebutton grid place-content-center px-1.5 py-1 text-sm font-medium">
              Enroll Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
