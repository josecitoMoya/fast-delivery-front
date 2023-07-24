import Button from "../common/Button";

const Travel = () => (
  <div>
    <div className="img mx-auto"></div>
    <div className="info ml-5">
      <p>
        <span>Destino:</span> Amenabar 2356, CABA
      </p>
      <p>
        <span>Numero de paquete:</span> #04023
      </p>
      <p>
        <span>Recibe:</span> David Rodriguez
      </p>
    </div>
    <Button
      href="/pages/home"
      bgc="bg-green text-blue"
      position="mx-auto my-5"
      text="Finalizar"
    ></Button>
  </div>
);
export default Travel;
