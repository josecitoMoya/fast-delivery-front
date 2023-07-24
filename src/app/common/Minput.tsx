import { NextPage } from "next";
import "../styles/minput.css";
import { ReactNode } from "react";
interface Props {
  type: string;
  position: string;
  placeholder: string;
  ico: ReactNode;
}

const Minput: NextPage<Props> = ({ type, placeholder, position, ico }) => {
  return (
    <div className={`inputCont ${position} flex-row flex`}>
      {ico}
      <input type={type} className="ml-2 minput" placeholder={placeholder} />
    </div>
  );
};

export default Minput;
