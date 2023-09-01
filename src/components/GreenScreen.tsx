import Link from "next/link";
import Rewind from "../assets/Ico/Rewind";
import "../styles/greenScreen.css";
import { NextPage } from "next";
import { ReactNode } from "react";
interface Props {
  content: ReactNode;
  h2: string;
  href: string;
}
const GreenScreen: NextPage<Props> = ({ content, h2, href }) => (
  <div className="greenCont mx-auto mt-3 flex flex-col ">
    <div className="flex flex-row gHeader">
      <Link href={href} className="rewind">
        <Rewind />
      </Link>
      <h2 className="h2G my-auto">{h2}</h2>
    </div>
    <div className="content">{content}</div>
  </div>
);

export default GreenScreen;
