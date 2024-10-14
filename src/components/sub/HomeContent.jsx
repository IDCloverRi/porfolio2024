"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const HomeContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" flex flex-row items-center justify-center px-20 mt-40 w-full z-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop} className="">
          <h1 className="text-gradient">Hi, I&apos;m Diu Nguyen!</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.1)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto "
        >
          <span>
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              {" "}
              my personal{" "}
            </span>
            blog
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Web Developer focused on building dynamic web
          applications that enhance user experiences. Explore my skills and
          projects as I share my journey through the world of programming and
          life
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px]"
          href="#contact"
        >
          Let&apos;s talk!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HomeContent;
