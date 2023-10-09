"use client";
import { NextPage } from "next";
import Check from "../assets/Ico/Check";
import { useEffect, useState } from "react";
interface Props {
  destination: string;
  quantity: number;
  id: string;
  setPackagesId: (ids: string[]) => void;
  packageId: string[];

}

const Product: NextPage<Props> = ({
  id,
  destination,
  quantity,
  setPackagesId,
  packageId,
  

}) => {
  const [color, setColor] = useState("");

const cleanDestination = destination.split(',').slice(0, 2).join(',')

  return (
    <div className="product mx-2 mt-2 mb-3">
      <div className="flex flex-row">
        <div
          className="ml-3 my-auto"
          onClick={() => {
            if (color === "#C7FFB1") {
              setColor("");
            } else {
              setColor("#C7FFB1");
            }
            if (packageId.includes(id)) {
              // Si está presente, quitarlo
              const updatedIds = packageId.filter((item) => item !== id);
              setPackagesId(updatedIds);
            } else {
              // Si no está presente, agregarlo
              setPackagesId([...packageId, id]);
            }
          }}
        >
          <Check bg={color} check={color === "" ? "" : "#3D1DF3"} />
        </div>
        <div className="infoCont">
          <p className="dir ml-3">{cleanDestination}</p>
        </div>
      </div>
      <div className="flex cuantity my-auto mr-3">
        <div className="my-auto">
         <p className="number">Cantidad:</p>
        </div>
        <p data-testid="quantity-text" className="number">
          {quantity}
        </p>
       
      </div>
    </div>
  );
};

export default Product;