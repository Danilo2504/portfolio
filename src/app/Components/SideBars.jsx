"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SocialItem from "./Common/SocialItem";
import { socialLinks } from "../Data/socialLinks";

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

  function Rightbar() {
    return (
      <div
        className={`h-2/4 pr-8 fixed right-0 bottom-0 flex flex-col justify-center items-center flex-initial ${
          isHide
            ? "translate-y-full ease-out duration-300"
            : "translate-y-0 ease-in duration-200"
        }`}
      >
        <ul className="flex flex-col flex-initial gap-8">
          <li className="flex justify-center text-grey text-small font-poppins font-regular">
            <Link
              href="#"
              className="hover:text-main transition-colors writing-vertical w-5"
            >
              danilobautista2004@gmail.com
            </Link>
          </li>

          <li className="flex justify-center">
            <div className="border-l-2 border-grey h-[60px]" />
          </li>
        </ul>
      </div>
    );
  }
  function Leftbar() {
    return (
      <div
        className={`h-2/4 pl-8 fixed left-0 bottom-0 flex flex-col justify-center items-center flex-initial ${
          isHide
            ? "translate-y-full ease-out duration-300"
            : "translate-y-0 ease-in duration-200"
        }`}
      >
        <ul className="flex flex-col flex-initial gap-8">
          {socialLinks.slice(2, 4).map(({ id, path, svg }) => {
            return <SocialItem key={id} path={path} svg={svg} />;
          })}
          <li className="flex justify-center">
            <div className="border-l-2 border-grey h-[220px]" />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex justify-center z-30">
      <Leftbar />
      <Rightbar />
    </div>
  );
}

export default SideBars;