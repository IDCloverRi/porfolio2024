import React from "react";
import HomeContent from "../sub/HomeContent";

const HomePage = () => {
  return (
    <section id="homepage" className="relative flex flex-col w-full ">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="rotate-100 absolute  top-[-80px] left-0  w-full  object-cover"
      >
        <source src="/galaxy.webm" type="video/webm" />
      </video>

      <HomeContent />
    </section>
  );
};

export default HomePage;
