import GreenScreen from "@/app/components/GreenScreen";
import Nav from "@/app/components/Nav";
import Register from "@/app/components/Register";

const register = () => (
  <div>
    <Nav />
    <GreenScreen h2="Creá tu cuenta" content={<Register />} />
  </div>
);
export default register;
