import { ibgeApiClient } from "@/lib/IbgeApiClient";
import { QueryInterface } from "@/types/QueryInterface";
import { convertValueToDolar } from "@/utils/convertValueToDolar";
import { PIBValuesInterface } from "./../types/PIBValuesInterface";

// Function to get the per capita pib by year
// Função para obter o PIB per capita por ano
export const getPibPerCapita = async () => {
  const response = await ibgeApiClient.get<QueryInterface[]>(
    "/agregados/6784/periodos/2010-2025/variaveis/9812?localidades=N1[all]"
  );

  // Convert the value to dollar, the Object.entries is used because the value of serie comes as of type "string": "value"
  // Converta o valor para dólar, o Object.entries é usado porque o valor do serie vem como tipo "string": "value"
  const pibPerCapita: PIBValuesInterface[] = await Promise.all(
    Object.entries(response.data[0].resultados[0].series[0].serie).map(
      async ([year, value]) => {
        return {
          year: year,
          value: await convertValueToDolar(parseFloat(value)),
        };
      }
    )
  );
  return pibPerCapita;
};
