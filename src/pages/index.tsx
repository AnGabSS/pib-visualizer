import { getPibData } from "@/api/get-pib-data";
import BarChartsComponent from "@/components/BarChartsComponent";
import LineChartsComponent from "@/components/LineChartsComponent";
import Tabs from "@/components/Tabs/Tabs";
import { PIBPageProps } from "@/types/PIBPageProps";
import { TabInterface } from "@/types/TabInterface";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";

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

export default function Home({ pibUnited }: PIBPageProps) {
  const [selectedTab, setSelectedTab] = useState<string>("bar");
  const tabs: TabInterface[] = [
    { key: "bar", value: "Barras" },
    { key: "line", value: "Linha" },
  ];

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

  const firstInfoChar = {
    key: "total",
    name: "Pib Total",
  };

  const secondInfoChar = {
    key: "percapita",
    name: "Pib Per capito",
  };

  return (
    <div className="flex flex-col w-full h-[90vh] items-center justify-center  p-5 md:p-10">
      <div className="flex flex-col w-full h-full items-center justify-center bg-white rounded-xl">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
        <>
        <h2 className="text-center">Valores em dólares</h2>
          <section
            className={`w-full h-[90%] ${
              selectedTab === "bar" ? "" : "hidden"
            }`}
          >
            <BarChartsComponent
              data={pibUnited!}
              firstBar={firstInfoChar}
              secondBar={secondInfoChar}
              xAxisKey="year"
              formatter={(value) => formatCurrency(value, "en-US", "USD")}
            />
          </section>
          <section
            className={`w-full h-[90%] ${
              selectedTab === "line" ? "" : "hidden"
            }`}
          >
            <LineChartsComponent
              data={pibUnited!}
              firstLine={firstInfoChar}
              secondLine={secondInfoChar}
              xAxisKey="year"
              formatter={(value) => formatCurrency(value, "en-US", "USD")}
            />
          </section>
        </>
      </div>
    </div>
  );
}
