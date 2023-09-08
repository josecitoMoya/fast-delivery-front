import "../styles/greenScreen.css";
import Task from "./Task";
import { NextPage } from "next";
interface props {
  tasks: Array<{ id: string; adress: string; city: string }>;
}
const GetPackages: NextPage<props> = ({ tasks }) => {
  return (
    <>
      <div>
        <h2 className=" ml-4 text-left text-sm mt-3 font-bold">
          {tasks.length} paquetes
        </h2>
        <p className=" ml-4 text-left text-xs">
          con el criterio de filtrado seleccionado
        </p>
      </div>
      {tasks.map((item, index) => (
        <div data-testid="task" key={index} className="mb-2 mx-3">
          <Task
            bg="none"
            id={item.id}
            dir={item.adress + " " + item.city}
            state={""}
          />
        </div>
      ))}
    </>
  );
};
export default GetPackages;
