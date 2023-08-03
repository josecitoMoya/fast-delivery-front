import Button from "@/common/Button";
import GreenScreen from "@/components/GreenScreen";
import GetProducts from "@/components/GetProducts";
import Nav from "@/components/Nav";
const Home = () => (
  <div>
    <Nav />
    <GreenScreen h2="Obtener paquetes" content={<GetProducts />} />
    <Button
      href="/api/travel"
      bgc="bg-green text-blue"
      position="mx-auto my-5 "
      text="Iniciar jornada"
    />
    <div></div>
  </div>
);
export default Home;
