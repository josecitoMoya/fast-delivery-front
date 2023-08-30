import Button from "@/common/Button";
import Switch from "@/common/Switch";
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";

const Incidency = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/get-products"
      h2="reporte de incidencia"
      content={
        <div>
          <h2>con un margen de 24hs confirma si</h2>
          <div>
            <p>
              has ingerido alcohol <Switch />
            </p>
            <p>
              has ingerido drogas
              <Switch />
            </p>
            <p>
              has sentido estres <Switch />
            </p>
          </div>
          <Button
            bgc="bg-green"
            text="enviar"
            position=""
            type="button"
          ></Button>
        </div>
      }
    />
  </div>
);
export default Incidency;
