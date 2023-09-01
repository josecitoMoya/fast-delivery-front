"use client";
//styles
import "../styles/minput.css";
//commons
import Minput from "../common/Minput";
import Button from "../common/Button";
import Text from "../common/Text";
//assets
import Lock from "../assets/Ico/Lock";
import User from "../assets/Ico/User";
//hooks
import useInput from "@/hooks/useInput";
// services
import User_Service from "@/services/user.services";
const userService = new User_Service();
//types
import { UserRegister } from "@/types/user.types";

const Register = () => {
  const email = useInput();
  const password = useInput();
  const name = useInput();
  const last_name = useInput();
  const confirmPassword = useInput();

  const handleSignup = async () => {
    const newUser: UserRegister = {
      email: email.value,
      password: password.value,
      name: name.value,
      last_name: last_name.value,
    };

    await userService.register(newUser);
  };

  return (
    <>
      <Minput
        data={email}
        color="blue"
        type="text"
        ico={<User color="blue" />}
        position="mt-10 mx-auto w-70"
        placeholder="email@contraseña.com"
      />
      <Minput
        data={password}
        color="blue"
        type="password"
        ico={<Lock color="blue" />}
        position="mx-auto my-3 w-70"
        placeholder="contraseña"
      />
      <Minput
        data={name}
        color="blue"
        type="text"
        ico={<User color="blue" />}
        position="mx-auto my-3 w-70"
        placeholder="introduzca su nombre"
      />
      <Minput
        data={last_name}
        color="blue"
        type="text"
        ico={<User color="blue" />}
        position="mx-auto my-3 w-70"
        placeholder="introduzca su apellido"
      />
      <Button
        type={"submit"}
        href="/home"
        bgc="bg-green text-blue"
        position="mx-auto mt-10"
        text="crear"
        onClick={handleSignup}
      />
      <Text
        position="mx-auto mt-2"
        textColor="blue"
        text="¿Ya tenes una cuenta?"
      />
      <Button
        type="submit"
        href="/"
        bgc="bg-none text-blue"
        position="mx-auto mb-3 mt-2"
        text="iniciar sesion"
      />
    </>
  );
};

export default Register;
