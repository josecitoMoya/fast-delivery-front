import "../styles/minput.css";
import Minput from "../common/Minput";
import Button from "../common/Button";
import Lock from "../assets/Ico/Lock";
import User from "../assets/Ico/User";
import Text from "../common/Text";

const Register = () => {
  return (
    <div className="register">
      <Minput
        color="blue"
        type="text"
        ico={<User color="blue" />}
        position="mt-20 mx-auto w-70"
        placeholder="email@contraseña.com"
      />
      <Minput
        color="blue"
        type="password"
        ico={<Lock color="blue" />}
        position="mx-auto my-3 w-70"
        placeholder="contraseña"
      />
      <Minput
        color="blue"
        type="password"
        ico={<Lock color="blue" />}
        position="mx-auto my-3 w-70"
        placeholder="confirmar contraseña"
      />
      <Button
        href="/pages/home"
        bgc="bg-green text-blue"
        position="mx-auto mt-20"
        text="crear"
      />
      <Text
        position="mx-auto mt-2"
        textColor="blue"
        text="¿Ya tenes una cuenta?"
      />
      <Button
        href="/pages/register"
        bgc="bg-none text-blue"
        position="mx-auto mb-5 mt-2"
        text="iniciar sesion"
      />
    </div>
  );
};

export default Register;
