import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import RegisterContent from "@/content/RegisterContent";

const Register = () => (
  <div>
    <Nav href="/user/home" lHref="/" />
    <GreenScreen href="/" h2="Creá tu cuenta" content={<RegisterContent />} />
  </div>
);
export default Register;
