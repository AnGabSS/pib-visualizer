interface ChartDataItem {
  [key: string]: string | number;
}
export interface PibUnitedInterface extends ChartDataItem {
  year: string;
  total: number;
  percapita: number;
}
