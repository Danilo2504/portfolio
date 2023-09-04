import React from "react";
import Link from "next/link";
import useTranslation from "@/app/Hooks/useTranslation";

function ListOption({ path, label, isActive }) {
  const { t } = useTranslation();
  return (
    <li
      className={`whitespace-nowrap font-rubik leading-medium font-regular hover:text-main ease-in-color ${
        isActive ? "text-main" : "text-white"
      }`}
    >
      <Link href={path}>{t(label)}</Link>
    </li>
  );
}

export default ListOption;
