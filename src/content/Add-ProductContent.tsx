"use client";
import "../styles/Empty-input.css";
import React, { useState } from "react";
//Commons
import EmptyInput from "../common/Empty-input";
import Button from "../common/Button";
import DateInput from "../common/DateInput";
import QuantityEditor from "@/common/QuantityEditor";
//Hooks
import useInput from "@/hooks/useInput";
//Services
import Admin_Service from "@/services/admin.services";
const adminService = Admin_Service.getInstance();
//Dto
import { createPackageDto } from "@/services/dto/admin.dto";

const AddProductContent = () => {
  const [date, setDate] = useState<Date | null>();
  const [quantity, setQuantity] = useState<number>(0);

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  const handleCreatePackage = async () => {
    const packageWeigthNumber = parseInt(packageWeigth.value, 10);
    if (!isNaN(packageWeigthNumber)) {
      const newPackage: createPackageDto = {
        client: clientName.value,
        quantity: quantity,
        destination: adress.value,
        package_weigth: packageWeigthNumber,
        deadline_date: date ?? null,
      };
      await adminService.addNewPackage(newPackage);
    } else {
      return alert("El Peso Del Paquete Debe Ser Un Numero");
    }
  };

  let adress = useInput();
  let clientName = useInput();
  let aditionalInfo = useInput();
  let packageWeigth = useInput();

  return (
    <div className="flex flex-col items-center justify-center">
      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Dirección"
        {...adress}
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Nombre De Quien Recibe"
        {...clientName}
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Peso Del Paquete (KG)"
        {...packageWeigth}
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Informacion Adicional"
        {...aditionalInfo}
      />

      <div className="flex items-center justify-between h-10 p-4 w-[65%]">
        <DateInput
          selected={date}
          setDate={handleDateChange}
          className="w-full h-full border-blue p-4 text-center quantity-container"
        />

        <div className="w-full h-full p-4 border-blue quantity-container">
          <QuantityEditor quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>

      <Button
        href="/"
        bgc="bg-green text-blue"
        position="mx-auto mb-3 mt-2"
        text="Agregar"
        type="submit"
        onClick={handleCreatePackage}
      />
      <div className="mt-3"></div>
    </div>
  );
};

export default AddProductContent;
