import TableComponent from "@/components/TableComponent";
import { ibgeApiClient } from "@/lib/IbgeApiClient";
import { QueryInterface } from "@/types/QueryInterface";
import { useEffect, useState } from "react";

export default function Table() {
  const [totalPib, setTotalPib] = useState<QueryInterface>();

  async function getTotalPib() {
    const response = await ibgeApiClient.get<QueryInterface[]>(
      "/agregados/6784/periodos/2010-2025/variaveis/9808?localidades=N1[all]"
    );
    setTotalPib(response.data[0]);
  }

  useEffect(() => {
    getTotalPib();
  }, []);

  return (
    <div>
      {totalPib && (
        <TableComponent
          data={Object.entries(totalPib.resultados[0].series[0].serie).map(
            ([year, value]) => ({
              ano: year,
              valor: value,
            })
          )}
          columns={["ano", "valor"]}
        />
      )}
    </div>
  );
}
