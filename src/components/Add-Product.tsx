"use client";
import "../styles/Empty-input.css";
import EmptyInput from "../common/Empty-input";
import Button from "../common/Button";
import DateInput from "../common/DateInput";
import React, { useState } from "react";
import QuantityEditor from "@/common/QuantityEditor";

const AddProduct = () => {
  const [date, setDate] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const handleDateChange = (newDate: string) => {
    setDate(newDate);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <br />
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

      <div className="flex items-center  justify-center  h-10 p-4 w-[65%]">
        {/* DateInput a la izquierda */}
        <DateInput
          value={date}
          onChange={handleDateChange}
          className="w-28 h-full border-blue p-4 text-center quantity-container"
        />

        {/* Div para bordes redondeados */}
        <div className="w-28 h-full p-4 border-blue  quantity-container">
          <QuantityEditor quantity={quantity} />
        </div>
      </div>

      <Button
        href="/"
        bgc="bg-green text-blue"
        position="mx-auto mb-5 mt-2"
        text="Agregar"
        type="submit"
      />
    </div>
  );
};

export default AddProduct;
