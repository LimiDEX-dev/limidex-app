import { Dispatch, SetStateAction } from "react";

import { ActionsObject, StoreObject } from "./types";
import { getCandlestickDataByCoin } from "../../../api/CoinGecko/coins";
import { ChartDataPoint } from "../../../types/chart";

export const provideActions = (
  setStore: Dispatch<SetStateAction<StoreObject>>,
): ActionsObject => ({
  ui: {
    setMobileTab: (payload) => {
      setStore((store) => ({
        ...store,
        ui: {
          ...store.ui,
          mobileTab: payload,
        },
      }));
    },
    setOrderTab: (payload) => {
      setStore((store) => ({
        ...store,
        ui: {
          ...store.ui,
          orderTab: payload,
        },
      }));
    },
    setIsExpertMode: (payload) => {
      setStore((store) => ({
        ...store,
        ui: {
          ...store.ui,
          isExpertMode: payload,
        },
      }));
    },
    setActiveBuyTab: (payload) => {
      setStore((store) => ({
        ...store,
        ui: {
          ...store.ui,
          activeBuyTab: payload,
        },
      }));
    },
  },
  convert: {
    setConvertSell: (payload) => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          sell: {
            ...store.convert.sell,
            selectedSell: payload,
          },
        },
      }));
    },
    setToSell: (payload) => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          sell: {
            ...store.convert.sell,
            toSell: payload,
          },
        },
      }));
    },
    setToSellUSD: (payload) => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          sell: {
            ...store.convert.sell,
            toSellUSD: payload,
          },
        },
      }));
    },
    setConvertBuy: (payload) => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          buy: {
            ...store.convert.buy,
            selectedBuy: payload,
          },
        },
      }));
    },
    setToBuy: (payload) => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          buy: {
            ...store.convert.buy,
            toBuy: payload,
          },
        },
      }));
    },
    setToBuyUSD: (payload) => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          buy: {
            ...store.convert.buy,
            toBuyUSD: payload,
          },
        },
      }));
    },
    handleSwap: () => {
      setStore((store) => ({
        ...store,
        convert: {
          ...store.convert,
          sell: {
            selectedSell: store.convert.buy.selectedBuy,
            toSell: store.convert.buy.toBuy,
            toSellUSD: store.convert.buy.toBuyUSD,
          },
          buy: {
            selectedBuy: store.convert.sell.selectedSell,
            toBuy: store.convert.sell.toSell,
            toBuyUSD: store.convert.sell.toSellUSD,
          },
        },
      }));
    },
  },
  settings: {
    setBurnToken: (payload) => {
      setStore((store) => ({
        ...store,
        settings: {
          ...store.settings,
          burnToken: payload,
        },
      }));
    },
    setPriceImpact: (payload) => {
      setStore((store) => ({
        ...store,
        settings: {
          ...store.settings,
          priceImpact: payload,
        },
      }));
    },
    setRoute: (payload) => {
      setStore((store) => ({
        ...store,
        settings: {
          ...store.settings,
          route: payload,
        },
      }));
    },
    setTrade: (payload) => {
      setStore((store) => ({
        ...store,
        settings: {
          ...store.settings,
          trade: payload,
        },
      }));
    },
    setDestinationChain: (payload) => {
      setStore((store) => ({
        ...store,
        settings: {
          ...store.settings,
          destinationChain: payload,
        },
      }));
    },
  },
  addCustomToken: {
    setIsAddCustomTokenVisible: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          isAddCustomTokenVisible: payload,
        },
      }));
    },
    setCustomToken: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          customToken: payload,
        },
      }));
    },
    setIsAddressValid: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          isAddressValid: payload,
        },
      }));
    },
    setIsUnderstandChecked: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          isUnderstandChecked: payload,
        },
      }));
    },
    setTokenInfo: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          tokenInfo: payload,
        },
      }));
    },
    setIsTokenInfoVisible: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          isTokenInfoVisible: payload,
        },
      }));
    },
    setLastViewedToken: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          lastViewedToken: payload,
        },
      }));
    },
    setIsTokenValid: (payload) => {
      setStore((store) => ({
        ...store,
        addCustomToken: {
          ...store.addCustomToken,
          isTokenValid: payload,
        },
      }));
    },
  },
  advanced: {
    setIsAdvancedOpened: (payload) => {
      setStore((store) => ({
        ...store,
        advanced: {
          ...store.advanced,
          isAdvancedOpened: payload,
        },
      }));
    },
    setTakeProfit: (payload) => {
      setStore((store) => ({
        ...store,
        advanced: {
          ...store.advanced,
          takeProfit: payload,
        },
      }));
    },
    setStopLoss: (payload) => {
      setStore((store) => ({
        ...store,
        advanced: {
          ...store.advanced,
          stopLoss: payload,
        },
      }));
    },
    setTrailingSL: (payload) => {
      setStore((store) => ({
        ...store,
        advanced: {
          ...store.advanced,
          trailingSL: payload,
        },
      }));
    },
  },
  rates: {
    setCurrentPrice: (payload) => {
      setStore((store) => ({
        ...store,
        rates: {
          ...store.rates,
          currentPrice: payload,
        },
      }));
    },
    setRedRates: (payload) => {
      setStore((store) => ({
        ...store,
        rates: {
          ...store.rates,
          redRates: payload,
        },
      }));
    },
    setGreenRates: (payload) => {
      setStore((store) => ({
        ...store,
        rates: {
          ...store.rates,
          greenRates: payload,
        },
      }));
    },
    setSelectedStep: (payload) => {
      setStore((store) => ({
        ...store,
        rates: {
          ...store.rates,
          selectedStep: payload,
        },
      }));
    },
  },
  orders: {
    activeOrders: {
      setActiveOrders: (payload) => {
        setStore((store) => ({
          ...store,
          orders: {
            ...store.orders,
            activeOrders: {
              ...store.orders.activeOrders,
              data: payload,
            },
          },
        }));
      },
      deleteActiveOrder: (payload) => {
        setStore((store) => ({
          ...store,
          orders: {
            ...store.orders,
            activeOrders: {
              ...store.orders.activeOrders,
              data: [
                ...store.orders.activeOrders.data.slice(0, payload),
                ...store.orders.activeOrders.data.slice(payload + 1),
              ],
            },
          },
        }));
      },
      setActiveOrdersPages: (payload) => {
        setStore((store) => ({
          ...store,
          orders: {
            ...store.orders,
            activeOrders: {
              ...store.orders.activeOrders,
              pagesCount: payload,
            },
          },
        }));
      },
    },
    setHistoryOrders: (payload) => {
      setStore((store) => ({
        ...store,
        orders: {
          ...store.orders,
          historyOrders: {
            ...store.orders.historyOrders,
            data: payload,
          },
        },
      }));
    },
    setHistoryOrdersPages: (payload) => {
      setStore((store) => ({
        ...store,
        orders: {
          ...store.orders,
          historyOrders: {
            ...store.orders.historyOrders,
            pagesCount: payload,
          },
        },
      }));
    },
    setCrossOrders: (payload) => {
      setStore((store) => ({
        ...store,
        orders: {
          ...store.orders,
          crossOrders: {
            ...store.orders.crossOrders,
            data: payload,
          },
        },
      }));
    },
    setCrossOrdersPages: (payload) => {
      setStore((store) => ({
        ...store,
        orders: {
          ...store.orders,
          crossOrders: {
            ...store.orders.crossOrders,
            pagesCount: payload,
          },
        },
      }));
    },
    setCurrentPage: (payload) => {
      setStore((store) => ({
        ...store,
        orders: {
          ...store.orders,
          currentPage: payload,
        },
      }));
    },
    setCurrentType: (payload) => {
      setStore((store) => ({
        ...store,
        orders: {
          ...store.orders,
          currentType: payload,
        },
      }));
    },
  },
  chart: {
    setChart: (payload) => {
      setStore((store) => ({
        ...store,
        chart: {
          series: [
            {
              data: payload,
            },
          ],
        },
      }));
    },
  },
});
