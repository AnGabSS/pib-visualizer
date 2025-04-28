import BarChartsComponent from "@/components/BarChartsComponent";
import LineChartsComponent from "@/components/LineChartsComponent";
import Tabs from "@/components/Tabs/Tabs";
import { usePibData } from "@/hooks/usePibData";
import { TabInterface } from "@/types/TabInterface";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";

export default function Home() {
  const { pibUnited, isLoading } = usePibData();
  const [selectedTab, setSelectedTab] = useState<string>("bar");
  const tabs: TabInterface[] = [
    { key: "bar", value: "Barras" },
    { key: "line", value: "Linha" },
  ];

  if (isLoading)  {
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



  const firstInfoChar = {
    key: "total",
    name: "Total"
  }

  const secondInfoChar = {
    key: "percapita",
    name: "Per capito"
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center p-10">
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <>
        <section
          className={`w-full h-[90%] ${selectedTab === "bar" ? "" : "hidden"}`}
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
          className={`w-full h-[90%] ${selectedTab === "line" ? "" : "hidden"}`}
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
  );
}
