import { ChangeEventHandler } from "react";

export default function Input({
  onChange,
  value,
  placeholder,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
