"use client";
import { NextPage } from "next";
import Link from "next/link";
import "../styles/button.css";

type ButtonType = "button" | "submit" | "reset";

interface Props {
  bgc: string;
  text: string;
  position: string;
  href?: string;
  type: ButtonType;
  onClick?: () => void;
}

const Button: NextPage<Props> = ({
  position,
  bgc,
  text,
  href,
  type,
  onClick,
}) => {
  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
  };
  return (
    <div className={position + " btnCont flex " + bgc}>
      {onClick ? (
        <button className="btn mx-auto " type={type} onClick={handleClick}>
          {href ? <Link href={href}>{text}</Link> : text}
        </button>
      ) : (
        <button className="btn mx-auto " type={type}>
          {href ? <Link href={href}>{text}</Link> : text}
        </button>
      )}
    </div>
  );
};

export default Button;
