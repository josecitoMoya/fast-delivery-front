import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import Deliverys from "@/content/Deliverys"
const Dealers = () => (
  <div>
    <Nav href="/admin/diary" lHref="/" />
    <GreenScreen
      href="/admin/diary"
      h2="Repartidores"
      content={<Deliverys />}
    />
    <div></div>
  </div>
);
export default Dealers;
