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

  const [packageData, setPackageData] = useState<PackagesTypes[]>([]);
  const apiURL = "http://localhost:3001/api";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/packages/${id}`, {
          withCredentials: true,
        });

        // Actualiza el estado con los datos del paquete
        setPackageData(response.data.message);
      } catch (error) {
        console.error("Error al obtener el paquete:", error);
        // Manejo de errores, puedes mostrar un mensaje de error en la interfaz
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Nav href="/user/home" lHref="/" />
      <GreenScreen
        href="/user/incidency"
        h2="Reparto en curso"
        content={
          <TravelContent
            destinatario={packageData ? packageData.client : ""}
            dir={packageData ? packageData.destination : ""}
            id={id} // Usa el valor de 'id' como sea necesario en tu página
          />
        }
      />
      <Button
        type="button"
        href="/user/get-products"
        bgc="bg-none text-white"
        position="mx-auto my-5 "
        text="Cancelar entrega"
      />
 
    </div>
  );
};

export default Travel;
