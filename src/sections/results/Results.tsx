export default function Results({
  response,
}: {
  response: {
    exchange_rate: number;
    currency_code: string;
    amount: number;
  } | null;
}) {
  const { exchange_rate, currency_code, amount } = response || {};
  return (
    <div className="results-wrapper">
      <p>Current Rate: {exchange_rate}</p>
      <p>Currency code: {currency_code}</p>
      <p>Total amount: {amount}</p>
    </div>
  );
}
