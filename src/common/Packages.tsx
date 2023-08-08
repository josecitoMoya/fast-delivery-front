import Box from "@/assets/Ico/Box";
import Trash from "@/assets/Ico/Trash";
import { NextPage } from "next";
interface Props {
  dir: string;
  city: string;
}

const Packages: NextPage<Props> = ({ dir, city }) => {
  return (
    <div className="task flex flex-row max-w-md bg-gray-100 rounded-md p-2 m-2 relative">
      <div className="mr-3 my-auto">
        <Box />
      </div>
      <div className="infoCont flex-1">
        {/* Línea de separación */}
        <div className="absolute top-0 bottom-0 left-1/2 bg-gray-300 w-px" />
        <p className="text-sm ml-6 pl-3">{dir}</p>
        <p className="text-sm ml-6 pl-3">{city}</p>
      </div>
    </div>
  );
};
export default Packages;
