import Link from "next/link";
import React from "react";

function ListOption({ path, label }) {
  return (
    <li className="hover:text-main whitespace-nowrap font-rubik font-regular transition-all">
      <Link rel="noopener noreferrer" href={path}>
        {label}
      </Link>
    </li>
  );
}

export default ListOption;
