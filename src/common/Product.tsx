import { NextPage } from "next";
import Addition from "@/assets/Ico/Addition";
import Check from "@/assets/Ico/Check";
import Minus from "@/assets/Ico/Minus";
interface Props {
  dir: string;
  cuantity: string;
}
const Product: NextPage<Props> = ({ dir, cuantity }) => {
  return (
    <div className="task flex flex-row">
      <div className="ml-3 my-auto">
        <Check />
      </div>
      <div className="infoCont  ">
        <p className="dir ml-3">{dir}</p>
      </div>
      <div className="flex cuantity my-auto">
        <div className="my-auto">
          <Minus />
        </div>
        <p className="number ">{cuantity}</p>
        <div className="my-auto">
          <Addition />
        </div>
      </div>
    </div>
  );
};
export default Product;
