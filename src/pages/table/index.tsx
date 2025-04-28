import TableComponent from "@/components/TableComponent";
import { usePibData } from "@/hooks/usePibData";
import { PibUnitedInterface } from "@/types/PibUnitedInterface";
import { formatCurrency } from "@/utils/formatCurrency";

export default function Table() {
  const { pibUnited, isLoading } = usePibData();


  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span>Carregando...</span>
      </div>
    );
  }

  if(!isLoading && !pibUnited){
    return (
      <div className="w-full h-screen flex items-center justify-center p-10">
        <span>Não foi possível buscar os valores do pib, por favor verificar console de desenvolvedor para mais detalhes</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      {pibUnited && (

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
      )}
    </div>
  );
}
