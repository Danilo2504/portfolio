"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contactLinks, socialLinks } from "../Data/socialLinks";
import { optionTexts } from "../Data/optionsTexts";
import ListOption from "./Common/ListOption";
import SocialItem from "./Common/SocialItem";

function Footer() {
  return (
    <div id="footer" className="bg-secondary flex justify-center z-40">
      <div className="h-[250px] w-full mx-auto px-32 py-12 max-w-[1512px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <Link href="#home-page">
            <Image
              src="/logo.svg"
              width={250}
              height={50}
              alt="Logo de portafolio"
            />
          </Link>
          <ul className="max-w-[460px] w-full flex justify-between items-center">
            {contactLinks.map(({ text, svg }, index) => {
              return <SocialItem key={index} svg={svg} text={text} />;
            })}
            {socialLinks.map(({ path, svg }, index) => {
              return <SocialItem key={index} path={path} svg={svg} hasLink />;
            })}
          </ul>
        </div>
        <ul className="flex justify-between items-center text-white text-medium_small">
          {optionTexts.map(({ path, label }, index) => {
            return <ListOption key={index} path={path} label={label} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
