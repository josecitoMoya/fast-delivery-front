import Button from "@/common/Button";
import GreenScreen from "@/components/GreenScreen";
import TravelContent from "@/content/TravelContent";
import Nav from "@/components/Nav";
import "@/styles/travel.css";
const Travel = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/incidency"
      h2="Reparto en curso"
      content={
        <TravelContent
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
export default Travel;
