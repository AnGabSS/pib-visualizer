import BarChartsComponent from "@/components/BarChartsComponent/BarChartsComponent";
import LineChartsComponent from "@/components/LineChartsComponent/LineChartsComponent";
import Tabs from "@/components/Tabs/Tabs";
import { usePibData } from "@/hooks/usePibData";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";

export default function Home() {
  const { pibTotal, pibPerCapita, isLoading } = usePibData();
  const [selectedTab, setSelectedTab] = useState<string>("bar");
  const tabs: TabInterface[] = [
    { key: "bar", value: "Barras" },
    { key: "line", value: "Linha" },
  ];

  if (isLoading || !pibTotal || !pibPerCapita) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span>Carregando...</span>
      </div>
    );
  }

  const pibDataForChart = pibTotal.map((pib) => {
    const perCapitaValue = pibPerCapita.find(
      (perCapita) => perCapita.year === pib.year
    )?.value;

    return {
      year: pib.year,
      valueTotal: pib.value,
      valuePerCapita: perCapitaValue,
    };
  });

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
            data={pibDataForChart}
            firstLineKey="valueTotal"
            secondLineKey="valuePerCapita"
            xAxisKey="year"
            formatter={(value) => formatCurrency(value, "en-US", "USD")}
          />
        </section>
        <section
          className={`w-full h-[90%] ${selectedTab === "line" ? "" : "hidden"}`}
        >
          <LineChartsComponent
            data={pibDataForChart}
            firstLineKey="valueTotal"
            secondLineKey="valuePerCapita"
            xAxisKey="year"
            formatter={(value) => formatCurrency(value, "en-US", "USD")}
          />
        </section>
      </>
    </div>
  );
}
