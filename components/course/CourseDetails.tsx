import Image from "next/image";
import React from "react";
interface CourseDetailsProps {
  title: string;
  description: string;
  duration: number;
  lessons: number;
  instructor: string;
  language: string;
}
const CourseDetails = ({
  title,
  description,
  duration,
  lessons,
  instructor,
  language,
}: CourseDetailsProps) => {
  return (
    <div className="bg-coursedetails text-white rounded-2xl py-10 px-5 w-auto sm:w-[600px]  bg-opacity-100 ">
      <h1 className="font-semibold text-2xl new4:text-lg">{title}</h1>
      <h2 className="pt-2 text-xs">{description}</h2>
      <div className="flex justify-between p-2 pt-3 md:text-sm">
        <div className="flex gap-10">
          <div className="flex gap-2">
            <Image
              src="/icons/video-white.svg"
              width={20}
              height={20}
              className="max-h-4 mt-1 md:mt-0.5"
              alt=""
            />
            <span className="whitespace-nowrap">{duration} Hours</span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/cap-white.svg"
              width={20}
              height={20}
              className="max-h-4 mt-1 md:mt-0.5"
              alt=""
            />
            <span className="whitespace-nowrap">{lessons} lessons</span>
          </div>
        </div>
        <div>
          <Image
            src="/icons/rating.svg"
            alt=""
            width={80}
            height={80}
            className="mt-1 ml-3"
          />
        </div>
      </div>
      <div className="flex justify-between pt-1 px-2">
        <div className="flex gap-2 p-2 text-sm">
          <h2>Instructor</h2>
          <div className="line border-l-2 h-4 mt-1 text-coursecardline"></div>
          <h2>{instructor}</h2>
        </div>
        <span>{language}</span>
      </div>
    </div>
  );
};

export default CourseDetails;
