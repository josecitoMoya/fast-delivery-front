import Button from "@/common/Button";
import GreenScreen from "@/components/GreenScreen";
import Travel from "@/components/Travel";
import Nav from "@/components/Nav";
import "@/styles/travel.css";
const Home = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/incidency"
      h2="Reparto en curso"
      content={
        <Travel
          destinatario="julian alvarez"
          dir="sarmiento 1017, CABA"
          id="#450F7"
        />
      }
    />
    <Button
      type="button"
      href="/user/get-products"
      bgc="bg-none text-white"
      position="mx-auto my-5 "
      text="Cancelar entrega"
    />
    <div></div>
  </div>
);
export default Home;
