import { NextPage } from "next";
import "../styles/Empty-input.css";
import { HTMLInputTypeAttribute } from "react";
interface Props {
  type: HTMLInputTypeAttribute;
  color: string;
  position: string;
  placeholder: string;
}

const EmptyInput: NextPage<Props> = ({
  type,
  placeholder,
  position,
  color,
}) => {
  return (
    <div
      className={`empty-input-cont ${position} flex-row flex color-${color} `}
    >
      <input
        type={type}
        className={`ml-3  empty-input placeholder-${color} text-${color}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default EmptyInput;
