import { NextPage } from "next";
import Box from "../assets/Ico/Box";
import Trash from "../assets/Ico/Trash";
import "../styles/task.css";
import State from "../common/State";
interface Props {
  id: string;
  dir: string;
  state: string;
  bg: string;
}
const Task: NextPage<Props> = ({ id, dir, state, bg }) => (
  <div className="task mt-3 flex flex-row">
    <Box />
    <div className="line"></div>
    <div className="ml-3 info">
      <h3 className="id mt-1">{id}</h3>
      <p className="dir mt-1 font-thin">{dir}</p>
    </div>
    <div className="colorBtns mt-1 mx-2 align-end">
      <State bg={bg} state={state} />

      <div className="mt-4 ml-20">
        <Trash />
      </div>
    </div>
  </div>
);
export default Task;
