import Link from "next/link";
import Minilogo from "../assets/Ico/Minilogo";
import { NextPage } from "next";
interface Props {
  position: string;
}

const Homelogo: NextPage<Props> = ({ position }) => (
  <div className={position}>
    <Link href="/api/home">
      <Minilogo />
    </Link>
  </div>
);

export default Homelogo;
