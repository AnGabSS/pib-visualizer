import { getPibData } from "@/api/get-pib-data";
import { getPibTotal } from "@/api/get-pib-total";
import { getPibPerCapita } from "@/api/get-pib-per-capita";
import { getTodayDollarQuotation } from "@/api/get-today-dollar-quotation";

jest.mock("@/api/get-pib-total");
jest.mock("@/api/get-pib-per-capita");
jest.mock("@/api/get-today-dollar-quotation");

describe("getPibData", () => {
  it("should return combined PIB data with total, per capita and united data", async () => {

    const mockedGetTodayDollarQuotation = jest.mocked(getTodayDollarQuotation);
    const mockedGetPibTotal = jest.mocked(getPibTotal);
    const mockedGetPibPerCapita = jest.mocked(getPibPerCapita);

    mockedGetTodayDollarQuotation.mockResolvedValue(5.25);
    mockedGetPibTotal.mockResolvedValue([
      { year: "2020", value: 2000 },
      { year: "2021", value: 2100 },
    ]);
    mockedGetPibPerCapita.mockResolvedValue([
      { year: "2020", value: 1000 },
      { year: "2021", value: 1050 },
    ]);

    const result = await getPibData();

    expect(result.pibTotal).toEqual([
      { year: "2020", value: 2000 },
      { year: "2021", value: 2100 },
    ]);
    expect(result.pibPerCapita).toEqual([
      { year: "2020", value: 1000 },
      { year: "2021", value: 1050 },
    ]);
    expect(result.pibUnited).toEqual([
      { year: "2020", total: 2000, percapita: 1000 },
      { year: "2021", total: 2100, percapita: 1050 },
    ]);
  });

  it("should handle missing per capita data gracefully", async () => {
    const mockedGetTodayDollarQuotation = jest.mocked(getTodayDollarQuotation);
    const mockedGetPibTotal = jest.mocked(getPibTotal);
    const mockedGetPibPerCapita = jest.mocked(getPibPerCapita);

    mockedGetTodayDollarQuotation.mockResolvedValue(5.25);
    mockedGetPibTotal.mockResolvedValue([
      { year: "2020", value: 2000 },
      { year: "2021", value: 2100 },
    ]);
    mockedGetPibPerCapita.mockResolvedValue([{ year: "2020", value: 1000 }]);

    const result = await getPibData();

    expect(result.pibUnited).toEqual([
      { year: "2020", total: 2000, percapita: 1000 },
      { year: "2021", total: 2100, percapita: 0 },
    ]);
  });
});
