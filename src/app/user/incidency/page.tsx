import Button from "@/common/Button";
import Switch from "@/common/Switch";
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import "@/styles/incidency.css";
const Incidency = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/get-products"
      h2="reporte de incidencia"
      content={
        <div>
          <h2 className="text-center my-5">
            con un margen de 24hs confirma si...
          </h2>
          <div>
            <div className="question mx-auto my-2">
              <p>has ingerido alcohol</p>
              <Switch />
            </div>
            <div className="question mx-auto my-2">
              <p>has ingerido drogas</p>
              <Switch />
            </div>
            <div className="question mx-auto my-2">
              <p>has sentido estres</p>
              <Switch />
            </div>
          </div>
          <Button
            bgc="bg-green"
            text="enviar"
            position="mx-auto my-5"
            type="button"
            href="/user/travel"
          ></Button>
        </div>
      }
    />
  </div>
);
export default Incidency;
