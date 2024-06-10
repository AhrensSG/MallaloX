import { Abhaya } from "@/fonts";
import React from "react";

const BebidasCard = ({
  title,
  price = false,
  glassPrice = false,
  bottlePrice = false,
  whiteSpace = false,
  draft = false,
  options = false,
}) => {
  return (
    <div className="mt-2">
      {draft === false ? (
        <div className="flex justify-between items-start gap-2">
          <h3 className={`${Abhaya.className} font-bold text-base`}>{title}</h3>
          {glassPrice !== false && bottlePrice !== false && (
            <div className="space-x-4">
              <span className={`${Abhaya.className} font-bold text-base`}>
                {glassPrice}€
              </span>
              <span className={`${Abhaya.className} font-bold text-base`}>
                {bottlePrice}€
              </span>
            </div>
          )}
          {price !== false && whiteSpace !== false ? (
            <div className="space-x-4">
              <span className={`${Abhaya.className} font-bold text-base`}>
                {price}€
              </span>
              <span
                className={`${Abhaya.className} font-bold text-base text-transparent`}
              >
                20.00€
              </span>
            </div>
          ) : price !== false ? (
            <span className={`${Abhaya.className} font-bold text-base`}>
              {price}€
            </span>
          ) : null}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <h3
            className={`${Abhaya.className} text-lightBrown font-bold text-base`}
          >
            {title}
          </h3>
          {options.map((e) => {
            return (
              <div className="w-full flex justify-between items-center">
                <span>{e.size}</span>
                <span>{e.price}€</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BebidasCard;
