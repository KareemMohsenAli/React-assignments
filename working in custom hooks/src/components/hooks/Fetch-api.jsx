import React from "react";

export default function useFetchApi(requestConfig, applydata) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ?requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers:{},
        body: JSON.stringify(requestConfig.body) ?JSON.stringify(requestConfig.body):null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applydata(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };


  return{
    isLoading,
    error,
    sendRequest
  }
}
