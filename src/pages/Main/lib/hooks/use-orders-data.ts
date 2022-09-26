import { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import { useEthers } from "@usedapp/core";

import { contracts } from "../../../../config/contracts";
import { ActionsObject, useLocalStore } from "../../context";
import {
  getCrossOrdersByPage,
  getCrossOrdersPages,
  getLimitOrdersByPage,
  getLimitOrdersPages,
} from "../../../../api/main/orders";

export const useOrdersData = () => {
  const { account, library } = useEthers();

  const [contract, setContract] = useState<Contract | null>(null);

  const localStore = useLocalStore();
  const {
    orders: {
      currentPage,
      historyOrders,
      activeOrders,
      crossOrders,
      currentType,
    },
  } = localStore.data;
  const {
    orders: {
      setHistoryOrders,
      setHistoryOrdersPages,
      setCrossOrders,
      setCrossOrdersPages,
      activeOrders: { setActiveOrders, setActiveOrdersPages },
    },
  } = localStore.actions as ActionsObject;

  useEffect(() => {
    if (library?.getSigner) {
      const signer = library.getSigner();

      if (!signer) {
        return;
      }

      setContract(
        new ethers.Contract(
          contracts.router.address,
          contracts.router.abi,
          signer,
        ),
      );
    }
  }, [library]);

  useEffect(() => {
    if (!contract || !account) {
      return;
    }

    (async function () {
      const historyPagesCount = await contract.getOrderHistoryPagesCount(
        account,
      );
      const activePagesCount = await getLimitOrdersPages({
        trader: account,
      });
      const crossPagesCount = await getCrossOrdersPages({
        trader: account,
      });

      setHistoryOrdersPages(historyPagesCount);
      setActiveOrdersPages(activePagesCount.data.result);
      setCrossOrdersPages(crossPagesCount.data.result);
    })();
  }, [contract, account]);

  useEffect(() => {
    if (!historyOrders.pagesCount || !contract || currentType !== "history") {
      return;
    }

    (async function () {
      const data = await contract.getOrderHistoryPage(currentPage, account);

      setHistoryOrders(data);
    })();
  }, [historyOrders.pagesCount, contract, currentPage, currentType]);

  useEffect(() => {
    if (!activeOrders.pagesCount || currentType !== "active") {
      return;
    }

    (async function () {
      const data = await getLimitOrdersByPage({
        trader: account,
        page: currentPage,
      });

      setActiveOrders(data.data.result);
    })();
  }, [activeOrders.pagesCount, currentPage, currentType]);

  useEffect(() => {
    if (!crossOrders.pagesCount || currentType !== "cross") {
      return;
    }

    (async function () {
      const data = await getCrossOrdersByPage({
        trader: account,
        page: currentPage,
      });

      setCrossOrders(data.data.result);
    })();
  }, [crossOrders.pagesCount, currentPage, currentType]);
};
