export const formatCurrency = (
  value: number | string,
  locale: string,
  currency: string
) => {
  //Verify if the value is a number
  //Verifica se o valor é um número
  if (isNaN(parseFloat(value as string))) {
    return "";
  }

  return value.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
};
