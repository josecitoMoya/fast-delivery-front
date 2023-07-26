import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import Register from "@/components/Register";

const register = () => (
  <div>
    <Nav />
    <GreenScreen h2="Creá tu cuenta" content={<Register />} />
  </div>
);
export default register;
