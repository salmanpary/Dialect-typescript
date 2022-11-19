import React from "react";
import Tick from "../../common/icon/Tick";
const BulletPoints = () => {
  const bulletPoints = [
    "Learn from Senior Developers",
    "Become a Developer in 6 Months",
    "Make Yourself employment ready",
  ];

  return (
    <div className="flex flex-col space-y-5 ">
      {bulletPoints.map((detail, index) => {
        return (
          <div key={index} className="flex sm:space-x-2 space-x-8">
            <Tick />

            <div key={index} className="text-herodetails text-grey">
              {detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BulletPoints;
