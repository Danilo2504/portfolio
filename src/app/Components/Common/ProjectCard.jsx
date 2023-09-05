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
    <div className="h-[350px] w-full flex relative items-center mt-10">
      <div
        className={`flex justify-start absolute ${
          isReversed ? "right-8" : "left-8"
        }`}
      >
        <Image
          src={imagePath}
          alt="Imagen del sitio web de la suiza"
          width={550}
          height={330}
          sizes="(max-width: 560px), 100vw"
        />
      </div>
      <div
        className={`flex justify-end absolute ${
          isReversed ? "left-8" : "right-8"
        }`}
      >
        <div className="max-w-[30rem] flex flex-col justify-between p-6 font-poppins text-white bg-secondary">
          <div className="flex flex-row flex-nowrap gap-x-5 justify-between items-center">
            <h3 className="font-medium text-medium">{title}</h3>
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
          <p className="font-regular text-card_text text-white_secondary">
            {description}
          </p>
          <Spacer paddingY={15} />
          <div className="flex items-center justify-between gap-x-5 font-medium text-small text-grey">
            {techs.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
