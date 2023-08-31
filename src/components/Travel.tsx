import { NextPage } from "next";
import Button from "../common/Button";
interface Props {
  dir: string;
  id: string;
  destinatario: string;
}
const Travel: NextPage<Props> = ({ dir, id, destinatario }) => (
  <div>
    <div className="img mx-auto"></div>
    <div className="info ml-5">
      <p>
        <span>Destino:</span> {dir}
      </p>
      <p>
        <span>Numero de paquete:</span> {id}
      </p>
      <p>
        <span>Recibe:</span> {destinatario}
      </p>
    </div>
    <Button
      href={"/user/home"}
      bgc="bg-green text-blue"
      position="mx-auto my-5"
      text="Finalizar"
      type="button"
    ></Button>
  </div>
);
export default Travel;
