import { NextPage } from "next";
import "../styles/button.css";
import Link from "next/link";

interface Props {
  bgc: string;
  text: string;
  position: string;
  href: string;
}

const Button: NextPage<Props> = ({ position, bgc, text, href }) => {
  return (
    <div className={position + " btnCont flex " + bgc}>
      <button className="btn mx-auto ">
        <Link href={href}>{text}</Link>
      </button>
    </div>
  );
};

export default Button;
