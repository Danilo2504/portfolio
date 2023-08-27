import React from "react";
import Link from "next/link";

function ListOption({ path, label, isActive }) {
  return (
    <li
      className={`whitespace-nowrap font-rubik leading-medium font-regular hover:text-main ease-in-color ${
        isActive ? "text-main" : "text-white"
      }`}
    >
      <Link rel="noopener noreferrer" href={path}>
        {label}
      </Link>
    </li>
  );
}

export default ListOption;
