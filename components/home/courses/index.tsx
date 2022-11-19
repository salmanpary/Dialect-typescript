import React from "react";
import CourseCard from "./CourseCard";
const CoursesToGetYouStarted = () => {
  const CourseData = [
    {
      imageurl: "/images/game.jpg",
      heading: "Complete C# Unity Game Developer 2D",
      instructor: "Prince",
      time: {
        hours: 18,
        minutes: 17,
      },
      sections: 5,
      discountprice: 1800,
      price: 1400,
      path: "courses/unity",
    },
    {
      imageurl: "/images/python.jpg",
      heading: "A complete guide to python",
      instructor: "Manu Prasad",
      time: {
        hours: 1,
        minutes: 30,
      },
      sections: 24,
      discountprice: 1800,
      price: 1400,
      path: "courses/python",
    },
    {
      imageurl: "/images/flutter.png",
      heading: "Flutter & Dart - The Complete Guide",
      instructor: "Farhan",
      time: {
        hours: 1,
        minutes: 30,
      },
      sections: 24,
      discountprice: 1800,
      price: 1400,
      path: "courses/flutter",
    },
    {
      imageurl: "/images/reactnative.jpg",
      heading: "The Complete Guide to React JS",
      instructor: "Sujith",
      time: {
        minutes: 30,
      },
      sections: 12,
      price: 1400,
      path: "courses/reactjs",
    },
    {
      imageurl: "/images/django.png",
      heading: "Python and Django Full Stack Web Developer Bootcamp ",
      instructor: "Javas",
      time: {
        minutes: 30,
      },
      sections: 12,
      discountprice: 1800,
      price: 1400,
      path: "courses/django",
    },
    {
      imageurl: "/images/nodejs.png",
      heading: "Learn and Understand Node.js",
      instructor: "Javas",
      time: {
        minutes: 30,
      },
      sections: 12,
      price: 1400,
      path: "courses/nodejs",
    },
  ];
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center gap-3 pb-10 text-center">
          <h1 className="font-extrabold text-2xl sm:text-4xl text-courseheading">
            Courses To Get You Started
          </h1>
          <div className="text-sm">
            <h2>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
          </div>
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
