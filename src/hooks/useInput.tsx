"use client";

import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<String>("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return { onChange, value };
};

export default useInput;
