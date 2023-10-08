
import GreenScreen from "@/components/GreenScreen";
import IncidencyContent from "@/content/IncidencyContent";
import Nav from "@/components/Nav";
import "@/styles/incidency.css";
const Incidency = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/get-products"
      h2="reporte de incidencia"
      content={<IncidencyContent />}
    />
  </div>
);
export default Incidency;
