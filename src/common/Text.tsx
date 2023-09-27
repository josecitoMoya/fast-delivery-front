import { NextPage } from "next";
import "../styles/text.css";

interface Props {
  text: string;
  position: string;
  textColor: string;
}

const Text: NextPage<Props> = ({ position, text, textColor }) => {
  return (
    <div className={position}>
      <p className={`text-center text-${textColor} text`}>{text}</p>
    </div>
  );
};

export default Text;
