import { NextPage } from "next";
import Mainlogo from "../assets/Ico/Mainlogo";

interface Props {
  position: string;
}

const MainLogo: NextPage<Props> = ({ position }) => {
  return (
    <div className={position}>
      <Mainlogo />
    </div>
  );
};

export default MainLogo;
