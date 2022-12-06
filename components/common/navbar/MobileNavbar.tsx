import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const MobileNavbar = ({ navbarlogo }: { navbarlogo: string }) => {
  const [show, setshow] = useState(false);
  const OpenMenu = () => {
    setshow((show) => !show);
  };
  const setMenu = (isopen: boolean) => {
    if (isopen) {
      return "block";
    } else {
      return "hidden";
    }
  };
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
  const router = useRouter();
  return (
    <div className=" bg-white">
      <div className="shadow-md p-2 rounded-sm">
        <div className="flex justify-between px-3 py-1">
          <Image
            src={navbarlogo}
            width={120}
            height={35}
            alt=""
            priority
            quality={100}
            onClick={() => router.push("/")}
          />
          {show ? (
            <Image
              src="/icons/navbarclose.svg"
              alt=""
              width={21}
              height={21}
              onClick={OpenMenu}
            />
          ) : (
            <Image
              src={"/icons/navbaropen.svg"}
              alt=""
              width={25}
              height={25}
              onClick={OpenMenu}
            />
          )}
        </div>
        <div className={`${setMenu(show)}`}>
          <ul className="p-1">
            {NavbarData.map((data, index) => {
              return (
                <li
                  className={`${
                    router.pathname === data.link
                      ? "text-green font-bold rounded-md "
                      : ""
                  } hover:bg-slate-100 py-2 px-1 font-semibold`}
                  onClick={() => router.push(data.link)}
                  key={index}
                >
                  {data.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
