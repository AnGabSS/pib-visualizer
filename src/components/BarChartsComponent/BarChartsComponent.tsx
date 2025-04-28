import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: any[];
  firstLineKey: string;
  secondLineKey: string;
  xAxisKey: string;
  formatter?: (value: any) => string | number;
}

const BarChartsComponent = ({
  data,
  firstLineKey,
  secondLineKey,
  xAxisKey,
  formatter,
}: Props) => {
  return (
    <div className="w-full h-[90%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={xAxisKey}
            tickFormatter={formatter ?? ((value) => value)}
          />
          <YAxis tickCount={32} />
          <Tooltip formatter={formatter ?? ((value) => value)} />
          <Legend />
          <Bar
            type="monotone"
            dataKey={firstLineKey}
            name="Pib Total"
            fill="#1bb17a"
          />
          <Bar
            type="monotone"
            dataKey={secondLineKey}
            name="Pib Per Capita"
            fill="#f58561"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartsComponent;
