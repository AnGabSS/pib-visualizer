import { getPibTotal } from "@/api/get-pib-total";
import { PIBValuesInterface } from "@/types/PIBValuesInterface";
import { useEffect, useState } from "react";
import { getPibPerCapita } from "./../api/get-pib-per-capita";

export function usePibData() {
  const [pibTotal, setPibTotal] = useState<PIBValuesInterface[] | null>(null);
  const [pibPerCapita, setPibPerCapita] = useState<PIBValuesInterface[] | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pibTotalQuery = getPibTotal();
    const pibPerCapitaQuery = getPibPerCapita();

    Promise.all([pibTotalQuery, pibPerCapitaQuery]).then(
      ([pibTotal, pibPerCapita]) => {
        setPibTotal(pibTotal);
        setPibPerCapita(pibPerCapita);
        setIsLoading(false);
      }
    );
  }, []);

  return { pibTotal, pibPerCapita, isLoading };
}
