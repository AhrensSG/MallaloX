"use client";
import { Dancing, EB, Noto } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({
  carta,
  setCarta,
  menu,
  setMenu,
  bodega,
  setBodega,
  bebidas,
  setBebidas,
  tardeo,
  setTardeo,
  postres,
  setPostres,
  cafes,
  setCafes,
  handleMenu,
}) => {
  return (
    <nav className="space-y-6">
      <div className="w-full flex flex-row justify-center items-center gap-3">
        <Link href={"/"}>
          <Image
            src={"/Logo.svg"}
            width={40}
            height={39}
            alt="Mallalo X Logo"
          />
        </Link>
        <Link href={"/"}>
          <h1 className={`${Noto.className} font-bold text-gray text-2xl`}>
            MALLALO X
          </h1>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center gap-4">
        <Image src={"/Line.svg"} width={60} height={1} alt="Line" />
        <h2 className={`${Dancing.className} text-4xl`}>Bienvenidos</h2>
        <Image src={"/Line.svg"} width={60} height={1} alt="Line" />
      </div>
      <div className="w-full grid place-items-center px-2">
        <div className="flex flex-wrap gap-3 max-w-[353px]">
          <button
            onClick={() => handleMenu(true, setCarta)}
            className={`${EB.className} ${
              carta
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Carta
          </button>
          <button
            onClick={() => handleMenu(true, setMenu)}
            className={`${EB.className} font-bold ${
              menu
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Menu
          </button>
          <button
            onClick={() => handleMenu(true, setBodega)}
            className={`${EB.className} font-bold ${
              bodega
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Bodega
          </button>
          <button
            onClick={() => handleMenu(true, setBebidas)}
            className={`${EB.className} font-bold ${
              bebidas
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Bebidas
          </button>
          <button
            onClick={() => handleMenu(true, setTardeo)}
            className={`${EB.className} font-bold ${
              tardeo
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Tardeo
          </button>
          <button
            onClick={() => handleMenu(true, setPostres)}
            className={`${EB.className} font-bold ${
              postres
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Postre
          </button>
          <button
            onClick={() => handleMenu(true, setCafes)}
            className={`${EB.className} font-bold ${
              cafes
                ? "text-lightBrown border-2 border-lightBrown"
                : "border-2 border-transparent"
            } transition duration-300 text-base py-0.5 px-2 rounded-lg uppercase`}
          >
            Cafes
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
