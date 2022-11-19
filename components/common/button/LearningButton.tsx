import React, { useEffect } from "react";
const LearningButton = () => {
  return (
    <>
      <a href="https://gocollabo.typeform.com/to/foNXRbPs">
        <button
          className={`bg-green rounded-[80px] px-8 h-14 flex justify-center items-center shadow-2xl shadow-gray-500 md:w-[100%] cursor-pointer hover:bg-blue transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
        >
          <span className="text-white font-extrabold text-sm">
            Start Learning
          </span>
        </button>
      </a>
    </>
  );
};

export default LearningButton;
