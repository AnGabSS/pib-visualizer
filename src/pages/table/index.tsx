import TableComponent from "@/components/TableComponent";
import { usePibData } from "@/hooks/usePibData";
import { PibUnitedInterface } from "@/types/PibUnitedInterface";
import { formatCurrency } from "@/utils/formatCurrency";

export default function Table() {
  const { pibUnited, isLoading } = usePibData();

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      {pibUnited && (
        <section className="w-[90%] md:w-[70%] h-[90%] md:h-[70%]">
          <TableComponent
            data={pibUnited.map((pib: PibUnitedInterface) => ({
              ano: pib.year,
              total: formatCurrency(pib.total, "en-US", "USD"),
              percapita: formatCurrency(pib.percapita, "en-US", "USD"),
            }))}
            columns={[
              { key: "ano", label: "Ano" },
              { key: "total", label: "PIB Total" },
              { key: "percapita", label: "PIB Per Capita" },
            ]}
          />
        </section>
      )}
    </div>
  );
}
