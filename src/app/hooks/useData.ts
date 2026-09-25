import { useEffect, useState } from "react";

import olympicsData from "../data/olympics.json";
import type { Olympic } from "../models/Olympic";

interface UseDataResult {
  data: Olympic[];
  loading: boolean;
  error: string | null;
}

export const useData = (): UseDataResult => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        setData(olympicsData);
      } catch {
        setError("Une erreur est survenue lors du chargement des données.");
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return {
    data,
    loading,
    error,
  };
};
