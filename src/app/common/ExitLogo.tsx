import Link from "next/link";
import Exit from "../assets/Ico/Exit";
import { NextPage } from "next";
interface Props {
  position: string;
}

const Exitlogo: NextPage<Props> = ({ position }) => (
  <div className={position + " shadow borderX"}>
    <Link href="/">
      <Exit />
    </Link>
  </div>
);

export default Exitlogo;
