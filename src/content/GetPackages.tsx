"use client";
import "../styles/greenScreen.css";
import Task from "../components/Task";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { setPackages } from "@/store/allPackages";
//Types
import { PackagesTypes } from "@/types/package.types";
//Services
import Packages_Services from "@/services/packages.services";
import { useEffect } from "react";

const GetPackages = () => {
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
      <div>
        <h2 className=" ml-4 text-left text-sm mt-3 font-bold">
          {packages.length} paquetes
        </h2>
        <p className=" ml-4 text-left text-xs">
          con el criterio de filtrado seleccionado
        </p>
      </div>
      {packages.map((item: PackagesTypes, index: number) => (
        <div data-testid="task" key={index} className="mb-2 mx-3">
          <Task
            bg="none"
            id={item.id}
            dir={item.destination + " "}
            state={""}
          />
        </div>
      ))}
    </>
  );
};
export default GetPackages;
