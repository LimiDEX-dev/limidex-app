export interface ChartDataPoint {
  x: Date;
  y: number[];
}

export interface ChartData {
  data: ChartDataPoint[];
}

export interface Chart {
  series: ChartData[];
}
