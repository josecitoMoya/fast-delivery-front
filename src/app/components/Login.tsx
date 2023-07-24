import "../styles/minput.css";
import Minput from "../common/Minput";
import Button from "../common/Button";
import Lock from "../assets/Ico/Lock";
import User from "../assets/Ico/User";
import Text from "../common/Text";

const Login = () => {
  return (
    <>
      <Minput
        color="white"
        type="text"
        ico={<User color="white" />}
        position="mx-auto mt-10 w-80"
        placeholder="email@contraseña.com"
      />
      <Minput
        color="white"
        type="password"
        ico={<Lock color="white" />}
        position="mx-auto my-3 w-80"
        placeholder="contraseña"
      />
      <Button
        href="/pages/home"
        bgc="bg-green text-blue"
        position="mx-auto mt-7"
        text="ingresar"
      />
      <Button
        href="/pages/register"
        bgc="bg-none text-white"
        position="mx-auto mt-3"
        text="crear cuenta"
      />
      <Text text="OLVIDÉ MI CONTRASEÑA" textColor="white" position="mt-3" />
    </>
  );
};

export default Login;
