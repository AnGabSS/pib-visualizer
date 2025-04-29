import { TabInterface } from "@/types/TabInterface";

interface Props {
  tabs: TabInterface[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ tabs, selectedTab, onTabChange }: Props) => {
  return (
    <nav className="flex justify-center gap-4 p-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${
            tab.key === selectedTab
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-400/30 hover:text-white"
          } rounded-xl px-4 py-2 text-emerald-500 cursor-pointer`}
          onClick={() => onTabChange(tab.key)}
          disabled={tab.key == selectedTab}
        >
          {tab.value}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
