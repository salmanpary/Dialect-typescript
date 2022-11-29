import React from "react";
interface Props 
{
  text:string;
  redirecturl:string;
}
const GetEarlyAccess = ({ text, redirecturl }:Props) => {
  return (
    <>
      <a
        className="text-green bg-white rounded-[80px] px-8 h-14 flex justify-center items-center shadow-2xl shadow-gray-500 md:w-[100%] cursor-pointer hover:bg-blue hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
        href={redirecturl}
        target="blank"
      >
        <span className=" font-extrabold text-sm">{text}</span>
      </a>
    </>
  );
};

export default GetEarlyAccess;
