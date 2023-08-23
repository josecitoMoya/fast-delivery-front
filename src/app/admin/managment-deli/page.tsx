import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import Deliverys from "@/components/Deliverys";
const Home = () => (
  <div>
    <Nav />
    <GreenScreen h2="Repartidores" content={<Deliverys />} />
    <div></div>
  </div>
);
export default Home;
