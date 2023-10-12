"use client";
import { useEffect, useState } from "react";
//Commons
import Photo from "@/common/Photo";
import State from "@/common/State";
import "../styles/profileState.css";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryman } from "@/store/deliveryman";
//Services
import Admin_Service from "@/services/admin.services";
import Switch from "@/common/Switch";
import deliveryManServices from "@/services/deliveryMan.services";
import { NextPage } from "next";
const adminService = Admin_Service.getInstance();
interface Props {
  deliveryId: string;
  status: boolean;
}

const ProfileState: NextPage<Props> = ({ deliveryId, status }) => {
  const userInfo = useSelector((state: any) => state.userInfo);
  const deliverymanInfo = useSelector((state: any) => state.deliverymanInfo);
  const [active, setActive] = useState(status);
  const [on, setOn] = useState('');
  const dispatch = useDispatch();
  console.log(active);
  console.log('onnnn', on);

  useEffect(() => {
    setActive(status);
    setOn(status? "on" : "off")
  }, [deliveryId]);

  const toggleActive = async () => {
    if (deliveryId) {
  
      setActive(!active);
      console.log("deli id", deliveryId);

      await deliveryManServices.MarkActiveOrInactive(deliveryId);
      dispatch(setDeliveryman({ ...deliverymanInfo, active: !active }));
    }
  };

  // if (!userInfo || !deliverymanInfo) {
  //   return (
  //     <div className="mt-3 mb-3 ml-3 mr-3">
  //       Vuelva atras e ingrese de nuevo por favor
  //     </div>
  //   );
  // }
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="photo">
          <Photo scale="small" photo={userInfo.profile_img}/>
        </div>
        <div>
          <h2 className="ml-3">{userInfo.name?userInfo.name:'vuelva a ingresar'}</h2>
          {active === true ? (
            <State state="ACTIVO" bg="bg-lightgreen" />
          ) : (
            <State state="INACTIVO" bg="bg-purple" />
          )}
        </div>
      </div>
      <div onClick={toggleActive}>
        <Switch state={on} setState={setOn}/>
      </div>
    </div>
  );
};
export default ProfileState;
