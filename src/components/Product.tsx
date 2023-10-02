"use client";
import { NextPage } from "next";
import Addition from "../assets/Ico/Addition";
import Check from "../assets/Ico/Check";
import Minus from "../assets/Ico/Minus";
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
  const [pack, setQuantity] = useState(quantity);
  const [color, setColor] = useState("");


  useEffect(() => {
    setQuantity(quantity)
  }, [quantity]);
  const handleDecrease = () => {
    if (pack > 0) {
      setQuantity(pack - 1);
    }
  };

  const handleIncrease = () => {
    if (pack < quantity) {
      setQuantity(pack + 1);
    }
  };

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
          <p className="dir ml-3">{destination}</p>
        </div>
      </div>
      <div className="flex cuantity my-auto mx-2">
        <div className="my-auto" onClick={handleDecrease}>
          <Minus />
        </div>
        <p data-testid="quantity-text" className="number">
          {pack!==quantity?(pack):(quantity)}
        </p>
        <div className="my-auto" onClick={handleIncrease}>
          <Addition />
        </div>
      </div>
    </div>
  );
};

export default Product;