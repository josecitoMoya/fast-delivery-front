import Image from "next/image";
import Logo from "../assets/Main-logo.png";
import { NextPage } from "next";

interface Props {
  position: string;
}

const MainLogo: NextPage<Props> = ({ position }) => {
  return (
    <div className={position}>
      <Image alt="Fast Logo" priority width={250} src={Logo} />
    </div>
  );
};

export default MainLogo;
