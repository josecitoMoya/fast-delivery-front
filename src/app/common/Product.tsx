import Addition from "../assets/Ico/Addition";
import Check from "../assets/Ico/Check";
import Minus from "../assets/Ico/Minus";

const Product = () => {
  return (
    <div className="task flex flex-row">
      <div className="ml-3 my-auto">
        <Check />
      </div>
      <div className="infoCont ">
        <p className="dir ml-2">Amenabar caba, 200324</p>
      </div>
      <div className="flex cuantity my-auto ml-6">
        <div className="mx-1 my-auto">
          <Minus />
        </div>
        <p className="number">123</p>
        <div className="mx-1 my-auto">
          <Addition />
        </div>
      </div>
    </div>
  );
};
export default Product;
