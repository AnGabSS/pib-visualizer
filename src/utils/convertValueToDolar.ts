import { getTodayDollarQuotation } from "@/api/get-today-dollar-quotation";

export const convertValueToDolar = async (value: number) => {
  const dolarQuotation = await getTodayDollarQuotation();
  return value / dolarQuotation;
};

export const formatCurrency = (
  value: number,
  locale: string,
  currency: string
) => {
  return value.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
};
