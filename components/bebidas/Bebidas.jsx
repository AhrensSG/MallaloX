import { Abhaya } from "@/fonts";
import React, { useState } from "react";
import BebidasList from "@/food/bebidas/BebidasBebidas";
import CocktailList from "@/food/bebidas/BebidasCocktail";
import BebidasCard from "../cards/BebidasCard";
import CervezasMenu from "./CervezasMenu";

const Bebidas = () => {
  const [bebidas, setBebidas] = useState(true);
  const [cocktail, setCocktail] = useState(false);
  const [cervezas, setCervezas] = useState(false);

  const handleSubMenu = (value, setValue) => {
    setBebidas(false);
    setCocktail(false);
    setCervezas(false);

    setValue(value);
  };

  return (
    <div className="divide-y divide-lightBrown space-y-3">
      <div className="flex justify-between items-center ">
        <button
          onClick={() => handleSubMenu(true, setBebidas)}
          className={`${Abhaya.className} ${
            bebidas
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Bebidas
        </button>
        <button
          onClick={() => handleSubMenu(true, setCocktail)}
          className={`${Abhaya.className} ${
            cocktail
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Cocktail
        </button>
        <button
          onClick={() => handleSubMenu(true, setCervezas)}
          className={`${Abhaya.className} ${
            cervezas
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Cervezas
        </button>
      </div>
      <div className="flex flex-col justify-center items-stretch w-full gap-2">
        {bebidas === true &&
          BebidasList.map((e) => {
            return (
              <BebidasCard key={e.title} title={e.title} price={e.price} />
            );
          })}

        {cocktail === true &&
          CocktailList.map((e) => {
            return (
              <BebidasCard
                key={e.title}
                title={e.title}
                price={e.price}
                bottlePrice={e.bottlePrice}
                glassPrice={e.glassPrice}
                whiteSpace={true}
              />
            );
          })}

        {cervezas === true && <CervezasMenu />}
      </div>
    </div>
  );
};

export default Bebidas;
