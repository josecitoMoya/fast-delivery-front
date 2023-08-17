import { NextPage } from "next";
import Box from "../assets/Ico/Box";
import Trash from "../assets/Ico/Trash";
import "../styles/task.css";
interface Props {
  id: string;
  dir: string;
  bg: string;
}
const Task: NextPage<Props> = ({ id, dir }) => (
  <div className="task mt-3 flex flex-row">
    <Box />
    <div className="line"></div>
    <div className="ml-3 info">
      <h3 className="id mt-1">{id}</h3>
      <p className="dir mt-1">{dir}</p>
    </div>
    <div className="mx-2 ">
      <div className="mt-5 ml-20">
        <Trash />
      </div>
    </div>
  </div>
);
export default Task;
