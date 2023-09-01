"use client";
import { useState } from "react";
import "../styles/profileState.css";
const Switch = () => {
  const [on, setOn] = useState("on");
  return (
    <div
      className="switchCont"
      onClick={() => {
        on == "on" ? setOn("off") : setOn("on");
      }}
    >
      <div className={"on-off " + on}></div>
    </div>
  );
};
export default Switch;
