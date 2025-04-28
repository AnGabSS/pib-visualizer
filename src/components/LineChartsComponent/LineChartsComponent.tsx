import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: any[];
  firstLineKey?: string;
  secondLineKey?: string;
  xAxisKey?: string;
  formatter?: (value: any) => string | number;
}

const LineChartsComponent = ({
  data,
  firstLineKey,
  secondLineKey,
  xAxisKey,
  formatter,
}: Props) => {
  return (
    <div className="w-full h-[90%]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={930}
          height={550}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={xAxisKey}
            tickFormatter={formatter ?? ((value) => value)}
          />
          <YAxis />
          <Tooltip formatter={formatter ?? ((value) => value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey={firstLineKey}
            name="Pib Total"
            stroke="#1bb17a"
          />
          <Line
            type="monotone"
            dataKey={secondLineKey}
            name="Pib Per Capita"
            stroke="#f58561"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartsComponent;
