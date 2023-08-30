import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import Deliverys from "@/components/Deliverys";
const Home = () => (
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
export default Home;
