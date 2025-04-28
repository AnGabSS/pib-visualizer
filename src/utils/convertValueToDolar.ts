import { getTodayDollarQuotation } from "@/api/get-today-dollar-quotation";

export const convertValueToDolar = async (value: number) => {
  const dolarQuotation = await getTodayDollarQuotation();
  return value / dolarQuotation;
};
