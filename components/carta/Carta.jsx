import { Abhaya } from "@/fonts";
import React, { useState } from "react";
import MenuCard from "../cards/MenuCard";
import StartersList from "../../food/carta/CartaEntrantes";
import ChefSpecialsList from "@/food/carta/CartaChefSpecials";
import EnsaladasList from "@/food/carta/CartaEnsaladas";

const Carta = ({ english = false }) => {
  const [entrantes, setEntrantes] = useState(true);
  // const [especialChef, setEspecialChef] = useState(false);
  const [ensaladas, setEnsaladas] = useState(false);

  const handleSubMenu = (value, setValue) => {
    setEntrantes(false);
    // setEspecialChef(false);
    setEnsaladas(false);

    setValue(value);
  };

  return (
    <div className="divide-y divide-lightBrown space-y-3">
      <div className="flex justify-start items-center gap-4">
        <button
          onClick={() => handleSubMenu(true, setEntrantes)}
          className={`${Abhaya.className} ${
            entrantes
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          {english ? "Starters" : "Entrantes"}
        </button>
        {/* <button
          onClick={() => handleSubMenu(true, setEspecialChef)}
          className={`${Abhaya.className} ${
            especialChef
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          Chef's Specials
        </button> */}
        <button
          onClick={() => handleSubMenu(true, setEnsaladas)}
          className={`${Abhaya.className} ${
            ensaladas
              ? "text-white border-2 border-lightBrown bg-lightBrown"
              : "border-2 border-transparent"
          } transition duration-300 font-bold text-base py-0.5 px-2 rounded-lg`}
        >
          {english ? "Salads" : "Ensaladas"}
        </button>
      </div>
      {!english ? (
        <div className="flex flex-col justify-center items-stretch w-full gap-2">
          {entrantes === true &&
            StartersList.map((e) => {
              return (
                <MenuCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  price={e.price}
                  unit={e.unit}
                  garnish={e.garnish}
                  halfGarnish={e.halfGarnish}
                />
              );
            })}
          {/* {especialChef === true &&
            ChefSpecialsList.map((e) => {
              return (
                <MenuCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  price={e.price}
                  unit={e.unit}
                  garnish={e.garnish}
                  halfGarnish={e.halfGarnish}
                />
              );
            })} */}
          {ensaladas === true &&
            EnsaladasList.map((e) => {
              return (
                <MenuCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  price={e.price}
                  unit={e.unit}
                  garnish={e.garnish}
                  halfGarnish={e.halfGarnish}
                />
              );
            })}
        </div>
      ) : null}
      {english ? (
        <div className="flex flex-col justify-center items-stretch w-full gap-2">
          {entrantes === true &&
            StartersList.map((e) => {
              return (
                <MenuCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  price={e.price}
                  unit={e.unit}
                  garnish={e.garnish}
                  halfGarnish={e.halfGarnish}
                  english={true}
                />
              );
            })}
          {/* {especialChef === true &&
            ChefSpecialsList.map((e) => {
              return (
                <MenuCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  price={e.price}
                  unit={e.unit}
                  garnish={e.garnish}
                  halfGarnish={e.halfGarnish}
                  english={true}
                />
              );
            })} */}
          {ensaladas === true &&
            EnsaladasList.map((e) => {
              return (
                <MenuCard
                  key={e.title}
                  title={e.title}
                  englishTitle={e.englishTitle}
                  description={e.description}
                  englishDescription={e.englishDescription}
                  price={e.price}
                  unit={e.unit}
                  garnish={e.garnish}
                  halfGarnish={e.halfGarnish}
                  english={true}
                />
              );
            })}
        </div>
      ) : null}
    </div>
  );
};

export default Carta;
