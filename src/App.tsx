import Rate from "./sections/rate/Rate";
import Results from "./sections/results/Results";

import "./App.css";
import { useState } from "react";
import { useRequestRate } from "./hooks/useRequestRate";

function App() {
  const [fromCur, setFromCur] = useState("");
  const [amount, setAmount] = useState("");
  const [toCur, setToCur] = useState("");

  const requestData = { fromCur, amount, toCur };

  const { isLoading, response } = useRequestRate(requestData);

  return (
    <div className="App">
      <Rate
        setBaseCur={setFromCur}
        amount={amount}
        setAmount={setAmount}
        setToCur={setToCur}
      />
      {!isLoading ? (
        response && <Results response={response} />
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}

export default App;
