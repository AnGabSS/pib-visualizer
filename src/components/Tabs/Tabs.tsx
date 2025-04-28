import { TabInterface } from "@/types/TabInterface";

interface Props {
  tabs: TabInterface[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = (props: Props) => {
  return (
    <nav className="flex justify-center gap-4 p-4">
      {props.tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${
            tab.key === props.selectedTab ? "bg-emerald-500 text-white" : ""
          } rounded-xl px-4 py-2 text-emerald-500 cursor-pointer`}
          onClick={() => props.onTabChange(tab.key)}
          disabled={tab.key == props.selectedTab}
        >
          {tab.value}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
