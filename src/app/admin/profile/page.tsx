'use client';

import FoldingCont from '@/components/FoldingCont';
import GreenScreen from '@/components/GreenScreen';
import Nav from '@/components/Nav';
import ProfileState from '@/content/ProfileState';
import deliveryManServices from '@/services/deliveryMan.services';
import { PackagesTypes } from '@/types/package.types';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [packages, setPackages] = useState<PackagesTypes[]>([]);
  const [packagesDelivered, setPackagesDelivered] = useState<PackagesTypes[]>(
    []
  );
  useEffect(() => {
    const getTakedPack = async () => {
      try {
        const data = await deliveryManServices.getTakedPackages();
        const packages = data.data.message;

        const nonDeliveredPackages = packages.filter(
          (pack: PackagesTypes) => !pack.is_delivered
        );
        const deliveredPackages = packages.filter(
          (pack: PackagesTypes) => pack.is_delivered
        );

        setPackages(nonDeliveredPackages);
        setPackagesDelivered(deliveredPackages);
      } catch (error) {
        console.error('Error geting packages : ', error);
      }
    };
    getTakedPack();
  }, []);
  return (
    <div>
      <Nav href="/admin/diary" lHref="/" />
      <GreenScreen
        href="/admin/dealers"
        h2="Perfil del repartidor"
        content={<ProfileState />}
      />
      <FoldingCont
        text="Repartos pendientes"
        tasks={packages}
        position="mt-2"
      />
      <FoldingCont
        tasks={packagesDelivered}
        position="mt-2"
        text="Repartos terminados"
      />
    </div>
  );
};
export default Profile;
