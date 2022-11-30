import Image from "next/image";
import React from "react";
interface CourseDetailsProps {
  title: string;
  description: string;

  hours?: number;
  minutes?: number;

  numberofsections: number;
  instructor: string;
  language: string;
  rating: number;
}
const CourseDetails = ({
  title,
  description,
  hours,
  minutes,
  numberofsections,
  instructor,
  language,
  rating,
}: CourseDetailsProps) => {
  const renderRating = (rating: number) => {
    switch (rating) {
      case 1:
        return <Image alt="" src="/icons/onestar.png" width={80} height={80}/>;
      case 2:
        return <Image alt="" src="/icons/twostar.png" width={80} height={80} />;
      case 3:
        return (
          <Image alt="" src="/icons/threestar.png" width={80} height={80} />
        );
      case 4:
        return (
          <Image alt="" src="/icons/fourstar.png" width={80} height={80} />
        );
      case 5:
        return (
          <Image alt="" src="/icons/fivestar.png" width={80} height={80}/>
        );
      default:
        return (
          <Image alt="" src="/icons/fivestar.png" width={80} height={80} />
        );
    }
  };
  return (
    <div className="bg-coursedetails text-white rounded-2xl py-10 px-5 w-auto sm:w-[600px]  bg-opacity-100 ">
      <h1 className="font-semibold text-2xl new4:text-lg">{title}</h1>
      <h2 className="pt-2 text-xs">{description}</h2>
      <div className="flex justify-between p-2 pt-3 md:text-sm">
        <div className="flex gap-4">
          <div className="flex gap-2">
            <Image
              src="/icons/video-white.svg"
              width={20}
              height={20}
              className="max-h-4 mt-0.5 md:mt-0.5"
              alt=""
            />
            <span className="whitespace-nowrap text-sm">
              {hours && `${hours} Hours`} {"  "}
              {minutes && `${minutes}min`}
            </span>
          </div>
          <div className="flex gap-2">
            <Image
              src="/icons/cap-white.svg"
              width={20}
              height={20}
              className="max-h-4 mt-0.5 md:mt-0.5"
              alt=""
            />
            <span className="whitespace-nowrap text-sm">
              {numberofsections} sections
            </span>
          </div>
        </div>
        <div className="ml-2 mt-0.5">
         {renderRating(rating)}
        </div>
      </div>
      <div className="flex justify-between pt-1 px-2">
        <div className="flex gap-2 text-sm">
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
