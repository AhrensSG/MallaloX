"use client";
import Bebidas from "@/components/bebidas/Bebidas";
import Bodega from "@/components/bodega/Bodega";
import Carta from "@/components/carta/Carta";
import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import Postres from "@/components/postres/Postres";
import Tardeo from "@/components/tardeo/Tardeo";
import React, { useState } from "react";
import { Toaster } from "sonner";

const MenuES = () => {
  const [carta, setCarta] = useState(true);
  const [menu, setMenu] = useState(false);
  const [bodega, setBodega] = useState(false);
  const [bebidas, setBebidas] = useState(false);
  const [tardeo, setTardeo] = useState(false);
  const [postres, setPostres] = useState(false);
  const [cafes, setCafes] = useState(false);

  const handleMenu = (value, setValue) => {
    setCarta(false);
    setMenu(false);
    setBodega(false);
    setBebidas(false);
    setTardeo(false);
    setPostres(false);
    setCafes(false);

    setValue(value);
  };

  return (
    <main className="w-full min-h-screen py-5 space-y-4">
      <Toaster richColors position="bottom-center"/>
      <Navbar
        carta={carta}
        setCarta={setCarta}
        menu={menu}
        setMenu={setMenu}
        bodega={bodega}
        setBodega={setBodega}
        bebidas={bebidas}
        setBebidas={setBebidas}
        tardeo={tardeo}
        setTardeo={setTardeo}
        postres={postres}
        setPostres={setPostres}
        cafes={cafes}
        setCafes={setCafes}
        handleMenu={handleMenu}
      />
      <div className="px-2">
        {carta === true ? <Carta /> : null}
        {carta === true ? <Carta /> : null}
        {menu === true ? <Menu /> : null}
        {bodega === true ? <Bodega /> : null}
        {bebidas === true ? <Bebidas /> : null}
        {postres === true ? <Postres /> : null}
        {tardeo === true ? <Tardeo /> : null}
      </div>
    </main>
  );
};

export default MenuES;
