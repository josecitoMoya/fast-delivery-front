import { NextPage } from "next";
import Exitlogo from "../common/ExitLogo";
import Homelogo from "../common/Homelogo";
import "../styles/nav.css";
interface Props {
  href: string;
  lHref: string;
}
const Nav: NextPage<Props> = ({ href, lHref }) => (
  <nav className="flex flex-row justify-between shadow">
    <Homelogo href={href} position="mx-6" />
    <Exitlogo href={lHref} position="mx-6" />
  </nav>
);

export default Nav;
