import React from "react";
import Link from "next/link";

function SocialItem({ path, svg: SvgIcon }) {
  return (
    <li>
      <Link rel="noopener noreferrer" href={path}>
        <SvgIcon />
      </Link>
    </li>
  );
}

export default SocialItem;
