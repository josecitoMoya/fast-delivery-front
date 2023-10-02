"use client";
import "../styles/Empty-input.css";
import EmptyInput from "../common/Empty-input";
import Button from "../common/Button";
import DateInput from "../common/DateInput";
import React, { useState } from "react";
import QuantityEditor from "@/common/QuantityEditor";

const AddProductContent = () => {
  const [date, setDate] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(10);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Dirección"
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Nombre De Quien Recibe"
      />

      <EmptyInput
        color="blue"
        type="text"
        position="mx-auto my-3 w-70"
        placeholder="Peso Del Paquete (KG)"
      />

      <div className="flex ">
        <DateInput
          value={date}
          onChange={handleDateChange}
          className="text-center quantity-container"
        />

        <div className="mx-2 border-blue  quantity-container">
          <QuantityEditor quantity={quantity} />
        </div>
      </div>

      <Button
        href="/"
        bgc="bg-green text-blue"
        position="mx-auto mb-3 mt-2"
        text="Agregar"
        type="submit"
      />
      <div className="mt-3"></div>
    </div>
  );
};

export default AddProductContent;
