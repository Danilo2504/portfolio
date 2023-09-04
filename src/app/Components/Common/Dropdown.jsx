"use client";
import React, { useState, useEffect, useRef } from "react";
import useTranslation from "@/app/Hooks/useTranslation";
import ArrowDown from "@/app/Icons/ArrowDown";
import Image from "next/image";

function Dropdown({ options = [] }) {
  const { changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (selected) => {
    setSelectedOption(selected);
    changeLanguage(selected.locale);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        className="cursor-pointer flex justify-between w-full h-full items-center gap-2"
        onClick={toggleDropdown}
      >
        <Image
          src={selectedOption.imagePath}
          width={25}
          height={25}
          alt="icono del idioma seleccionado"
        />
        <ArrowDown
          color={isOpen ? "var(--main-color)" : "var(--white-color)"}
        />
      </div>
      {isOpen && (
        <ul
          className={`absolute top-full left-0 mt-[35px] list-none bg-secondary px-5 py-3 rounded-[12.5px] ${
            isOpen ? "fade-visible" : "fade-hidden"
          }`}
        >
          {options.map((item) => {
            return (
              <li
                className="cursor-pointer flex items-center gap-4 px-3 py-3 ease-in-color li-language text-white"
                key={item.id}
                onClick={() => handleOptionSelect(item)}
              >
                <div className="relative h-[25px] w-[25px]">
                  <Image
                    src={item.imagePath}
                    fill={true}
                    sizes="100vw, 50vw"
                    alt="Icono de idioma"
                  />
                </div>
                <span className="font-poppins text-medium_small font-regular">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
