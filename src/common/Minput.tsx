import { NextPage } from "next";
import "../styles/minput.css";
import { ReactNode } from "react";

interface Props {
  type: string;
  color: string;
  position: string;
  placeholder: string;
  ico: ReactNode;
  data: object;
}

const Minput: NextPage<Props> = ({
  type,
  placeholder,
  position,
  ico,
  color,
  data,
}) => {
  return (
    <div
      className={`inputCont ${position} flex-row flex color-${color} border-${color}`}
    >
      {ico}
      <input
        type={type}
        className={`ml-3  minput placeholder-${color} text-${color}`}
        placeholder={placeholder}
        {...data}
      />
    </div>
  );
};

export default Minput;
