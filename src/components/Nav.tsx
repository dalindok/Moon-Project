import React from "react";
import logo from "../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigation = useNavigate();
  const onNavigateTree = (link: string) => {
    navigation(link, { replace: true });
  };

  const menu = [
    { page: "Home", link: "/" },
    { page: "About", link: "/about" },
    { page: "Q&As", link: "/questionPage" },
    { page: "Profile", link: "/profile" },
  ];
  return (
    <div className="px-5 justify-between flex md:px-4 sm:px-20 lg:px-10 shadow-lg sticky h-[80px]">
      <img
        className="w-[70px] object-cover sm:w-[120px]"
        src={logo}
        alt="Logo"
      />
      <div className="font-zain flex font-bold px-0 text-[20px] sm:px-10 lg:text-[25px]">
        {menu.map((item, index) => {
          return (
            <button
              onClick={() => onNavigateTree(item.link)}
              className="px-2 sm:px-5"
            >
              {item.page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
