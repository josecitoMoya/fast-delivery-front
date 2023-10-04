import { NextPage } from "next";
import Button from "../common/Button";
import deliveryManServices from "@/services/deliveryMan.services";
interface Props {
  destination: string;
  id: string;
  client: string;
  quantity_taked: number;
}
const TravelContent: NextPage<Props> = ({
  destination,
  id,
  client,
  quantity_taked,
}) => {
  const handleSubmit2 = () => {
    try {
      console.log("travel", id);
      deliveryManServices.MarkDeliveredPackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };
  return (
    <div>
      <div className="img mx-auto"></div>
      <div className="info mx-auto ">
        <p>
          <span>Destino:</span> {destination}
        </p>
        <p>
          <span>Numero de paquete:</span> {id}
        </p>
        <p>
          <span>Cantidad de paquetes:</span> {quantity_taked}
        </p>
        <p>
          <span>Recibe:</span> {client}
        </p>
      </div>
      <Button
        href={"/user/home"}
        bgc="bg-green text-blue"
        position="mx-auto my-5"
        text="Finalizar"
        onClick={handleSubmit2}
        type="button"
      ></Button>
    </div>
  );
};
export default TravelContent;
