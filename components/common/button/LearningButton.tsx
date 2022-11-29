import React, { useEffect } from "react";
interface ButtonProps {
  text: string;
  redirecturl: string;
}
const LearningButton = ({ text, redirecturl }: ButtonProps) => {
  return (
    <>
      <a href={redirecturl}>
        <button
          className={`bg-green rounded-[80px] px-8 h-14 flex justify-center items-center shadow-2xl shadow-gray-500 md:w-[100%] cursor-pointer hover:bg-blue transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
        >
          <span className="text-white font-extrabold text-sm">{text}</span>
        </button>
      </a>
    </>
  );
};

export default LearningButton;
