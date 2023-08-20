import React from "react";
import Link from "next/link";

function ListOption({ path, label }) {
  return (
    <li className="hover:text-main whitespace-nowrap font-rubik leading-medium font-regular transition-colors">
      <Link rel="noopener noreferrer" href={path}>
        {label}
      </Link>
    </li>
  );
}

export default ListOption;
