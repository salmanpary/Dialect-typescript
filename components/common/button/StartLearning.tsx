import React from "react";
interface ButtonProps{
  text: string;
  redirecturl: string;
}
const StartLearning = ({ text, redirecturl }:ButtonProps) => {
  return (
    <a
    href={redirecturl}
      className="bg-bluebutton flex justify-center items-center w-full py-4  text-white px-1 rounded-full hover:translate-x-1 hover:bg-green hover:-translate-y-1 hover:scale-105 shadow-xl font-bold
   "
    >
      {text}
    </a>
  );
};

export default StartLearning;
