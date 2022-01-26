import { useEffect, useState } from "react";
import { apiRoute, quoteRoute, rootUrl } from "../config/api";

interface IRateRequest {
  fromCur: string;
  amount: string;
  toCur: string;
}

export const useRequestRate = ({ fromCur, amount, toCur }: IRateRequest) => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (fromCur.length > 0 && amount.length > 0 && toCur.length > 0) {
        try {
          setLoading(true);
          const res = await fetch(
            `${rootUrl}/${apiRoute}/${quoteRoute}?from_currency_code=${fromCur}&amount=${amount}&to_currency_code=${toCur}`
          );
          const json = await res.json();
          setResponse(json);
        } catch (e: any) {
          setResponse(e);
        } finally {
          setLoading(false);
        }
      }
    };

    init();
  }, [fromCur, amount, toCur]);

  return { isLoading, response };
};
