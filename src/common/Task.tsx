import { NextPage } from "next";
import Box from "@/assets/Ico/Box";
import Trash from "@/assets/Ico/Trash";
interface Props {
  id: String;
  dir: String;
  state: String;
  bg: String;
}
const Task: NextPage<Props> = ({ id, dir, state, bg }) => (
  <div className="task mt-3  flex flex-row">
    <Box />
    <div className="line"></div>
    <div className="ml-3 info">
      <h3 className="id mt-2">{id}</h3>
      <p className="dir mt-1">{dir}</p>
    </div>
    <div className="colorBtns mt-2 ml-3">
      <p className={bg + " pending text-center"}>{state}</p>
      <div className="mt-4">
        <Trash />
      </div>
    </div>
  </div>
);
export default Task;
