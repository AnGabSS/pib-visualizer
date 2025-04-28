import { useEffect, useState } from "react";

import { DollarQuotationInterface } from "@/types/DollarQuotationInterface";
import { getTodayDollarQuotation } from "@/api/get-today-dollar-quotation";

export function useDollarQuotation() {
  const [dollarQuotation, setDollarQuotation] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDollarQuotation = async () => {
    try {
      setIsLoading(true);
      const response = await getTodayDollarQuotation();
      
 
      if (isNaN(response)) {
        throw new Error("Invalid quotation value received");
      }
      
      setDollarQuotation(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDollarQuotation();
  }, []);

  return { dollarQuotation, isLoading, error };
}
