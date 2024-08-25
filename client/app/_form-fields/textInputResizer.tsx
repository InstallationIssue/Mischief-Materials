// prettier-ignore
'use client'
import { useState } from "react";

export default function textInputResizer({
  id,
  placeholder,
}: {
  id: string;
  placeholder: string;
}) {
  const [fieldSize, setFieldSize] = useState(placeholder.length);

  function changeSize(newValue: string) {
    if (newValue.length === 0) {
      setFieldSize(Math.max(1, placeholder.length));
    } else {
      setFieldSize(Math.max(1, newValue.length));
    }
  }

  return (
    <label className="align-top items-center relative ps-2 w-fit font-mono">
      <input
        id={id}
        name={id}
        type="text"
        onChange={(e) => changeSize(e.target.value)}
        size={fieldSize}
        minLength={2}
        maxLength={24}
        placeholder={placeholder}
        className="bg-transparent resize-none appearance-none border-none m-0 focus:outline-none w-auto capitalize font-bold"
      />
    </label>
  );
}
