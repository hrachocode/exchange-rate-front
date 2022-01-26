import { ChangeEventHandler } from "react";

export default function Select({
  onChange,
  data,
  defaultOptionValue,
}: {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  data: string[];
  defaultOptionValue: string;
}) {
  return (
    <select onChange={onChange}>
      <option value="">{defaultOptionValue}</option>
      {data.map((elem) => (
        <option key={elem} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
}
