"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { optionTexts } from "../Data/optionsTexts";
import ListOption from "./Common/ListOption";
import Dropdown from "./Common/Dropdown";
import { languageOptions } from "../Data/languageOptions";

function Navbar() {
  const [isActive, setIsActive] = useState(null);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setIsActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    const sections = document.querySelectorAll("a");

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="z-50 flex justify-center fixed top-0 right-0 left-0">
      <div className="bg-primary h-20 w-full mx-auto px-32 max-w-[1512px] flex justify-between items-center">
        <div className="min-w-[330px] gap-8 inline-flex justify-between">
          <Link href="#home-page">
            <Image
              src="/logo.svg"
              width={250}
              height={50}
              alt="Logo de portafolio"
            />
          </Link>
          <Dropdown options={languageOptions} />
        </div>
        <ul className="flex justify-between items-center gap-14 text-white text-medium_small">
          {optionTexts.slice(0, 3).map(({ id, path, label }) => {
            return (
              <ListOption
                key={id}
                path={path}
                label={label}
                isActive={isActive === id}
              />
            );
          })}
          <li>
            <div className="bg-transparent px-4 py-1 rounded-sm border border-main">
              <Link
                className={`cursor-pointer hover:text-main ease-in-color ${
                  isActive === "contact-page" ? "text-main" : "text-white"
                }`}
                href="#contact-page"
              >
                Contactos
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
