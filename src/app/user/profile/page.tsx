
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import "@/styles/incidency.css";
import ProfileContent from "@/content/ProfileContent";
const Incidency = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen
      href="/user/get-products"
      h2="Perfl"
      content={<ProfileContent/>}
    />
  </div>
);
export default Incidency;
