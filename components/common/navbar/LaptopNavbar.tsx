import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const LaptopNavbar = ({ navbarlogo }: { navbarlogo: string }) => {
  const router = useRouter();
  const NavbarData = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "COURSES",
      link: "/courses",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "CONTACT US",
      link: "/contact",
    },
  ];
  return (
    <div
      className={
        router.pathname.includes("courses")
          ? " "
          : "bg-gradient-to-l from-wrappergrey"
      }
    >
      <nav>
        <div className="flex justify-between pt-2 px-36">
          <div className="cursor-pointer">
            <Image
              src={navbarlogo}
              width={180}
              height={180}
              alt=""
              quality={100}
              priority
              onClick={() => {
                router.push("/");
              }}
            />
          </div>

          <ul className="flex justify-between items-center gap-8 font-semibold text-base">
            {NavbarData.map((navbardata, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <li
                    className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue"
                    onClick={() => {
                      router.push(navbardata.link);
                    }}
                  >
                    {navbardata.name}
                  </li>
                  <div
                    className={` w-4 h-1 ${
                      router.pathname == navbardata.link
                        ? "bg-blue"
                        : "bg-transparent"
                    }`}
                  ></div>
                </div>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LaptopNavbar;
