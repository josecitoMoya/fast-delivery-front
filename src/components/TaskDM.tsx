"use client";
import "../styles/task.css";
import { NextPage } from "next";
//Icons
import Box from "../assets/Ico/Box";
import Trash from "../assets/Ico/Trash";
//Commons
import State from "../common/State";
import "../styles/task.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import deliveryManServices from "../services/deliveryMan.services";
interface Props {
  id: string;
  dir: string;
  state: string;
  bg: string;
  client: string;
  quantity_taked: number;
  quantity: number;
}
const TaskDM: NextPage<Props> = ({
  id,
  dir,
  state,
  bg,
  client,
  quantity_taked,
  quantity
}) => {
  const [display, setDisplay] = useState("");
  const cleanDestination = dir.split(',').slice(0, 2).join(',')

  const handleClick = () => {  
    setDisplay("d-none");
    try {
      deliveryManServices.UntakePackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };

  return (
    <div
      data-testid="task-cont"
      className={"task mt-3  flex justify-between " + display}
    >
      <div className="flex flex-row ">
        <div className="flex items-center">
          <Link href={`/user/travel/${id}`}>
            <Box />
          </Link>
        </div>
        <div className="line"></div>
        <div className="ml-3 info">
          <h3 className="id mt-1">{client}</h3>
          <p className="dir mt-1">{cleanDestination}</p>
          <p className="dir mt-1">packages: {quantity_taked}</p>
        </div>
      </div>
      <div className="colorBtns mt-1 mx-2 flex flex-col items-end">
        <State bg={bg} state={state} />
        <div
          className={"mt-4 " + (state == "TERMINADA" ? "d-none" : "")}
          onClick={handleClick}
          data-testid="trash"
        >
          <Trash />
        </div>
      </div>
    </div>
  );
};
export default TaskDM;
