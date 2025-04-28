import { ibgeApiClient } from "@/lib/IbgeApiClient";
import { PIBValuesInterface } from "@/types/PIBValuesInterface";
import { QueryInterface } from "@/types/QueryInterface";

// Function to get the total pib by year
// Função para obter o PIB total por ano
export const getPibTotal = async (currency?: number) => {
  const response = await ibgeApiClient.get<QueryInterface[]>(
    "/agregados/6784/periodos/all/variaveis/9808?localidades=N1[all]"
  );

  const totalPib: PIBValuesInterface[] = await Promise.all(
    Object.entries(response.data[0].resultados[0].series[0].serie).map(
      async ([year, value]) => {
        return {
          year: year,
          value: currency ? await parseFloat(value) / currency : parseFloat(value),
        };
      }
    )
  );
  return totalPib;
};
