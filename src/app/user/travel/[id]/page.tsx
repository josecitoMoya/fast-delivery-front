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

const Travel = () => {
  //para obtener el id por parametro
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];
  const [packageData, setPackageData] = useState<PackagesTypes>();
  const apiURL: string = process.env.NEXT_PUBLIC_API_URL || "";


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


  return (
    <div>
      <Nav href="/user/home" lHref="/" />
      <GreenScreen
        href="/user/home"
        h2={packageData && packageData.is_delivered ? "Reparto terminado" : "Reparto en curso"}
        content={
          <TravelContent
            client={packageData ? packageData.client : ""}
            destination={packageData ? packageData.destination : ""}
            id={id}
          quantity_taked={packageData ? packageData.quantity_taked : 0}
          is_delivered={packageData ? packageData.is_delivered : false}
          coords={packageData ? packageData.coords : { lat: 0, lng: 0 }}
          />
        }
      />
    </div>
  );
};

export default Travel;
