"use client";

import "../styles/minput.css";
import Minput from "../common/Minput";
import Button from "../common/Button";
import Lock from "../assets/Ico/Lock";
import User from "../assets/Ico/User";
import Text from "../common/Text";
import useInput from "@/hooks/useInput";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import axios from "axios";

const Register = () => {
  const email = useInput();
  const password = useInput();
  const confirmacion = useInput();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const newUser = {
      email: email.value,
      password: password.value,
      confirmacion: confirmacion.value,
    };

    const user = await axios.post(`http://localhost:3001/api/users/signup`, {
      email,
      password,
    });

    return user.data;
  };

  return (
    <form className="register" onSubmit={handleSignup}>
      <Minput
        data={email}
        color="blue"
        type="text"
        ico={<User color="blue" />}
        position="mt-20 mx-auto w-70"
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
        data={confirmacion}
        color="blue"
        type="password"
        ico={<Lock color="blue" />}
        position="mx-auto my-3 w-70"
        placeholder="confirmar contraseña"
      />
      <Button
        type={"submit"}
        href="/api/home"
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
        type="submit"
        href="/"
        bgc="bg-none text-blue"
        position="mx-auto mb-5 mt-2"
        text="iniciar sesion"
      />
    </form>
  );
};

export default Register;
