import { Abhaya } from "@/fonts";
import React from "react";

const MenuCard = ({
  title,
  englishTitle,
  description,
  englishDescription,
  price,
  unit = false,
  garnish = false,
  halfGarnish = false,
  english = false,
}) => {
  return (
    <div className="mt-2">
      <div className="flex justify-between items-start gap-2">
        <h3
          className={`${Abhaya.className} font-bold text-base text-lightBrown`}
        >
          {english ? englishTitle : title}
        </h3>
        {garnish !== false && halfGarnish !== false ? (
          <div
            className={`${Abhaya.className} font-bold text-base text-lightBrown flex flex-col justify-center items-end`}
          >
            <span>
              {" "}
              {english ? "Portion" : "Racion"} {garnish} €
            </span>
            <span>
              {" "}
              {english ? "1/2 Portion" : "1/2 Racion"} {halfGarnish} €
            </span>
          </div>
        ) : null}

        {price !== false ? (
          unit !== false ? (
            <span
              className={`${Abhaya.className} font-bold text-base text-lightBrown`}
            >
              {price}€ {english ? "Unit" : "Unidad"}
            </span>
          ) : (
            <span
              className={`${Abhaya.className} font-bold text-base text-lightBrown`}
            >
              {price}€
            </span>
          )
        ) : null}
      </div>
      <h4 className={`${Abhaya.className} text-sm`}>
        {english ? englishDescription : description}
      </h4>
    </div>
  );
};

export default MenuCard;
