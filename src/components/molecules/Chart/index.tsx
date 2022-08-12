import React, { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { chart as mockChart } from "../../../lib/mock/chart";
import { Dropdown } from "../../atoms";

import { ChartProps } from "./types";

import * as S from "./style";

const chartOptions: ApexOptions = {
  chart: {
    type: "candlestick",
    toolbar: {
      tools: {
        download: false,
        pan: false,
      },
    },
    foreColor: "#E5E5E5",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  tooltip: {
    style: {},
  },
};

const timeframeOptions = [
  {
    label: "seconds ",
    value: "60",
  },
  {
    label: "minutes ",
    value: "10",
  },
  {
    label: "minutes ",
    value: "30",
  },
  {
    label: "minutes ",
    value: "60",
  },
  {
    label: "hours ",
    value: "6 ",
  },
  {
    label: "hours ",
    value: "24",
  },
  {
    label: "days ",
    value: "2 ",
  },
  {
    label: "weeks ",
    value: "1 ",
  },
  {
    label: "month ",
    value: "1 ",
  },
];

export const Chart: FC<ChartProps> = ({ height, setHeight }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState(
    timeframeOptions[0],
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chart, setChart] = useState(mockChart);

  return (
    <S.Chart>
      <S.Header>
        <S.HeaderWrapper>
          <S.HeaderTitle>Rates</S.HeaderTitle>
          <Dropdown
            items={timeframeOptions}
            onSelect={setSelectedTimeframe}
            textAlign="right"
            arrowHidden
            listWidth={110}
          >
            <S.TimeframeText>Timeframe</S.TimeframeText>
            <S.TimeframeWrapper>
              <S.TimeframeText>{selectedTimeframe.label[0]}</S.TimeframeText>
              <S.TimeframeMinutes>{selectedTimeframe.value}</S.TimeframeMinutes>
            </S.TimeframeWrapper>
          </Dropdown>
        </S.HeaderWrapper>
        <S.HeaderCurrent>
          <S.HeaderValute>
            <S.HeaderValuteIcon />
            <S.HeaderValuteIcon />
            <S.HeaderValuteText>WNBN / WNBN</S.HeaderValuteText>
          </S.HeaderValute>
          <S.HeaderCurrentWrapper>
            <S.HeaderCurrentText>556.7373732987</S.HeaderCurrentText>
            <S.HeaderCurrentChange>+0.00018</S.HeaderCurrentChange>
          </S.HeaderCurrentWrapper>
        </S.HeaderCurrent>
      </S.Header>
      {/* <CandleStickChart /> */}
      <div id="chart">
        <ReactApexChart
          type="candlestick"
          series={chart.series}
          options={chartOptions}
          height={height}
        />
      </div>
    </S.Chart>
  );
};
