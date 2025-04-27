import { ibgeApiClient } from "@/lib/IbgeApiClient";
import { PIBValuesInterface } from "@/types/PIBValuesInterface";
import { QueryInterface } from "@/types/QueryInterface";
import { convertValueToDolar } from "@/utils/convertValueToDolar";

// Function to get the total pib by year
// Função para obter o PIB total por ano
export const getPibTotal = async () => {
  const response = await ibgeApiClient.get<QueryInterface[]>(
    "/agregados/6784/periodos/2010-2025/variaveis/9808?localidades=N1[all]"
  );

  const totalPib: PIBValuesInterface[] = await Promise.all(
    Object.entries(response.data[0].resultados[0].series[0].serie).map(
      async ([year, value]) => {
        return {
          year: year,
          value: await convertValueToDolar(parseFloat(value)),
        };
      }
    )
  );
  return totalPib;
};
