import { dolarApiClient } from "@/lib/DolarApiClient";
import { DollarQuotationInterface } from "@/types/DollarQuotationInterface";

// Function to get the last dollar quotation
// Função para obter a cotação do dólar
export const getTodayDollarQuotation = async () => {
  // Get the date of yesterday, because the API is updated every day with the data of the previous day
  // Obter a data de ontem, porque a API é atualizada diariamente com os dados do dia anterior
  const response = await dolarApiClient.get<DollarQuotationInterface>(
    `/last/USD-BRL`
  );
  return parseFloat(response.data.USDBRL.ask);
};
