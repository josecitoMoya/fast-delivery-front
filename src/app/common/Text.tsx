import { NextPage } from "next";
import "../styles/button.css";

interface Props {
  text: string;
  position: string;
}

const Text: NextPage<Props> = ({ position, text }) => {
  return (
    <div className={position}>
      <p className="text-center text">{text}</p>
    </div>
  );
};

export default Text;
