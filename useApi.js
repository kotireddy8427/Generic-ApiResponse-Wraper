import { useState, useCallback } from "react";

export function useApi(apiFunction) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (...params) => {
    setLoading(true);
    try {
      const res = await apiFunction(...params);
      setResponse(res);
      return res;
    } catch (err) {
      setResponse(err);
      return err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  return { response, loading, execute };
}
