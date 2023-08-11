import React from "react";
import { NextPage } from "next";
import Addition from "@/assets/Ico/Addition";
import Minus from "@/assets/Ico/Minus";
interface Props {
  quantity: number;
}
const QuantityEditor: NextPage<Props> = ({ quantity }) => {
  return (
    <>
      <div className="flex items-center justify-center w-28  ">
        <div className="flex cuantity my-auto mx-auto">
          <div className="mx-1 my-auto">
            <Minus />
          </div>
          <p className="number">{quantity}</p>
          <div className="mx-1 my-auto">
            <Addition />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantityEditor;
