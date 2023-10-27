import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputProps {
  selected?: Date | null;
  setDate?: (date: Date | null) => void;
  className?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  selected,
  setDate,
  className,
}) => {
  return (
    <div className={` relative ${className}`}>
      <DatePicker
        selected={selected}
        onChange={(date) => setDate?.(date)}
        placeholderText="00/00/0000"
        className="dateInput border border-blue-500 rounded-lg outline-none   text-center"
      />
    </div>
  );
};

export default DateInput;
