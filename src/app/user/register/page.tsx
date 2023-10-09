import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import RegisterContent from "@/content/RegisterContent";

const Register = () => (
  <div>
    
    <GreenScreen href="/" h2="Creá tu cuenta" content={<RegisterContent />} />
  </div>
);
export default Register;
