import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";
interface footerinfo {
  title: string;
  footerDescription: string;
}
const Footer = ({ footerinfo }: { footerinfo: footerinfo }) => {
  const router = useRouter();
  if (!footerinfo) {
    return <div>loading...</div>;
  }
  return (
    <footer
      className={`${styles.footer} flex  flex-col justify-center    rounded-lg sm:px-20 p-10 mt-10 w-full h-full `}
    >
      <div className="flex flex-col gap-y-4 ">
        <div className="font-bold text-center sm:text-left">
          {footerinfo?.title}
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 sm:justify-between sm:items-start sm:gap-y-0 sm:flex-row">
          <div className="font-medium text-base opacity-40 sm:w-[50ch] text-center w-[30ch] sm:text-left">
            {footerinfo?.footerDescription}
          </div>
          <div className="flex gap-x-[7.438rem] flex-col sm:flex-row justify-center items-center flex-wrap gap-y-4 sm:justify-evenly">
            <div className="flex sm:flex-col text-[#454545] font-medium gap-2 flex-row gap-x-20">
              <div
                className=" hover:cursor-pointer hover:text-blue transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300"
                onClick={() => router.push("/faq")}
              >
                FAQ
              </div>
              <div
                className="hover:cursor-pointer whitespace-nowrap hover:text-blue transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </div>
            </div>
            <div className="flex sm:flex-col text-[#454545] font-medium gap-2 flex-row gap-x-10">
              <div className="hover:cursor-pointer hover:text-blue transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 whitespace-nowrap">
                Privacy Policy
              </div>
              <div className=" hover:cursor-pointer whitespace-nowrap hover:text-blue transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                Terms & Conditions
              </div>
            </div>
            <div className="flex flex-col text-blue gap-4">
              <div className="whitespace-nowrap font-extrabold">
                Become a Teacher
              </div>
              <div className="flex gap-4 justify-center items-center">
                <a href="https://instagram.com/dialect_app?igshid=YmMyMTA2M2Y=">
                  <FaInstagram
                    size={20}
                    className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-green"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCRMM5N8ukDsFvRWPZQhNYuw">
                  <FaYoutube
                    size={20}
                    className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-green"
                  />
                </a>
                <FaLinkedinIn
                  size={20}
                  className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-green"
                />
                <FaFacebookMessenger
                  size={20}
                  className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-green"
                />
                <FaTwitter
                  size={20}
                  className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-green"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-footerblack text-footerelements text-center  w-[30ch] font-semibold self-center  sm:w-auto sm:text-left sm:self-start ">
          Copyright @ Dialect. All Rights Reserved --
          <a href="https://www.zartek.in/"> Made by Zartek</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
