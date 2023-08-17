import { NextPage } from "next";
import "../styles/foldingCont.css";
import Task from "./Task2";
import Link from "next/link";
interface Object {
  id: string;
  dir: string;
  bg: string;
}
interface Props {
  subText: string;
  text: string;
  position: string;
  tasks: Array<Object>;
}
const FoldingCont: NextPage<Props> = ({ text, subText, position, tasks }) => (
  <div className={position + " mx-auto folding"}>
    <div className="flex flex-col justify-between">
      <h2>{text}</h2>
      <h3>{subText}</h3>
    </div>
    {tasks.length > 0 ? (
      tasks.map((elem, key) => (
        <Task key={key} id={elem.id} dir={elem.dir} bg={elem.bg} />
      ))
    ) : (
      <p className="font-normal text-xs mb-2">sin repartos pendientes</p>
    )}
    <div className="flex justify-end">
      <Link href={`/api/admin-pages/add-product`}>
        <button
          title="Add New"
          className="group  cursor-pointer hover:rotate-90 active:scale-100 duration-200 rounded-full bg-[#00EA77]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-slate-200 fill-none group-active:fill-slate-600 duration-200  "
          >
            <path d="M8 12H16" stroke-width="1" stroke="#3D1DF3"></path>
            <path d="M12 16V8" stroke-width="1" stroke="#3D1DF3"></path>
          </svg>
        </button>
      </Link>
    </div>
  </div>
);
export default FoldingCont;
