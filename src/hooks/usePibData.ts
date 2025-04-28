import { useEffect, useState } from "react";
import { getPibTotal } from "@/api/get-pib-total";
import { getPibPerCapita } from "@/api/get-pib-per-capita";
import { PibUnitedInterface } from "@/types/PibUnitedInterface";
import { PIBValuesInterface } from "@/types/PIBValuesInterface";
import { getTodayDollarQuotation } from "@/api/get-today-dollar-quotation";

export function usePibData() {
  const [pibTotal, setPibTotal] = useState<PIBValuesInterface[] | null>(null);
  const [pibPerCapita, setPibPerCapita] = useState<PIBValuesInterface[] | null>(
    null
  );
  const [pibUnited, setPibUnited] = useState<PibUnitedInterface[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPibData() {
      try {
        const dollarData = await getTodayDollarQuotation();
        const [totalData, perCapitaData] = await Promise.all([
          getPibTotal(dollarData),
          getPibPerCapita(dollarData),
        ]);

        setPibTotal(totalData);
        setPibPerCapita(perCapitaData);

        const unitedData = totalData.map((totalItem) => {
          const matchingPerCapita = perCapitaData.find(
            (perCapitaItem) => perCapitaItem.year === totalItem.year
          );

          return {
            year: totalItem.year,
            total: totalItem.value,
            percapita: matchingPerCapita ? matchingPerCapita.value : 0,
          };
        });

        setPibUnited(unitedData);
      } catch (err) {
        console.error("Failed to fetch PIB data:", err);
        setError("Failed to load PIB data.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPibData();
  }, []);

  return { pibTotal, pibPerCapita, pibUnited, isLoading, error };
}
