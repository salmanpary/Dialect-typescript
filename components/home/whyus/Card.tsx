import React, { useEffect } from "react";
import { FaBusinessTime } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import Image from "next/image";
interface Props {
  heading: string;
  content: string;
  icon: string;
  index: number;
}

const Card = ({ heading, content, icon, index }: Props) => {
  const switchbetweengreenandblue = (index: number) => {
    if (index % 4 === 0) {
      return "bg-blue";
    } else if (index % 4 === 1) {
      return "bg-green";
    } else if (index % 4 === 2) {
      return "bg-green";
    } else {
      return "bg-blue";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full shadow-md rounded-2xl bg-white p-7 sm:w-[500px] sm:h-[202px] ">
      <div className="flex  flex-col  justify-center items-center text-center gap-y-5 sm:gap-x-4 sm:text-left sm:items-start sm:justify-start sm:flex-row  sm:gap-y-0">
        <div
          className={`rounded-full ${switchbetweengreenandblue(
            index
          )} w-14 h-14 flex justify-center items-center mt-2`}
        >
          <Image src={icon} width={28} height={28} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl font-extrabold text-center sm:text-left">
            {heading}
          </div>
          <div className="w-[30ch] text-base sm:text-lg text-center sm:text-left  ">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
