"use client";

import FoldingCont from "@/components/FoldingCont";
import GreenScreen from "@/components/GreenScreen";
import Nav from "@/components/Nav";
import ProfileState from "@/content/ProfileState";
import deliveryManServices from "@/services/deliveryMan.services";
import packagesServices from "@/services/packages.services";
import { DeliverymanType } from "@/types/deliveryMan.type";
import { PackagesTypes } from "@/types/package.types";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Profile = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];
  const apiURL: string = process.env.NEXT_PUBLIC_API_URL || "";

  const [deliManInfo, setDeliManInfo] = useState<DeliverymanType>({
    _id: '',
    current_deliveries: 0,
    active: true,
    status:false,
    drinked_alcohol: false,
    taked_drugs:false,
    have_stress: false,
    packages:[],
  });
  const [packages, setPackages] = useState<PackagesTypes[]>([]);
  const [packagesDelivered, setPackagesDelivered] = useState<PackagesTypes[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deliInfo = await deliveryManServices.getDeliveryManById(id);
        setDeliManInfo(deliInfo.data.message);
      } catch (error) {
        console.error("Error al obtener la informacion de delivery:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getTakedPackages = async () => {
      try {
        const nonDeliveredPackages = [];
        const deliveredPackages = [];
        for (let i=0;i<deliManInfo.packages.length;i++){
          const response = await packagesServices.getPackageById(deliManInfo.packages[i])
          const packageData = response;
          if (packageData.is_delivered) {
            deliveredPackages.push(packageData);
          } else {
            nonDeliveredPackages.push(packageData);
          }
        }
        setPackages(nonDeliveredPackages);
        setPackagesDelivered(deliveredPackages);
      } catch (error) {
        console.error("Error getting packages: ", error);
      }
    };
    getTakedPackages();
  }, [deliManInfo]);

  return (
    <div>
      <Nav href="/admin/diary" lHref="/" />
      <GreenScreen
        href="/admin/dealers"
        h2="Perfil del repartidor"
        content={<ProfileState status={deliManInfo.active}deliveryId={deliManInfo._id} />}
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
