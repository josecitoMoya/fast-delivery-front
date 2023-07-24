import Link from "next/link";
import Rewind from "../assets/Ico/Rewind";
import "../styles/greenScreen.css";
import { NextPage } from "next";
import { ReactNode } from "react";
interface Props {
  content: ReactNode;
}
const GreenScreen: NextPage<Props> = ({ content }) => (
  <div className="greenCont mx-auto mt-3 flex flex-col ">
    <div className="flex flex-row gHeader">
      <Link href="/pages/home" className="ml-5">
        <Rewind />
      </Link>
      <h2 className="h2 my-auto ml-8 ">obtener paquetes</h2>
    </div>
    <div className="content">{content}</div>
  </div>
);

export default GreenScreen;
