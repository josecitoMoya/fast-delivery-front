"use client";
//Components
import Product from "../components/Product";
import "../styles/greenScreen.css";
//Services
import Packages_Services from "@/services/packages.services";
//React
import { useEffect, useState } from "react";
//Redux

import { useDispatch, useSelector } from "react-redux";
import { setPackages } from "@/store/allPackages";
//Types
import { DeliverymanType } from "@/types/deliveryMan.type";
import { PackagesTypes } from "@/types/package.types";
import Button from "@/common/Button";
import { setAllPackages } from "@/store/slices/packagesSlice";
import { useRouter } from "next/navigation";
import deliveryManServices from "@/services/deliveryMan.services";
const GetProductsContent = () => {
  const navigation = useRouter();
  const dispatch = useDispatch();
  const packages = useSelector((state: any) => state.packages);
  const [packagesId, setPackagesId] = useState<string[]>([]);
  const [deliManInfo, setDeliManInfo] = useState<DeliverymanType>({
    _id: "",
    current_deliveries: 0,
    active: true,
    status: false,
    drinked_alcohol: false,
    taked_drugs: false,
    have_stress: false,
    packages: [],
  });
  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await Packages_Services.getAllPackages();
        dispatch(setPackages(data));
        dispatch(setAllPackages(packagesId));
      } catch (error) {
        console.error("Error geting packages : ", error);
      }
    };
    getPackages();
    const getDeliManInfo = async () => {
      try {
        const data = await deliveryManServices.getDeliveryManInfo();
        // ACA PODEMOS SETEAR LA DATA DEL DELIVERYMAN EN REDUX ASI LA TENEMOS GLOBAL
        //  Y LA PODEMOS USAR EN LA INCIDENCIA
        setDeliManInfo(data.data.message);
      } catch (error) {
        console.error("Error geting packages : ", error);
      }
    };
    getDeliManInfo();
  }, [packagesId]);

  const handleSubmit = () => {
    let quantity = 0;
    let quantityDispo = 10 - deliManInfo.current_deliveries;
    for (let i = 0; i < packages.length; i++) {
      for (let e = 0; e < packagesId.length; e++) {
        if (packages[i]._id == packagesId[e]) {
          quantity += packages[i].quantity;
        }
      }
    }
    if (quantity + deliManInfo.current_deliveries > 10) {
      alert(`Máximo de paquetes seleccionados.
      ${quantityDispo === 0 ? "" : `Solo puede seleccionar ${quantityDispo}`}`);
    } else if (packagesId.length > 0) {
      navigation.push("/user/incidency");
    } else {
      alert("Seleccione un paquete");
    }
  };

  return (
    <>
      <h3 className="text-center mt-3">¿Cuántos paquetes repartirás hoy?</h3>
      <div className="productScroll">
        {packages.map((elem: PackagesTypes, id: string) =>
          elem.quantity !== 0 && elem.is_delivered === false ? (
            <Product
              key={id}
              id={elem._id}
              destination={elem.destination + id}
              quantity={elem.quantity}
              setPackagesId={setPackagesId}
              packageId={packagesId}
            />
          ) : (
            ""
          )
        )}
      </div>
      <Button
        type="button"
        onClick={handleSubmit}
        bgc="bg-green text-blue"
        position="mx-auto my-5 mb-2 "
        text="Iniciar jornada"
      />
    </>
  );
};
export default GetProductsContent;
