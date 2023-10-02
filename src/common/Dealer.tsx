'use client';
//Icons
import Porcentaje from '@/common/Porcentaje';
import State from './State';
import Photo from './Photo';
import { useEffect, useState } from 'react';
//Service
import Admin_Service from '@/services/admin.services';
const adminService = Admin_Service.getInstance();

const Dealer = () => {
  const [deliverymans, setDeliverymans] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getDeliverymansData = async () => {
      const data = await adminService.getAllDeliverymans();
      setDeliverymans(data?.data.message.deliverymans);
      setUsers(data?.data.message.users);
    };
    getDeliverymansData();
  }, []);

  return (
    <>
      {deliverymans.map((deliveryman) => {
        const correspondingUser = users.find(
          (user) => deliveryman._id === user.deliveryManInfo
        );

        return (
          <div key={deliveryman._id}>
            <div className="border-dotted border-b-2 border-sky-500 mx-2 mt-5 mb-2"></div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <div className="mx-2">
                  <Porcentaje percentage={45} />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold">
                    {correspondingUser
                      ? correspondingUser.name
                      : 'Nombre no encontrado'}
                  </h2>
                  <div>
                    <State
                      state={
                        deliveryman.active
                          ? deliveryman.current_deliveries > 0
                            ? 'EN CURSO'
                            : 'ACTIVO'
                          : 'INACTIVO'
                      }
                      bg={
                        deliveryman.active
                          ? deliveryman.current_deliveries > 0
                            ? 'bg-yellow'
                            : 'bg-green'
                          : 'bg-purple'
                      }
                    ></State>
                  </div>
                </div>
              </div>
              <div className="mr-5">
                <Photo scale="small"></Photo>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dealer;
