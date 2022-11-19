import React from "react";
interface CourseDescriptionProps {
  coursedescription: string[];
  requirements: string[];
  whatyouwilllearn: string[];
}
const CourseDescription = ({
  coursedescription,
  requirements,
  whatyouwilllearn,
}: CourseDescriptionProps) => {
  return (
    <div>
      <h1 className="font-extrabold text-2xl py-2">Course Description</h1>
      {coursedescription.map((item, index) => {
        return (
          <p
            className="font-semibold text-base text-courseheading sm:pr-28 py-2 leading-7"
            key={index}
          >
            {item}
          </p>
        );
      })}
      <h1 className="font-extrabold text-base py-2">Requirements:</h1>
      <ul className="list-disc list-inside py-1 text-base">
        {requirements?.map((item, index) => {
          return (
            <li key={index} className="py-2">
              {item}
            </li>
          );
        })}
      </ul>
      <h1 className="font-bold text-2xl py-2">What you will learn</h1>
      <ul className="list-disc list-inside text-base">
        {whatyouwilllearn?.map((item, index) => {
          return (
            <li key={index} className="py-2">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseDescription;
