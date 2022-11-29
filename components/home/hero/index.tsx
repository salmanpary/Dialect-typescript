import React from "react";
import BulletPoints from "./BulletPoints";
import LearningButton from "../../common/button/LearningButton";
import Image from "next/image";
interface headerinfo {
  tagline1: string;
  tagline2: string;
  points: string[];
  image: {
    url: string;
    description: string;
  };
  buttontext: string;
  redirectUrl: string;
}
const Hero = ({ headerinfo }: { headerinfo: headerinfo }) => {
  return (
    <div className="lg:bg-gradient-to-l lg:from-wrappergrey bg-none gap-1 lg:px-20 lg:py-6 py-10 ">
      <div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around">
          <div className="flex flex-col lg:justify-center lg:items-start gap-y-10 justify-center items-center">
            <div className="lg:text-heroheading font-extrabold text-center lg:text-5xl   leading-relaxed whitespace-nowrap text-4xl flex flex-col gap-1 lg:gap-4">
              <div>{headerinfo.tagline1}</div>
              <div>{headerinfo.tagline2}</div>
            </div>
            <BulletPoints points={headerinfo.points} />
            <div className="block lg:hidden">
              <Image
                src={headerinfo.image.url}
                alt={headerinfo.image.description}
                width={700}
                height={700}
                priority
              />
            </div>
            <LearningButton
              text={headerinfo.buttontext}
              redirecturl={headerinfo.redirectUrl}
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src={headerinfo?.image?.url}
              alt=""
              width={550}
              height={550}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
