import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center m-auto px-[10px] justify-between">
        <a className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/navbarIcons/avatar.png"
            alt="avatar"
            priority
            width={45}
            height={45}
            className="cursor-pointer"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Diu Nguyen
          </span>
        </a>

        <div className="flex-grow"></div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#homepage"
              className="cursor-pointer hover:text-purple-500"
            >
              Home
            </a>
            <a href="#blog" className="cursor-pointer hover:text-purple-500">
              My Blog
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-500">
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-purple-500"
            >
              Projects
            </a>
            <a href="#contact" className="cursor-pointer hover:text-purple-500">
              Contact
            </a>
          </div>
        </div>

        <div className="flex-grow"></div>
      </div>
    </div>
  );
};

export default Navbar;
