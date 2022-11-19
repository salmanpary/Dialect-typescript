import React from "react";
import CourseCard from "./CourseCard";
const CoursesToGetYouStarted = () => {
  const CourseData = [
    {
      imageurl: "/images/game.jpg",
      heading: "Unity Game Development ",
      instructor: "Prince Thomas",
      time: {
        hours: 30,
      },
      sections: 5,
      discountprice: 23600,
      price: 30000,
      path: "courses/unity",
    },
    {
      imageurl: "/images/python.jpg",
      heading: "A complete guide to python",
      instructor: "Manu Prasad",
      time: {
        hours: 30,
      },
      sections: 24,
      discountprice: 23600,
      price: 30000,
      path: "courses/python",
    },
    {
      imageurl: "/images/flutter.png",
      heading: "Flutter & Dart - The Complete Guide",
      instructor: "Farhan",
      time: {
        hours: 30,
      },
      sections: 24,
      discountprice: 23600,
      price: 30000,
      path: "courses/flutter",
    },
    {
      imageurl: "/images/reactnative.jpg",
      heading: "The Complete Guide to React JS",
      instructor: "X",
      time: {
        hours: 30,
      },
      sections: 12,
      discountprice: 23600,
      price: 30000,
      path: "courses/reactjs",
    },
    {
      imageurl: "/images/django.png",
      heading: "Python and Django Full Stack Web Developer Bootcamp ",
      instructor: "Manu Prasad",
      time: {
        minutes: 30,
      },
      sections: 12,
      discountprice: 23600,
      price: 30000,
      path: "courses/django",
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="pb-10 text-center">
          <h1 className="font-extrabold text-2xl sm:text-4xl text-courseheading">
            Courses
          </h1>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {CourseData.map((item, index) => {
            return (
              <CourseCard
                key={index}
                imageurl={item.imageurl}
                heading={item.heading}
                instructor={item.instructor}
                time={item.time}
                sections={item.sections}
                discountprice={item.discountprice}
                price={item.price}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoursesToGetYouStarted;
