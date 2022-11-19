import React from "react";
import MobileNavbar from "./MobileNavbar";
import LaptopNavbar from "./LaptopNavbar";
const Navbar = () => {
  return (
    <>
      <div className="lg:hidden sticky top-0 z-50">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <LaptopNavbar />
      </div>
    </>
  );
};

export default Navbar;
