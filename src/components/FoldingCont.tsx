"use client";
import { NextPage } from "next";
import Arrow from "../assets/Ico/Arrow";
import "../styles/foldingCont.css";
import Task from "./Task";
import { useState } from "react";
interface Object {
  _id: string;
  destination: string;
  state: string;
  bg: string;
  is_delivered: boolean
}
interface Props {
  text: string;
  position: string;
  tasks: Array<Object>;
}
const FoldingCont: NextPage<Props> = ({ text, position, tasks }) => {
  const [display, setDisplay] = useState("");

  tasks.map((elem) => {
    console.log(elem.is_delivered);
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
      <div data-testid="d-none?" className={display}>
        {tasks.length > 0 ? (
          tasks.map((elem, key) => (
            <Task
              key={key}
              id={elem._id}
              dir={elem.destination}
              state={elem.state}
              bg={elem.bg}
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
