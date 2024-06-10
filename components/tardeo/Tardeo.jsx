import { Abhaya } from "@/fonts";
import React from "react";
import MenuCard from "../cards/MenuCard";
import TardeoList from "@/food/tardeo/Tardeo";

const Tardeo = ({ english = false }) => {
  return (
    <div className="divide-y divide-lightBrown space-y-3">
      <div className="flex justify-between items-center ">
        <h3 className={`${Abhaya.className} font-bold text-2xl uppercase`}>
          {english ? "Afternoon Snack" : "Tardeo"}
        </h3>
      </div>

      {!english ? (
        <div className="flex flex-col justify-center items-stretch w-full gap-2">
          {TardeoList.map((e) => {
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
          {TardeoList.map((e) => {
            return (
              <MenuCard
                key={e.title}
                title={e.title}
                englishTitle={e.title}
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

export default Tardeo;
