"use client";
import { NextPage } from "next";
import Arrow from "../assets/Ico/Arrow";
import "../styles/foldingCont.css";
import Task from "./Task";
import { useState } from "react";
interface Object {
  id: string;
  dir: string;
  state: string;
  bg: string;
}
interface Props {
  text: string;
  position: string;
  tasks: Array<Object>;
}
const FoldingCont: NextPage<Props> = ({ text, position, tasks }) => {
  const [display, setDisplay] = useState("");
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
      {tasks.length > 0 ? (
        tasks.map((elem, key) => (
          <Task
            display={display}
            key={key}
            id={elem.id}
            dir={elem.dir}
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
  );
};
export default FoldingCont;
