"use client";
import Button from "@/common/Button";
import SwitchIncidency from "@/common/SwitchIncidency";
import deliveryManServices from "@/services/deliveryMan.services";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { PackagesTakedIdType } from "@/types/packageNew";

interface RootState {
  packagesTaked: string[];
}

const IncidencyContent = () => {
  const packagesTakedId = useSelector(
    (state: RootState) => state.packagesTaked
  );
  const [alcohol, setAlcohol] = useState<boolean | undefined>(undefined);
  const [drogas, setDrogas] = useState<boolean | undefined>(undefined);
  const [estres, setEstres] = useState<boolean | undefined>(undefined);
  const navigation = useRouter();

  const handleAlcoholChange = (value: boolean) => {
    setAlcohol(value);
  };
  const handleDrogasChange = (value: boolean) => {
    setDrogas(value);
  };
  const handleEstresChange = (value: boolean) => {
    setEstres(value);
  };

  const handleSubmit = async () => {
    if (alcohol === undefined || drogas === undefined || estres === undefined) {
      return alert("Debe responder a todas las preguntas");
    }
    if (!alcohol && !drogas && !estres) {
      try {
        await deliveryManServices.TakePackage(packagesTakedId);
        navigation.push("/user/home");
      } catch (error) {
        console.error("Error al tomar paquetes: ", error);
      }
    } else {
      alert("No tiene permitido repartir paquetes");
    }
  };

  return (
    <div>
      <h2 className="text-center my-5 mt-2">con un margen de 24hs confirma si...</h2>
      <div>
        <div className="question mx-auto">
          <p>has ingerido alcohol</p>
          <SwitchIncidency onChange={handleAlcoholChange} state={alcohol} />
        </div>
        <div className="question mx-auto ">
          <p>has ingerido drogas</p>
          <SwitchIncidency onChange={handleDrogasChange} state={drogas} />
        </div>
        <div className="question mx-auto">
          <p>has sentido estrés</p>
          <SwitchIncidency onChange={handleEstresChange} state={estres} />
        </div>
      </div>
      <Button
        bgc="bg-green"
        text="enviar"
        position="mx-auto my-5 mb-3"
        type="button"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default IncidencyContent;
