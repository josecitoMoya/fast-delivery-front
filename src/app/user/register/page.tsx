import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import Register from "@/components/Register";

const register = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen href="/" h2="Creá tu cuenta" content={<Register />} />
  </div>
);
export default register;
