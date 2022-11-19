import React from "react";
import CourseLaptopPage from "./CourseLaptopPage";
import CourseMobilePage from "./CourseMobilePage";
const CoursePage = () => {
  return (
    <>
      <div className="hidden lg:block">
        <CourseLaptopPage />
      </div>
      <div className="block lg:hidden">
        <CourseMobilePage />
      </div>
    </>
  );
};

export default CoursePage;
