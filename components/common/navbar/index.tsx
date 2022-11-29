import React from "react";
import MobileNavbar from "./MobileNavbar";
import LaptopNavbar from "./LaptopNavbar";

const Navbar = ({ navbarlogo }: { navbarlogo: string }) => {
  return (
    <>
      <div className="lg:hidden sticky top-0 z-50">
        <MobileNavbar navbarlogo={navbarlogo} />
      </div>
      <div className="hidden lg:block">
        <LaptopNavbar navbarlogo={navbarlogo} />
      </div>
    </>
  );
};

export default Navbar;
