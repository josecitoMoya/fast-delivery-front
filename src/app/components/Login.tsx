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
        type="text"
        ico={<User />}
        position="mx-auto mt-10"
        placeholder="email@contraseña.com"
      />
      <Minput
        type="password"
        ico={<Lock />}
        position="mx-auto my-3"
        placeholder="contraseña"
      />
      <Button
        href="/home"
        bgc="bg-green text-blue"
        position="mx-auto mt-7"
        text="ingresar"
      />
      <Button
        href="/home"
        bgc="bg-none text-white"
        position="mx-auto mt-3"
        text="crear cuenta"
      />
      <Text text="OLVIDÉ MI CONTRASEÑA" position="mt-3" />
    </>
  );
};

export default Login;
