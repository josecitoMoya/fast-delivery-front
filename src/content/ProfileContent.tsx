'use client';
import '@/styles/Profile.css';
import { useEffect, useState } from 'react';
import { UserProfileData } from '@/types/user.types';
import Link from 'next/link';
import axios from 'axios';
import User_Service from '@/services/user.services';
const ProfileContent = () => {
  const [user, setUser] = useState<UserProfileData>({
    name: '',
    last_name:'',
    deliveryManInfo:'',
    _id: '',
    email: '',
    is_admin: false,
    is_deleted: false,
    profile_img: '',
  });
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenCookie = document.cookie
          .split('; ')
          .find((row) => row.startsWith('token='));
        const token = tokenCookie ? tokenCookie.split('=')[1] : null;

        // Decodificar el token si existe
        if (token) {
          const tokenParts = token.split('.');
          let payload = JSON.parse(atob(tokenParts[1]));

          const info = await new User_Service().getUser(payload.user.id);
          setUser(info.data);
        }
      } catch (error) {
        console.error('Error:', error);
        alert(
          'Error al obtener la información del usuario, vuelva a iniciar sesión.'
        );
      }
    };

    fetchData(); // Llama a la función asíncrona definida dentro de useEffect
  }, [image]);

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fast-delivery');

    try {
      // Subir la imagen a Cloudinary
      const responseCloudinary = await axios.post(
        'https://api.cloudinary.com/v1_1/leoncloud/image/upload',
        formData
      );
      const data = responseCloudinary.data;
      setImage(data.secure_url);

      const userData = {
        profile_img: data.secure_url,
      };
      try {
        await new User_Service().update_info(user._id, userData);
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
      }
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };

  return (
    <div className="flex flex-col items-center cont">
      <div className="cont-picture">
        <label htmlFor="file-upload">
          <img
            className="perfil"
            src={user.profile_img}
            alt="picture profile"
          />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </div>
      <h1 className="text-center">Nombre: {user.name} {user.last_name}</h1>
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
