import { NextPage } from "next";
import Button from "../common/Button";
import deliveryManServices from "@/services/deliveryMan.services";
import Map from "./Map";
import { LatLngLiteral } from "@googlemaps/google-maps-services-js";

interface Props {
  destination: string;
  id: string;
  client: string;
  quantity_taked: number;
  is_delivered: boolean;
  coords: LatLngLiteral;
}
const TravelContent: NextPage<Props> = ({
  destination,
  id,
  client,
  quantity_taked,
  is_delivered,
  coords,
}) => {
  const handleCancel = () => {
    try {
      deliveryManServices.UntakePackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };

  const handleFinish = () => {
    try {
      deliveryManServices.MarkDeliveredPackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };

  return (
    <div>
      <div className="img mx-auto">
        <Map coords={coords} />
      </div>
      <div className="info-travel mx-auto mb-3">
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

      {is_delivered ? (
        <></>
      ) : (
        <>
          {" "}
          
          <Button
            href={"/user/home"}
            bgc="bg-green text-blue"
            position="mx-auto my-3"
            text="finalizar"
            onClick={handleFinish}
            type="button"
          ></Button>{" "}
          
          <Button
            type="button"
            href="/user/get-products"
            bgc="bg-green text-blue"
            position="mx-auto my-3"
            onClick={handleCancel}
            text="cancelar entrega"
          />
          
        </>
      )}
    </div>
  );
};
export default TravelContent;
