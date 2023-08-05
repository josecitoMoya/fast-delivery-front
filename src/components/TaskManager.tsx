import Photo from "@/common/Photo";
import Week from "./Week";
import Details from "./Details";
import "../styles/taskmanager.css";
const TaskManager = () => (
  <div>
    <div className="adminCont">
      <Photo scale="big" />
      <div className="ml-3">
        <h2>¡Hola Admin!</h2>
        <p>Estos son los pedidos del dia</p>
      </div>
    </div>
    <Week />
    <Details />
  </div>
);
export default TaskManager;
