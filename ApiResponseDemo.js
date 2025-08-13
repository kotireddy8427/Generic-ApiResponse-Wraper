import React from "react";
import { useApi } from "../hooks/useApi";
import httpClient from "../api/httpClient";

export default function ApiResponseDemo() {
  const { response, loading, execute } = useApi(async (simulateError = false) => {
    if (simulateError) {
      // simulate error
      return await httpClient.get("/nonexistent");
    } else {
      // simulate success
      return await httpClient.get("/posts/1"); // example API
    }
  });

  return (
    <div style={{ maxWidth: 600, margin: "50px auto", padding: 20, border: "1px solid #ccc", borderRadius: 5 }}>
      <h2>Generic API Response Demo</h2>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => execute(false)} disabled={loading}>Simulate Success</button>
        <button onClick={() => execute(true)} disabled={loading}>Simulate Error</button>
      </div>
      {loading && <p>Loading...</p>}
      {response && (
        <pre style={{ backgroundColor: "#f5f5f5", padding: 10 }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}
