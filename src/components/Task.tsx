import { NextPage } from "next";
import Box from "../assets/Ico/Box";
import Trash from "../assets/Ico/Trash";
import State from "../common/State";
import "../styles/task.css";
interface Props {
  display: string;
  id: string;
  dir: string;
  state: string;
  bg: string;
}
const Task: NextPage<Props> = ({ id, dir, state, bg, display }) => (
  <div className={"task mt-3  flex justify-between " + display}>
    <div className="flex flex-row ">
      <Box />
      <div className="line"></div>
      <div className="ml-3 info">
        <h3 className="id mt-1">{id}</h3>
        <p className="dir mt-1">{dir}</p>
      </div>
    </div>
    <div className="colorBtns mt-1 mx-2 flex flex-col items-end">
      <State bg={bg} state={state} />
      <div className="mt-4 ">
        <Trash />
      </div>
    </div>
  </div>
);
export default Task;
