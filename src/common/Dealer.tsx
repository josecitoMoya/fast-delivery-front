"use client";

import Porcentaje from "@/assets/Ico/Porcentaje";
import State from "./State";
import Photo from "./Photo";

const Dealer = () => {
  return (
    <>
      <div className="border-dotted border-b-2 border-sky-500 mx-2 mt-5 mb-2"></div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <div className="mx-2">
            <Porcentaje></Porcentaje>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-bold">Nombre</h2>
            <div>
              <State state="ENTREGADO" bg="bg-green"></State>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <Photo scale="small"></Photo>
        </div>
      </div>
    </>
  );
};
export default Dealer;
