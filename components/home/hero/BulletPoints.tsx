import React from "react";
import Tick from "../../common/icon/Tick";

const BulletPoints = ({ points }: { points: string[] }) => {
  return (
    <div className="flex flex-col space-y-5 ">
      {points?.map((detail, index) => {
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
