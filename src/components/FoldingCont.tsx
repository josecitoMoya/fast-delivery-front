import { NextPage } from "next";
import Arrow from "../assets/Ico/Arrow";
import "../styles/foldingCont.css";
import Task from "./Task";
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
const FoldingCont: NextPage<Props> = ({ text, position, tasks }) => (
  <div className={position + " mx-auto folding"}>
    <div className="flex flex-row justify-between">
      <h2>{text}</h2>

      <Arrow />
    </div>
    {tasks.map((elem, key) => (
      <Task
        key={key}
        id={elem.id}
        dir={elem.dir}
        state={elem.state}
        bg={elem.bg}
      />
    ))}
  </div>
);
export default FoldingCont;
