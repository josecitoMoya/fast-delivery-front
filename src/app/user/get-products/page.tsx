import Button from "@/common/Button";
import GreenScreen from "@/components/GreenScreen";
import GetProductsContent from "@/content/GetProductsContent";
import Nav from "@/components/Nav";
const GetProducts = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/home"
      h2="Obtener paquetes"
      content={<GetProductsContent />}
    />
    {/* <Button
      type="button"
      href="/user/incidency"
      bgc="bg-green text-blue"
      position="mx-auto my-5 "
      text="Iniciar jornada"
    /> */}
    <div></div>
  </div>
);
export default GetProducts;
