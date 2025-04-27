import { bcbApiClient } from "@/lib/BCBApiCliente";
import { DollarQuotationInterface } from "@/types/DollarQuotationInterface";

// Function to get the last dollar quotation
// Função para obter a cotação do dólar
export const getTodayDollarQuotation = async () => {
  // Get the date of yesterday, because the API is updated every day with the data of the previous day
  // Obter a data de ontem, porque a API é atualizada diariamente com os dados do dia anterior
  const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toLocaleDateString("pt-BR");
  const response = await bcbApiClient.get<DollarQuotationInterface[]>(
    `/dados/serie/bcdata.sgs.1/dados?formato=json&dataInicial=${yesterday}&dataFinal=${yesterday}`
  );
  return parseFloat(response.data[0].valor);
};
