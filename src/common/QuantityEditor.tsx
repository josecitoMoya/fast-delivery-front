"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import Addition from "@/assets/Ico/Addition";
import Minus from "@/assets/Ico/Minus";
interface Props {
  quantity: number;
}
const QuantityEditor: NextPage<Props> = ({ quantity }) => {
  const [pack, setPack] = useState(0);
  return (
    <>
      <div className="flex cuantity my-auto mx-2">
        <div
          className="my-auto"
          onClick={() => {
            pack > 0 ? setPack(pack - 1) : setPack(pack);
          }}
        >
          <Minus />
        </div>
        <p data-testid="quantity-text" className="number">
          {pack}
        </p>
        <div
          className="my-auto"
          onClick={() => {
            pack < quantity ? setPack(pack + 1) : setPack(pack);
          }}
        >
          <Addition />
        </div>
      </div>
    </>
  );
};

export default QuantityEditor;
