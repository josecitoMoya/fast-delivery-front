import { NextPage } from 'next';
import '../styles/Empty-input.css';
import { HTMLInputTypeAttribute } from 'react';
interface Props {
  type: HTMLInputTypeAttribute;
  color: string;
  position: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmptyInput: NextPage<Props> = ({
  type,
  placeholder,
  position,
  color,
  value,
  onChange,
}) => {
  return (
    <div
      className={`border border-white border-opacity-10 rounded-2xl ${position} flex-row flex bg-${color}`}
    >
      <input
        type={type}
        className={` empty-input placeholder-${color} text-${color}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EmptyInput;
