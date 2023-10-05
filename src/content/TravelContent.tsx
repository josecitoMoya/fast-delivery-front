import { NextPage } from "next";
import Button from "../common/Button";
import deliveryManServices from "@/services/deliveryMan.services";
import Map from "./Map";

interface Props {
  destination: string;
  id: string;
  client: string;
  quantity_taked:number
}
const TravelContent: NextPage<Props> = ({ destination, id, client, quantity_taked }) => {
  const handleSubmit = ()=>{
    try {
      deliveryManServices.UntakePackage(id)
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  }

  const handleSubmit2 = () => {
    try {
      console.log('travel',id);
      deliveryManServices.MarkDeliveredPackage(id)
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };
  return(
  <div>
    <div className="img mx-auto">
<Map/>
    </div>
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

<Button
        type="button"
        href="/user/get-products"
        bgc="bg-green text-blue"
        position="mx-auto my-5 "
onClick={handleSubmit}
        text="Cancelar entrega"
      />
  </div>)
}
export default TravelContent;
