import Git from "@/app/Icons/Git";
import Share from "@/app/Icons/Share";
import Image from "next/image";
import React from "react";
import Spacer from "./Spacer";
import Link from "next/link";

function ProjectCard({
  isReversed,
  title,
  description,
  techs,
  imagePath,
  repoPath,
  projectPath,
}) {
  return (
    <div className="grid grid-cols-2 h-[350px] w-full relative">
      <div className="flex items-center">
        {isReversed ? (
          <div className="absolute left-9">
            <Image
              src={imagePath}
              alt="Imagen del sitio web de la suiza"
              width={561}
              height={335}
            />
          </div>
        ) : (
          <div className="z-20 w-[26rem] flex-initial flex flex-col justify-between p-6 font-poppins text-white bg-secondary absolute left-8">
            <div className="flex flex-row flex-nowrap gap-x-5 justify-between items-start">
              <div className="flex flex-row flex-wrap">
                <h3 className="font-medium text-medium">{title}</h3>
              </div>
              <div className="flex gap-3 items-center ml-4">
                <Link href={repoPath} target="_blank" className="link-svg">
                  <Git width={20} height={20} />
                </Link>
                <Link href={projectPath} target="_blank" className="link-svg">
                  <Share />
                </Link>
              </div>
            </div>
            <Spacer paddingY={10} />
            <p className="font-regular text-card_text text-white_secondary max-h-20">
              {description}
            </p>
            <Spacer paddingY={25} />
            <div className="flex flex-row flex-nowrap items-center justify-between gap-x-5 font-medium text-small text-grey">
              {techs.map((item, index) => {
                return <h6 key={index}>{item}</h6>;
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center">
        {isReversed ? (
          <div className="z-20 w-[26rem] flex-initial flex flex-col justify-between p-6 font-poppins text-white bg-secondary absolute right-9">
            <div className="flex flex-row flex-nowrap gap-x-5 justify-between items-start">
              <div className="flex flex-row flex-wrap">
                <h3 className="font-medium text-medium">{title}</h3>
              </div>
              <div className="flex gap-3 items-center ml-4">
                <Link href={repoPath} target="_blank" className="link-svg">
                  <Git width={20} height={20} />
                </Link>
                <Link href={projectPath} target="_blank" className="link-svg">
                  <Share />
                </Link>
              </div>
            </div>
            <Spacer paddingY={10} />
            <p className="font-regular h-full text-card_text text-white_secondary max-h-20">
              {description}
            </p>
            <Spacer paddingY={25} />
            <div className="flex flex-row flex-nowrap items-center justify-between gap-x-5 font-medium text-small text-grey">
              {techs.map((item, index) => {
                return <h6 key={index}>{item}</h6>;
              })}
            </div>
          </div>
        ) : (
          <div className="absolute right-8">
            <Image
              src={imagePath}
              alt="Imagen del sitio web de la suiza"
              width={561}
              height={335}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
