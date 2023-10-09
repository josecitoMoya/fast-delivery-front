import Button from "@/common/Button";
import GreenScreen from "@/components/GreenScreen";
import GetProductsContent from "@/content/GetProductsContent";
import Nav from "@/components/Nav";
import { Providers } from "@/store/Provider";
const GetProducts = () => (
  <Providers>
    <div>
      <Nav href="/user/home" lHref="/" />
      <GreenScreen
        href="/user/home"
        h2="Obtener paquetes"
        content={<GetProductsContent />}
      />

      <div></div>
    </div>
  </Providers>
);
export default GetProducts;
