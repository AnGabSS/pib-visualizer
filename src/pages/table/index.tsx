import { getPibData } from "@/api/get-pib-data";
import TableComponent from "@/components/TableComponent";
import { PIBPageProps } from "@/types/PIBPageProps";
import { PibUnitedInterface } from "@/types/PibUnitedInterface";
import { formatCurrency } from "@/utils/formatCurrency";

//Get the data from the API one time every 30 days
//Obtenha os dados da API uma vez a cada 30 dias
export async function getStaticProps() {
  try {
    const data = await getPibData();

    return {
      props: data,
      revalidate: 60 * 60 * 24 * 30,
    };
  } catch (error) {
    console.error("Erro ao buscar dados do PIB:", error);
    return {
      props: {
        pibTotal: [],
        pibPerCapita: [],
        pibUnited: [],
      },
      revalidate: 60 * 60 * 24,
    };
  }
}

export default function Table({ pibUnited }: PIBPageProps) {
  if (!pibUnited) {
    return (
      <div className="w-full h-screen flex items-center justify-center p-10">
        <span>
          Não foi possível buscar os valores do pib, por favor verificar console
          de desenvolvedor para mais detalhes
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-[90vh] items-center justify-center">
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
          className="bg-white rounded-xl"
        />
      )}
    </div>
  );
}
