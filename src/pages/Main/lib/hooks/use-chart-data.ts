import { useEffect } from "react";

import { ActionsObject, useLocalStore } from "../../context";
import { getCandlestickDataByCoin } from "../../../../api/CoinGecko/coins";
import { ChartDataPoint } from "../../../../types/chart";
import { getCandles } from "../../../../api/coinCap/candles";

export const useChartData = () => {
  const localStore = useLocalStore();
  const {
    chart: { setChart },
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    (async function () {
      const { data } = await getCandlestickDataByCoin({
        coin: "ethereum",
        currency: "usd",
      });

      const mappedData: ChartDataPoint[] = data.map((item) => ({
        x: new Date(item[0]),
        y: [item[1], item[2], item[3], item[4]],
      }));

      setChart(mappedData);
    })();
  }, []);
};
