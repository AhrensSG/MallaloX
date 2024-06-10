import { Abhaya } from "@/fonts";
import React from "react";

const BodegaCard = ({
  title,
  englishTitle,
  description,
  englishDescription,
  glassPrice,
  bottlePrice = false,
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
        <div className="space-x-4">
          <span
            className={`${Abhaya.className} font-bold text-base text-lightBrown`}
          >
            {glassPrice}€
          </span>
          <span
            className={`${Abhaya.className} font-bold text-base text-lightBrown`}
          >
            {bottlePrice}€
          </span>
        </div>
      </div>
      <h4 className={`${Abhaya.className} text-sm`}>
        {english ? englishDescription : description}
      </h4>
    </div>
  );
};

export default BodegaCard;
