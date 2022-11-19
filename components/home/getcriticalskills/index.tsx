import React from "react";
import GetEarlyAccess from "../../common/button/GetEarlyAccess";
import Image from "next/image";
const GetCritical = () => {
  return (
    <>
      <div className="sm:px-28">
        <div className="  bg-green  sm:h-[23.375rem] rounded-2xl flex flex-col justify-center items-center text-center mt-10 w-auto h-auto p-10">
          <div className="relative">
            <Image
              src="/icons/smalldots.svg"
              alt=""
              width={148}
              height={148}
              className="absolute top-[-2rem] left-[-7rem] hidden md:block"
            />
            <Image
              src="/icons/smalldots.svg"
              alt=""
              width={250}
              height={250}
              className="absolute bottom-[-9rem]  right-[-10rem] hidden lg:block"
            />

            <div className="flex justify-center items-center flex-col gap-y-8">
              <div className="text-white font-extrabold md:text-4xl lg:text-[3.5rem] text-2xl">
                Get critical career skills
              </div>
              <div className="text-white sm:w-[40ch] w-[30ch]">
                Take the next step toward your personal and professional goals
                with Dialect..
              </div>
              <div>
                <GetEarlyAccess />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default GetCritical;
