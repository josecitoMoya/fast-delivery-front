import React, { ChangeEvent } from "react";

interface DateInputProps {
  value: string;
  onChange: (date: string) => void;
  className?: string; // Permitimos la prop className opcional
}

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  className,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Expresión regular para permitir solo números y /
    const numericRegex = /^[0-9/]*$/;

    // Verifica si el valor cumple con el formato fecha
    if (numericRegex.test(inputValue)) {
      // Si el valor es válido toma el formato "00/00/00"
      const formattedValue = formatDate(inputValue);
      onChange?.(formattedValue);
    }
  };

  const formatDate = (value: string) => {
    // Formatea el valor para que tenga el formato de fecha "00/00/00"
    let formattedValue = value.replace(/\D/g, ""); // Eliminar todos los caracteres que no sean números
    formattedValue = formattedValue.slice(0, 6); // Limitar el valor a 6 caracteres
    formattedValue = formattedValue.replace(
      /^(\d{2})(\d{2})(\d{2})$/,
      "$1/$2/$3"
    ); // Formatear como "00/00/00"

    return formattedValue;
  };

  return (
    <input
      type="text"
      className={`dateInput ${className}`} // Usamos className aquí para aplicar estilos adicionales
      placeholder="00/00/00"
      value={value}
      onChange={handleChange}
    />
  );
};

export default DateInput;
