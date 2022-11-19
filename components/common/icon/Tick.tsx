import React from "react";
import Image from "next/image";
const Circle = () => {
  return (
    <div className="bg-blue rounded-full w-6 h-6 flex justify-center items-center">
      <Image src="/icons/tick.svg" width={8.5} height={6} alt="load.." />
    </div>
  );
};

export default Circle;
