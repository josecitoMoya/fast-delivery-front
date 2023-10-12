"use client";
import "../styles/task.css";
import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
//Icons
import Box from "../assets/Ico/Box";
import Trash from "../assets/Ico/Trash";
//Commons
import State from "../common/State";
//Service
import Admin_Service from "@/services/admin.services";
const adminService = Admin_Service.getInstance();

interface Props {
  id: string;
  dir: string;
  state: string;
  bg: string;
  quantity: number
}
const Task: NextPage<Props> = ({ id, dir, state, bg, quantity }) => {
  const [display, setDisplay] = useState("");

  const handleDeletePackage = async () => {
    await adminService.deletePackage(id);
  };

  return (
    <div
      data-testid="task-cont"
      className={"task mt-3  flex justify-between " + display}
    >
      <div className="flex flex-row ">
        <div className="flex items-center">
          <Link href="/user/travel">
            <Box />
          </Link>
        </div>
        <div className="line"></div>
        <div className="ml-3 info">
          <p className="dir mt-1">{dir}</p>
          <p className="dir mt-1">Paquetes :{quantity}</p>
          <h3 className="id mt-1">{id}</h3>
        </div>
      </div>
      <div className="colorBtns mt-1 mx-2 flex flex-col items-end">
        <State bg={bg} state={state} />
        <div
          className={
            "mt-4 cursor-pointer " + (state == "TERMINADA" ? "d-none" : "")
          }
          // onClick={() => setDisplay('d-none')}
          onClick={handleDeletePackage}
          data-testid="trash"
        >
          <Trash />
        </div>
      </div>
    </div>
  );
};
export default Task;