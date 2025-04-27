import TableComponent from "@/components/TableComponent";
import { usePibData } from "@/hooks/usePibData";
import { PIBValuesInterface } from "@/types/PIBValuesInterface";
import { formatCurrency } from "@/utils/convertValueToDolar";

export default function Table() {
  const { pibTotal, pibPerCapita, isLoading } = usePibData();

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      {pibTotal && (
        <TableComponent
          data={pibTotal.map((pib: PIBValuesInterface) => ({
            ano: pib.year,
            valor: formatCurrency(pib.value, "en-US", "USD"),
          }))}
          columns={["ano", "valor"]}
        />
      )}
    </div>
  );
}
