import React from "react";
import Image from "next/image";
import Link from "next/link";
import { optionTexts } from "../Data/optionsTexts";
import { socialLinks } from "../Data/SocialLinks";
import ListOption from "./Common/ListOption";

function Footer() {
  const SocialItem = ({ path, svg: SvgIcon }) => {
    return (
      <li>
        <Link rel="noopener noreferrer" href={path}>
          <SvgIcon />
        </Link>
      </li>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="bg-secondary h-[250px] w-full mx-auto px-32 py-12 max-w-[1512px] flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <Link href="#">
            <Image
              src="/logo.svg"
              width={250}
              height={50}
              alt="Logo de portafolio"
            />
          </Link>
          <ul className="max-w-[540px] w-full flex justify-between items-center">
            {socialLinks.map(({ id, path, svg }) => {
              return <SocialItem key={id} path={path} svg={svg} />;
            })}
          </ul>
        </div>
        <ul className="flex justify-between items-center text-white text-medium_small">
          {optionTexts.map(({ id, path, label }) => {
            return <ListOption key={id} path={path} label={label} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
