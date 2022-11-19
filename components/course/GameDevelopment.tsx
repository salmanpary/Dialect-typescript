import React, { useEffect } from "react";
import CourseDescription from "./CourseDescription";
import CourseDetails from "./CourseDetails";
import CoursePrice from "./CoursePrice";
import Coursesdata from "./data/Coursesdata";
import { useRouter } from "next/router";
import Image from "next/image";
//declare type of coursedata
interface courseDetails {
  bannerimage: string;
  coursedetails: {
    title: string;
    description: string;
    duration: {
      hours?: number;
      minutes?: number;
    };
    lessons: number;
    instructor: string;
    language: string;
  };
  courseprice: {
    imageurl: string;
    discountprice: number;
    price: number;
    hours?: number;
    minutes?: number;
    sections: number;
    includes: {
      imageurl: string;
      heading: string;
    }[];
  };
  coursedescription: {
    description: string[];
    requirements: string[];
    whatyouwilllearn: string[];
  };
}
const GameDevelopment = () => {
  const router = useRouter();
  const [coursedata, setcoursedata] = React.useState<courseDetails | null>(
    null
  );
  useEffect(() => {
    if (router.query.courses) {
      setcoursedata(
        Coursesdata.coursedetails[
          router.query.courses as keyof typeof Coursesdata.coursedetails
        ]
      );
    }
  }, [router.query.courses]);
  return (
    <>
      {coursedata ? (
        <div className="px-20 pt-4">
          <div className="">
            <div className="relative">
              <Image
                fill
                className="object-center object-cover pointer-events-none rounded-lg -z-20"
                src={coursedata.bannerimage}
                alt=""
              />
              <div className="relative z-1 py-20 px-10">
                <CourseDetails
                  title={coursedata.coursedetails.title}
                  description={coursedata.coursedetails.description}
                  duration={coursedata.coursedetails.duration}
                  lessons={coursedata.coursedetails.lessons}
                  instructor={coursedata.coursedetails.instructor}
                  language={coursedata.coursedetails.language}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="basis-3/4 pt-8">
              <CourseDescription
                coursedescription={coursedata.coursedescription.description}
                requirements={coursedata.coursedescription.requirements}
                whatyouwilllearn={coursedata.coursedescription.whatyouwilllearn}
              />
            </div>
            <div className="mt-[-100px] mr-2">
              <CoursePrice
                price={coursedata.courseprice.price}
                discountprice={coursedata.courseprice.discountprice}
                hours={coursedata.courseprice.hours}
                minutes={coursedata.courseprice.minutes}
                sections={coursedata.courseprice.sections}
                imageurl={coursedata.courseprice.imageurl}
                includes={coursedata.courseprice.includes}
              />
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default GameDevelopment;
