import Link from "next/link";
import Minilogo from "../assets/Ico/Minilogo";
import { NextPage } from "next";
interface Props {
  position: string;
  href: string;
}
const Homelogo: NextPage<Props> = ({ position, href }) => {
  return (
    <div data-testid="homelogo" className={position}>
      <Link href={href}>
        <Minilogo />
      </Link>
    </div>
  );
};

export default Homelogo;
