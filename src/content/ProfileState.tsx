'use client';
import { useState } from 'react';
//Commons
import Photo from '@/common/Photo';
import State from '@/common/State';
import '../styles/profileState.css';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryman } from '@/store/deliveryman';
//Services
import Admin_Service from '@/services/admin.services';
import Switch from '@/common/Switch';
const adminService = Admin_Service.getInstance();

const ProfileState = () => {
  const userInfo = useSelector((state: any) => state.userInfo);
  const deliverymanInfo = useSelector((state: any) => state.deliverymanInfo);
  const [active, setActive] = useState(deliverymanInfo.active);

  const dispatch = useDispatch();
  if (!userInfo || !deliverymanInfo) {
    return (
      <div className="mt-3 mb-3 ml-3 mr-3">
        Vuelva atras e ingrese de nuevo por favor
      </div>
    );
  }
  const toggleActive = async () => {
    setActive(!active);
    const updatedDeliverymanInfo = { ...deliverymanInfo, active: !active };
    dispatch(setDeliveryman(updatedDeliverymanInfo));
    console.log('soy updatedDeliverymanInfo : ', updatedDeliverymanInfo);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="photo">
          <Photo scale="small" />
        </div>
        <div>
          <h2 className="ml-3">{userInfo.name}</h2>
          {active === true ? (
            <State state="ACTIVO" bg="bg-lightgreen" />
          ) : (
            <State state="INACTIVO" bg="bg-purple" />
          )}
        </div>
      </div>
      <div onClick={toggleActive}>
        <Switch />
      </div>
    </div>
  );
};
export default ProfileState;
