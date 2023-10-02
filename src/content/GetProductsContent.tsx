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
import deliveryManServices from "@/services/deliveryMan.services";

const GetProductsContent = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state: any) => state.packages);
  const [packagesId, setPackagesId] = useState<string[]>([]);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await Packages_Services.getAllPackages();
        dispatch(setPackages(data));
      } catch (error) {
        console.error("Error geting packages : ", error);
      }
    };
    getPackages();
  }, []);

  const handleSubmit = async () => {
    try {
      await deliveryManServices.TakePackage(packagesId);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };


  return (
    <>
      <h3 className="text-center mt-3">¿Cuántos paquetes repartirás hoy?</h3>
      {packages.map((elem: PackagesTypes, id: string) =>
        elem.quantity !== 0 ? (
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
        href="/user/incidency"
        bgc="bg-green text-blue"
        position="mx-auto my-5 "
        text="Iniciar jornada"
        onClick={handleSubmit}
      />
    </>
  );
};
export default GetProductsContent;
