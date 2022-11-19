import React,{useEffect} from "react";
import CourseDetails from "./CourseDetails";
import CoursePrice from "./CoursePrice";
import Coursesdata from "./data/Coursesdata";
import CourseDescription from "./CourseDescription";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Image from "next/image";
import { useRouter } from "next/router";
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
const CourseMobilePage = () => {

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
    {
      coursedata ?
      <>
      <Navbar />
      <div className="relative">
  <Image
    fill
    className="object-center object-cover pointer-events-none rounded-lg -z-20"
    src={coursedata.bannerimage}
    alt=""
  />
  <div className="relative z-1 py-20 px-2 sm:px-10">
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
      <div className="flex justify-center items-center p-5">
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
      <div className="flex justify-center items-center p-10">
      <CourseDescription
              coursedescription={coursedata.coursedescription.description}
              requirements={coursedata.coursedescription.requirements}
              whatyouwilllearn={coursedata.coursedescription.whatyouwilllearn}
            />
      </div>
      <Footer />
      </>
      :"loading"
    }
     
    </>
  );
};

export default CourseMobilePage;
