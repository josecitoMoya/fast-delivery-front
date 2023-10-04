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
import { PackagesTypes } from "@/types/package.types";
import Button from "@/common/Button";
import { setAllPackages } from "@/store/slices/packagesSlice";
import { useRouter } from "next/navigation";
const GetProductsContent = () => {
  const navigation = useRouter();
  const dispatch = useDispatch();
  const packages = useSelector((state: any) => state.packages);
  const [packagesId, setPackagesId] = useState<string[]>([]);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await Packages_Services.getAllPackages();
        dispatch(setPackages(data));
        dispatch(setAllPackages(packagesId));
        console.log(packagesId);
      } catch (error) {
        console.error("Error geting packages : ", error);
      }
    };
    getPackages();
  }, [packagesId]);

  const handleSubmit = () => {
    packagesId.length > 0
      ? navigation.push("/user/incidency")
      : alert("seleccione un paquete");
  };

  return (
    <>
      <h3 className="text-center mt-3">¿Cuántos paquetes repartirás hoy?</h3>
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
      <Button
        type="button"
        onClick={handleSubmit}
        bgc="bg-green text-blue"
        position="mx-auto my-5 "
        text="Iniciar jornada"
      />
    </>
  );
};
export default GetProductsContent;
