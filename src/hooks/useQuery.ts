import { useCallback, useEffect, useState } from "react";

type QueryFnType = () => Promise<any>;

export function useQuery<T extends QueryFnType>(queryFn: T) {
  const [data, setData] = useState<Awaited<ReturnType<T>> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await queryFn();
      setData(response);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, isLoading, error };
}
