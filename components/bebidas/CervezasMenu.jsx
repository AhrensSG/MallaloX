import { Abhaya } from "@/fonts";
import React, { useState } from "react";
import BebidasCard from "../cards/BebidasCard";
import CervezasTercioList from "@/food/bebidas/BebidasCervezasTercio";
import CervezasTiradorList from "@/food/bebidas/BebidasCervezasTirador";

const CervezasMenu = () => {
  const [tercio, setTercio] = useState(true);
  const [tirador, setTirador] = useState(false);

  const handleSubMenu = (value, setValue) => {
    setTercio(false);
    setTirador(false);

    setValue(value);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-start items-center pt-3 gap-2">
        <button
          onClick={() => handleSubMenu(true, setTercio)}
          className={`${Abhaya.className} ${
            tercio
              ? "text-wine border-2 border-wine"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Tercio
        </button>
        <button
          onClick={() => handleSubMenu(true, setTirador)}
          className={`${Abhaya.className} ${
            tirador
              ? "text-wine border-2 border-wine"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Tirador
        </button>
      </div>
      <div className="flex flex-col justify-center items-stretch w-full gap-2">
        {tercio === true &&
          CervezasTercioList.map((e) => {
            return (
              <BebidasCard key={e.title} title={e.title} price={e.price} />
            );
          })}
        {tirador === true &&
          CervezasTiradorList.map((e) => {
            return (
              <BebidasCard
                key={e.title}
                title={e.title}
                price={false}
                draft={true}
                options={e.options}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CervezasMenu;
