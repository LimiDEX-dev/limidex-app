export interface ChartDatePoint {
  x: Date;
  y: number[];
}

export interface ChartData {
  data: ChartDatePoint[];
}

export interface Chart {
  series: ChartData[];
}
