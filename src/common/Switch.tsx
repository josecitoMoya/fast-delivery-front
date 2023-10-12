"use client";
import { useState } from "react";
import "../styles/profileState.css";
import { NextPage } from "next";
interface Props {
  state: string;
  setState: (newState: string) => void;
}
const Switch: NextPage<Props> = ({ state, setState }) => {
  return (
    <div
      className="switchCont "
      onClick={() => {
        state == "on" ? setState("off") : setState("on");
      }}
    >
      <div data-testid="switch" className={"on-off " + state}></div>
    </div>
  );
};
export default Switch;
