import React from "react";
import Link from "next/link";
import { copyToClipboard } from "@/app/Utils/copyToClipboard";

function SocialItem({ path, text, svg: SvgIcon, hasLink }) {
  return (
    <li>
      {hasLink ? (
        <Link href={path} target="_blank" className="link-svg">
          <SvgIcon width={30} height={30} />
        </Link>
      ) : (
        <a onClick={() => copyToClipboard(text)} className="link-svg">
          <SvgIcon width={30} height={30} />
        </a>
      )}
    </li>
  );
}

export default SocialItem;
