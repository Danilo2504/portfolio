"use client";
import React from "react";

function SocialCard({ content, path, onClick, svg: SvgIcon }) {
  return (
    <div className="flex items-center fill-grey gap-6">
      <SvgIcon width={30} height={30} />
      <a
        href={path}
        onClick={onClick}
        target="_blank"
        className="text-white font-rubik font-regular text-medium_small cursor-pointer ease-in-color hover:text-main"
      >
        {content}
      </a>
    </div>
  );
}

export default SocialCard;
