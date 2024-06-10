import { Abhaya } from "@/fonts";
import React, { useState } from "react";
import TintoList from "@/food/bodega/BodegaTinto";
import RosadoList from "@/food/bodega/BodegaRosado";
import BlancoList from "@/food/bodega/BodegaBlanco";
import CavaList from "@/food/bodega/BodegaCava";
import BodegaCard from "../cards/BodegaCard";

const Bodega = ({ english = false }) => {
  const [tinto, setTinto] = useState(true);
  const [rosado, setRosado] = useState(false);
  const [blanco, setBlanco] = useState(false);
  const [cava, setCava] = useState(false);

  const handleSubMenu = (value, setValue) => {
    setTinto(false);
    setRosado(false);
    setBlanco(false);
    setCava(false);

    setValue(value);
  };

  return (
    <div className="divide-y divide-lightBrown space-y-3">
      <div className="flex justify-between items-center ">
        <button
          onClick={() => handleSubMenu(true, setTinto)}
          className={`${Abhaya.className} ${
            tinto
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Tinto
        </button>
        <button
          onClick={() => handleSubMenu(true, setRosado)}
          className={`${Abhaya.className} ${
            rosado
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Rosado
        </button>
        <button
          onClick={() => handleSubMenu(true, setBlanco)}
          className={`${Abhaya.className} ${
            blanco
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Blanco
        </button>
        <button
          onClick={() => handleSubMenu(true, setCava)}
          className={`${Abhaya.className} ${
            cava
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Cava
        </button>
      </div>
      {!english ? (
        <div className="flex flex-col justify-center items-stretch w-full gap-2">
          {tinto === true &&
            TintoList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                />
              );
            })}

          {rosado === true &&
            RosadoList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                />
              );
            })}

          {blanco === true &&
            BlancoList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                />
              );
            })}

          {cava === true &&
            CavaList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                />
              );
            })}
        </div>
      ) : null}
      {english ? (
        <div className="flex flex-col justify-center items-stretch w-full gap-2">
          {tinto === true &&
            TintoList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                  english={true}
                />
              );
            })}

          {rosado === true &&
            RosadoList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                  english={true}
                />
              );
            })}

          {blanco === true &&
            BlancoList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                  english={true}
                />
              );
            })}

          {cava === true &&
            CavaList.map((e) => {
              return (
                <BodegaCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  glassPrice={e.glassPrice}
                  bottlePrice={e.bottlePrice}
                  english={true}
                />
              );
            })}
        </div>
      ) : null}
    </div>
  );
};

export default Bodega;
