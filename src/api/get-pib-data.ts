import { getPibPerCapita } from "@/api/get-pib-per-capita";
import { getPibTotal } from "@/api/get-pib-total";
import { getTodayDollarQuotation } from "@/api/get-today-dollar-quotation";
import { PibUnitedInterface } from "@/types/PibUnitedInterface";
import { PIBValuesInterface } from "@/types/PIBValuesInterface";

interface PibDataResult {
  pibTotal: PIBValuesInterface[];
  pibPerCapita: PIBValuesInterface[];
  pibUnited: PibUnitedInterface[];
}

export async function getPibData(): Promise<PibDataResult> {
  const dollarData = await getTodayDollarQuotation();
  const [totalData, perCapitaData] = await Promise.all([
    getPibTotal(dollarData),
    getPibPerCapita(dollarData),
  ]);

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

  return {
    pibTotal: totalData,
    pibPerCapita: perCapitaData,
    pibUnited: unitedData,
  };
}
