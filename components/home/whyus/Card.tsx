import React, { useEffect } from "react";
import { FaBusinessTime } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import Image from "next/image";
interface Props {
  roundcolor: string;
  heading: string;
  content: string;
  icon: string;
}

const Card = ({ roundcolor, heading, content, icon }: Props) => {
  const [color, setcolor] = React.useState(roundcolor);
  const [iconname, seticonname] = React.useState(icon);
  const [iconcomponent, seticoncomponent] =
    React.useState<React.ReactNode>(null);
  useEffect(() => {
    if (roundcolor === "blue") {
      setcolor("bg-blue");
    }
    if (roundcolor === "green") {
      setcolor("bg-green");
    }
    switch (icon) {
      case "businesstime":
        seticoncomponent(<FaBusinessTime className="text-white" size={25} />);
        break;
      case "person":
        seticoncomponent(<BsFillPersonFill className="text-white" size={25} />);
        break;
      case "certificate":
        seticoncomponent(<TbCertificate className="text-white" size={25} />);
        break;
      case "time":
        seticoncomponent(
          <AiOutlineFieldTime className="text-white" size={25} />
        );
        break;
      case "book":
        seticoncomponent(<FaBookReader className="text-white" size={25} />);
        break;
      case "transalate":
        seticoncomponent(
          <Image src="/icons/transalate.svg" width={35} height={35} alt="" />
        );
    }
  }, [iconname, roundcolor, heading, content,icon]);
  return (
    <div className="flex flex-col justify-center items-center w-full shadow-md rounded-2xl bg-white p-7 sm:w-[500px] sm:h-[202px] ">
      <div className="flex  flex-col  justify-center items-center text-center gap-y-5 sm:gap-x-4 sm:text-left sm:items-start sm:justify-start sm:flex-row  sm:gap-y-0">
        <div
          className={`rounded-full ${color} w-14 h-14 flex justify-center items-center mt-2`}
        >
          {iconcomponent}
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
