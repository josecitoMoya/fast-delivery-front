"use client";
import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return { onChange, setValue, value };
};

export default useInput;
