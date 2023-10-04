'use client';
import { useState } from 'react';
//styles
import '../styles/minput.css';
//commons
import Minput from '../common/Minput';
import Button from '../common/Button';
import Text from '../common/Text';
// assets
import Lock from '../assets/Ico/Lock';
import User from '../assets/Ico/User';
//hooks
import useInput from '@/hooks/useInput';
//types
import { UserLogin } from '@/types/user.types';
// services
import User_Service from "@/services/user.services";
import { useRouter } from 'next/navigation';


const userService = new User_Service();

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const email = useInput();
  const password = useInput();
  const confirmacion = useInput();

const router = useRouter();
  const handleLogin = async () => {
    try{
    let userData: UserLogin = {
      email: email.value,
      password: password.value,
    };
    await userService.loginUser(userData);
    router.push('/user/home')
  }catch(error){
    alert('Error al iniciar sesión. Verifique sus credenciales.')
  }}
  return (
    <>
      <Minput
        color="white"
        type="text"
        ico={<User color="white" />}
        position="mx-auto mt-10 w-80"
        placeholder="email@contraseña.com"
        data={email}
      />
      <Minput
        color="white"
        type="password"
        ico={<Lock color="white" />}
        position="mx-auto my-3 w-80"
        placeholder="contraseña"
        data={password}
      />
      <Button
        bgc="bg-green text-blue"
        position="mx-auto mt-7"
        text="ingresar"
        type="submit"
        onClick={handleLogin}
      />

      <Button
        href="/user/register"
        bgc="bg-none text-white"
        position="mx-auto mt-3"
        text="crear cuenta"
        type="submit"
      />
      <Text text="OLVIDÉ MI CONTRASEÑA" textColor="white" position="mt-3" />
    </>
  );
};

export default Login;
