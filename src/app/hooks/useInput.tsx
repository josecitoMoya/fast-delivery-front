import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<String>("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return { onChange, setValue, value };
};

export default useInput;
