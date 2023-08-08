import Box from "@/assets/Ico/Box";
import Trash from "@/assets/Ico/Trash";
import { NextPage } from "next";
interface Props {
  dir: string;
  city: string;
  id: string;
}

const Packages: NextPage<Props> = ({ id, dir, city }) => {
  return (
    <div className="task flex flex-row max-w-md bg-gray-100 rounded-md p-2 m-2 relative justify-center">
      <div className="flex align-middle">
        <div className="m-auto">
          <Box />
        </div>
        <div className="infoCont flex-1 items-center">
          {/* Línea de separación */}
          <div className="absolute top-0 bottom-0 left-1/2 bg-black w-px" />
          <p className="font-bold text-xs ml-6 pl-3">{id}</p>
          <p className="text-xs ml-6 pl-3">{dir}</p>
          <p className="text-xs ml-6 pl-3">{city}</p>
        </div>
        <div className="m-auto">
          <Trash />
        </div>
      </div>
    </div>
  );
};
export default Packages;
