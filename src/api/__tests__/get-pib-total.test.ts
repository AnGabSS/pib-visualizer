import { getPibTotal } from "@/api/get-pib-total";
import { ibgeApiClient } from "@/lib/IbgeApiClient";

jest.mock("@/lib/IbgeApiClient"); 

describe("getPibTotal", () => {
  it("should return correct PIB total values for the years 2020 and 2021", async () => {
    (ibgeApiClient.get as jest.Mock).mockResolvedValue({
      data: [
        {
          resultados: [
            {
              series: [
                {
                  serie: {
                    "2020": "2000",
                    "2021": "2100",
                  },
                },
              ],
            },
          ],
        },
      ],
    });

    const result = await getPibTotal();

    expect(result).toEqual([
      { year: "2020", value: 2000 },
      { year: "2021", value: 2100 },
    ]);
  });

  it("should correctly handle PIB values when currency is provided", async () => {
    const currency = 2;

    (ibgeApiClient.get as jest.Mock).mockResolvedValue({
      data: [
        {
          resultados: [
            {
              series: [
                {
                  serie: {
                    "2020": "3885847",
                    "2021": "4376382",
                  },
                },
              ],
            },
          ],
        },
      ],
    });

    const result = await getPibTotal(currency);

    expect(result[0].value).toBeCloseTo(3885847 / currency, 2);
    expect(result[1].value).toBeCloseTo(4376382 / currency, 2);
  });
});
