"use client";
import { NextPage } from "next";
import Arrow from "../assets/Ico/Arrow";
import "../styles/foldingCont.css";
import { useState } from "react";
import TaskDM from "./TaskDM";
interface Object {
  _id: string;
  destination: string;
  state: string;
  bg: string;
  is_delivered: boolean;
  client: string;
  quantity_taked: number;
  quantity: number;
}
interface Props {
  text: string;
  position: string;
  tasks: Array<Object>;
}
const FoldingCont: NextPage<Props> = ({ text, position, tasks }) => {
  const [display, setDisplay] = useState("");

  tasks.map((elem) => {
    if (elem.is_delivered === false) {
      elem.state = "EN CURSO";
      elem.bg = "bg-yellow";
    } else {
      elem.state = "TERMINADA";
      elem.bg = "bg-green";
    }
  });

  return (
    <div className={position + " mx-auto folding"}>
      <div className="flex flex-row justify-between">
        <h2>{text}</h2>
        <div
          className="my-auto"
          onClick={() => {
            display == "" ? setDisplay("d-none") : setDisplay("");
          }}
        >
          <Arrow />
        </div>
      </div>
      <div data-testid="d-none?" className={display + "scroll"}>
        {tasks.length > 0 ? (
          tasks.map((elem, key) => (
            <TaskDM
              key={key}
              id={elem._id}
              client={elem.client}
              dir={elem.destination}
              state={elem.state}
              bg={elem.bg}
              quantity_taked={elem.quantity_taked}
              quantity={elem.quantity}
            />
          ))
        ) : (
          <p className={"font-normal text-xs mb-2 " + display}>
            sin repartos pendientes
          </p>
        )}
      </div>
    </div>
  );
};
export default FoldingCont;
