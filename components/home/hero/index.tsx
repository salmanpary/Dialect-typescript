import React from "react";
import BulletPoints from "./BulletPoints";
import LearningButton from "../../common/button/LearningButton";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="lg:bg-gradient-to-l lg:from-wrappergrey bg-none gap-1 lg:px-20 lg:py-6 py-10 ">
      <div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around">
          <div className="flex flex-col lg:justify-center lg:items-start gap-y-10 justify-center items-center">
            <div className="lg:text-heroheading font-extrabold text-center lg:text-5xl   leading-relaxed whitespace-nowrap text-4xl flex flex-col gap-1 lg:gap-4">
              <div>Learn Coding</div>
              <div>In Malayalam</div>
            </div>
            <BulletPoints />
            <div className="block lg:hidden">
              <Image src="/images/hero.png" alt="" width={700} height={700} priority/>
            </div>
            <LearningButton />
          </div>
          <div className="hidden lg:block">
            <Image src="/images/hero.png" alt="" width={700} height={600} priority/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
