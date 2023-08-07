"use client";

import { NextPage } from "next";
import "../styles/button.css";
import Link from "next/link";

interface Props {
  bgc: string;
  text: string;
  position: string;
  href: string;
  type: any;
}

const Button: NextPage<Props> = ({ position, bgc, text, href, type }) => {
  return (
    <div className={position + " btnCont flex " + bgc}>
      <button className="btn mx-auto " type={type}>
        {/* <Link href={href}>{text}</Link> */}
        {text}
      </button>
    </div>
  );
};

export default Button;
