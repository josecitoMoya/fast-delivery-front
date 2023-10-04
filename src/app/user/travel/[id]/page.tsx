// Importa useNavigation en lugar de useRouter
"use client";
import Button from "@/common/Button";
import GreenScreen from "@/components/GreenScreen";
import TravelContent from "@/content/TravelContent";
import Nav from "@/components/Nav";
import "@/styles/travel.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { PackagesTypes } from "@/types/package.types";
import deliveryManServices from "@/services/deliveryMan.services";
const Travel = () => {
  //para obtener el id por parametro
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];

  const [packageData, setPackageData] = useState<PackagesTypes>();
  const apiURL = "http://localhost:3001/api";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/packages/${id}`, {
          withCredentials: true,
        });
        setPackageData(response.data.message);
      } catch (error) {
        console.error("Error al obtener el paquete:", error);
      }
    };

    fetchData();
  }, []);
  const handleSubmit = () => {
    try {
      deliveryManServices.UntakePackage(id);
    } catch (error) {
      console.error("Error taking packages: ", error);
    }
  };

  return (
    <div>
      <Nav href="/user/home" lHref="/" />
      <GreenScreen
        href="/user/incidency"
        h2="Reparto en curso"
        content={
          <TravelContent
            client={packageData ? packageData.client : ""}
            destination={packageData ? packageData.destination : ""}
            id={id} // Usa el valor de 'id' como sea necesario en tu página
            quantity_taked={packageData ? packageData.quantity_taked : 0}
          />
        }
      />

      <Button
        type="button"
        href="/user/get-products"
        bgc="bg-none text-white"
        position="mx-auto my-5 "
        onClick={handleSubmit}
        text="Cancelar entrega"
      />
    </div>
  );
};

export default Travel;
