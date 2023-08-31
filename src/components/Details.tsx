"use client";
import Arrow from "@/assets/Ico/Arrow";
import DetailsChild from "./DetailsChild";
import "../styles/details.css";
import { useState } from "react";
const Details = () => {
  const [display, setDisplay] = useState("");
  return (
    <div className="detailsCont">
      <div className="details">
        <h2>Detalles</h2>
        <div className="flex">
          <p>03/01/23</p>
          <div
            className="arrow"
            onClick={() => {
              display == "" ? setDisplay("d-none") : setDisplay("");
            }}
          >
            <Arrow />
          </div>
        </div>
      </div>
      <div className={display}>
        <DetailsChild />
        <DetailsChild />
      </div>
    </div>
  );
};

export default Details;
