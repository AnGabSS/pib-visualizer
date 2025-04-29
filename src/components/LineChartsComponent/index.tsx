import { ChartDataKeyInterface } from "@/types/ChartDataKeyInterface";
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

interface ChartDataItem {
  [key: string]: string | number;
}

interface Props {
  data: ChartDataItem[];
  firstLine: ChartDataKeyInterface;
  secondLine: ChartDataKeyInterface;
  xAxisKey: string;
  formatter?: (value: string | number, index?: number) => string;
}

const LineChartsComponent = ({
  data,
  firstLine,
  secondLine,
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
            tickFormatter={(value, index) =>
              formatter ? formatter(value, index) : String(value)
            }
          />
          <YAxis />
          <Tooltip
            formatter={(value: string | number) =>
              formatter ? formatter(value) : value
            }
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={firstLine.key}
            name={firstLine.name}
            stroke="#1bb17a"
          />
          <Line
            type="monotone"
            dataKey={secondLine.key}
            name={secondLine.name}
            stroke="#f58561"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartsComponent;
