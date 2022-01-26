import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import { currencies } from "../../config/currencies";

import "./Rate.css";

interface IRate {
  setBaseCur: Function;
  amount: string;
  setAmount: Function;
  setToCur: Function;
}

export default function Rate({
  setBaseCur,
  amount,
  setAmount,
  setToCur,
}: IRate) {
  return (
    <div className="rate-wrapper">
      <Select
        defaultOptionValue="from currency"
        data={currencies}
        onChange={(e) => setBaseCur(e.target.value)}
      />
      <Input
        placeholder="quote"
        value={amount}
        onChange={(e) => !isNaN(+e.target.value) && setAmount(e.target.value)}
      />
      <Select
        defaultOptionValue="to currency"
        data={currencies}
        onChange={(e) => setToCur(e.target.value)}
      />
    </div>
  );
}
