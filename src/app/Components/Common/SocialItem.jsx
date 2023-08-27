import React from "react";
import Link from "next/link";

function SocialItem({ path, svg: SvgIcon }) {
  return (
    <li>
      <Link rel="noopener noreferrer" href={path} className="link-svg">
        <SvgIcon width={30} height={30} />
      </Link>
    </li>
  );
}

export default SocialItem;
