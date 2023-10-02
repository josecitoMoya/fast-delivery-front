"use client";
import { NextPage } from "next";
import Check from "../assets/Ico/Check";
import { useState } from "react";
import QuantityEditor from "@/common/QuantityEditor";
interface Props {
  destination: string;
  quantity: number;
}
const Product: NextPage<Props> = ({ destination, quantity }) => {
  const [color, setColor] = useState("#C7FFB1");
  return (
    <div className="product  mx-2 mt-2 mb-3">
      <div className="flex flex-row">
        <div
          className="ml-3 my-auto"
          onClick={() => {
            color == "#C7FFB1" ? setColor("") : setColor("#C7FFB1");
          }}
        >
          <Check bg={color} check={color == "" ? "" : "#3D1DF3"} />
        </div>
        <div className="infoCont ">
          <p className="dir ml-3">{destination}</p>
        </div>
      </div>
      <QuantityEditor quantity={quantity} />
    </div>
  );
};
export default Product;
