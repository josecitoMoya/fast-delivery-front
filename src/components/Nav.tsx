import Exitlogo from "../common/ExitLogo";
import Homelogo from "../common/Homelogo";
import "../styles/nav.css";
const Nav = () => (
  <nav className="flex flex-row justify-between shadow">
    <Homelogo position="mx-6" />
    <Exitlogo position="mx-6" />
  </nav>
);

export default Nav;
