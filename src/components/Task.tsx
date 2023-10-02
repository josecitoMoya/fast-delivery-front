"use client";
import { NextPage } from "next";
import Box from "../assets/Ico/Box";
import Trash from "../assets/Ico/Trash";
import State from "../common/State";
import "../styles/task.css";
import { useState } from "react";
import Link from "next/link";
import deliveryManServices from "../services/deliveryMan.services";
interface Props {
  id: string;
  dir: string;
  state: string;
  bg: string;
  client: string;
  quantity_taked: number;
}
const Task: NextPage<Props> = ({
  id,
  dir,
  state,
  bg,
  client,
  quantity_taked,
}) => {
  const [display, setDisplay] = useState("");
  const [quantityTaked, setQuantityTaked] = useState(quantity_taked);
  const handleClick = () => {
    try {
      if (quantityTaked <= 1) {
        setDisplay("d-none");
      }
      deliveryManServices.UntakePackage(id);
      setQuantityTaked(quantityTaked - 1);
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
          <p className="dir mt-1">{dir}</p>
          <p className="dir mt-1">packages: {quantityTaked}</p>
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
export default Task;
