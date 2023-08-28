"use client";
import React, { useEffect, useState } from "react";
import SocialItem from "./Common/SocialItem";
import { socialLinks } from "../Data/socialLinks";
import { copyToClipboard } from "../Utils/copyToClipboard";

function SideBars() {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        setIsHide(intersecting);
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const footer = document.getElementById("footer");
    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  function Leftbar() {
    return (
      <div
        className={`h-2/4 pl-8 fixed left-0 bottom-0 z-40 transition-opacity ${
          isHide ? "fade-hidden" : "fade-visible"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center flex-initial gap-8">
          {socialLinks.map(({ id, path, svg }) => {
            return <SocialItem key={id} path={path} svg={svg} hasLink />;
          })}
          <div className="border-l-2 border-grey h-full" />
        </div>
      </div>
    );
  }

  function Rightbar() {
    return (
      <div
        className={`h-2/4 pr-8 fixed right-0 bottom-0 z-40 transition-opacity ${
          isHide ? "fade-hidden" : "fade-visible"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center flex-initial gap-8">
          <a
            onClick={() => copyToClipboard("danilobautista2004@gmail.com")}
            className="hover:text-main cursor-pointer ease-in-color writing-vertical w-5 text-grey text-small font-poppins font-regular tracking-widest"
          >
            danilobautista2004@gmail.com
          </a>
          <div className="border-l-2 border-grey top-0 h-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center">
      <Leftbar />
      <Rightbar />
    </div>
  );
}

export default SideBars;
