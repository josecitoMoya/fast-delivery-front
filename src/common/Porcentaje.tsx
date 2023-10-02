import { NextPage } from "next";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "../styles/Porcentaje.css";
interface Props {
  percentage: number;
}

const Porcentaje: NextPage<Props> = ({ percentage }) => {
  return (
    <div style={{ width: "90px" }}>
      <CircularProgressbarWithChildren
        value={percentage}
        className="custom-progress-bar"
        styles={buildStyles({
          textColor: "#3d1df3", // Color del texto
          pathColor: "#00ea77", // Color de la barra de progreso
          trailColor: "#ccc", // Color del fondo
        })}
      >
        <h2>{percentage}%</h2>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Porcentaje;
