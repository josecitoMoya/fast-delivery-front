'use client';
import Button from '@/common/Button';
import '@/styles/Profile.css';
import { useEffect, useState } from 'react';
import { Payload } from '@/types/user.types';
import Link from 'next/link';
const ProfileContent = () => {
  const [user, setUser] = useState<Payload>({
    name: '',
    id: '',
    email: '',
    is_admin: false,
    is_deleted: false,
    profile_img: '',
  });

  useEffect(() => {
    try {
      const tokenCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='));
      const token = tokenCookie ? tokenCookie.split('=')[1] : null;

      // Decodificar el token si existe
      if (token) {
        const tokenParts = token.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        setUser(payload.user);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(
        'Error al obtener la informacion del usuario, vuelva a ingresar sesion.'
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center cont">
      <div className="cont-picture">
        <img className="perfil" src={user.profile_img} alt="picture profile" />
      </div>
      <h1 className="text-center">Nombre: {user.name}</h1>
      <h1 className="text-center">Email: {user.email}</h1>
      <div className="flex my-auto">
        <div className="mx-auto my-5 mb-3 btnCont-profile flex bg-green">
          <Link href={'/user/home'} className=" my-auto ">
            <button className="btn mx-auto " type="button">
              Mis Paquetes
            </button>
          </Link>
        </div>
        <div className="mx-auto my-5 mb-3 btnCont-profile flex bg-green">
          <Link href={'/user/get-products'} className=" my-auto ">
            <button className="btn mx-auto " type="button">
              Obtener paquetes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
