export const urls = {
  coinCandlestick: (coin: string, currency: string): string =>
    `/coins/${coin}/ohlc?vs_currency=${currency || "usd"}&days=1&interval=1m`,
};
