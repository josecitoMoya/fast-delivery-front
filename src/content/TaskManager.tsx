'use client';
import Photo from '@/common/Photo';
import Week from '../components/Week';
import Details from '../components/Details';
import '../styles/taskmanager.css';
import { useEffect, useState } from 'react';
import { Payload, UserProfileData } from '@/types/user.types';
import User_Service from '@/services/user.services';
import axios from 'axios';
const TaskManager = () => {
  const [selectedDay, setSelectedDay] = useState(
    new Date().getDate().toString()
  );
  const [user, setUser] = useState<UserProfileData>({
    name: '',
    last_name: '',
    deliveryManInfo: '',
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
    <div>
      <div className="adminCont">
        <label htmlFor="file-upload" style={{ cursor:'pointer'}} >
          <Photo scale="big" photo={user.profile_img} />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleImageUpload}
          style={{ display: 'none'}}
        />{' '}
        <div className="ml-3">
          <h2 className="h2TaskMan">¡Hola {user.name} {user.last_name}!</h2>
          <p>Estos son los pedidos del dia</p>
        </div>
      </div>
      <Week selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <Details selectedDate={Number(selectedDay)} />
    </div>
  );
};
export default TaskManager;
