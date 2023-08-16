import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const NavbarOption = ({ label }) => {
    return (
      <li className="hover:text-main whitespace-nowrap font-bold">
        <Link href="#">{label}</Link>
      </li>
    );
  };

  return (
    <div className="z-50 flex justify-center fixed top-0 right-0 left-0">
      <div className="bg-secondary h-20 w-full mx-auto px-32 max-w-[1512px] flex justify-between items-center">
        <div className="min-w-[300px] inline-flex justify-start">
          <Link href="#">
            <Image
              src="/logo.svg"
              width={250}
              height={50}
              alt="Logo de portafolio"
            />
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-14 font-sans text-white text-medium_small">
          <NavbarOption label={"Inicio"} />
          <NavbarOption label={"Sobre Mi"} />
          <NavbarOption label={"Proyectos"} />
          <li>
            <div className="bg-transparent px-4 py-1 rounded-sm border border-main hover:text-main transition-all">
              <Link className="cursor-pointer" href="#">
                Contactos
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
