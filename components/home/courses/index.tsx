import React from "react";
import CourseCard from "./CourseCard";
interface CoursePropsType {
  slug: string;
  homepageImage: {
    url: string;
  };
  coursename: string;
  instructor: string;
  hours: number;
  minutes: number;
  numberofsections: number;
  discountprice: string;
  originalprice: string;
  rating: number;
}
const CoursesToGetYouStarted = ({
  courses,
  coursetitle,
}: {
  courses: CoursePropsType[];
  coursetitle: string;
}) => {
  return (
    <>
      <div className="mt-10">
        <div className="pb-10 text-center">
          <h1 className="font-extrabold text-2xl sm:text-4xl text-courseheading">
            {coursetitle}
          </h1>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {courses.map((item, index) => {
            return (
              <CourseCard
                key={item.slug}
                imageurl={item?.homepageImage}
                heading={item.coursename}
                instructor={item.instructor}
                time={{
                  hours: item.hours,
                  minutes: item.minutes,
                }}
                sections={item.numberofsections}
                discountprice={item.discountprice}
                price={item.originalprice}
                path={item.slug}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoursesToGetYouStarted;
