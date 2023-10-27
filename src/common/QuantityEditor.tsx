import Minus from '../assets/Ico/Minus';
import Addition from '../assets/Ico/Addition';
import { NextPage } from 'next';
interface Props {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const QuantityEditor: NextPage<Props> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex  mx-2">
      <div
        className="my-auto"
        onClick={() => {
          quantity > 0 && setQuantity(quantity - 1);
        }}
      >
        <Minus />
      </div>
      <p data-testid="quantity-text" className="my-auto">
        {quantity}
      </p>
      <div
        className="my-auto"
        onClick={() => {
          quantity < 50 && setQuantity(quantity + 1);
        }}
      >
        <Addition />
      </div>
    </div>
  );
};

export default QuantityEditor;
