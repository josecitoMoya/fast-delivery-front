"use client";

//Components
import Product from "../components/Product";
import "../styles/greenScreen.css";
//Services
import Packages_Services from "@/services/packages.services";
//React
import { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { setPackages } from "@/store/allPackages";
//Types
import { PackagesTypes } from "@/types/package.types";

const GetProductsContent = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state: any) => state.packages);

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

  return (
    <>
      <h3 className="text-center mt-3">¿Cuántos paquetes repartirás hoy?</h3>
      {packages.map((elem: PackagesTypes, id: number) => (
        <Product
          key={id}
          destination={elem.destination + id}
          quantity={elem.quantity}
        />
      ))}
    </>
  );
};
export default GetProductsContent;
