import { NextPage } from "next";
import "../styles/text.css";

interface Props {
  bgc: string;
  text: string;
  position: string;
}

const Button: NextPage<Props> = ({ position, bgc, text }) => {
  return (
    <div className={position + " btnCont flex " + bgc}>
      <button className="btn mx-auto ">{text}</button>
    </div>
  );
};

export default Button;
