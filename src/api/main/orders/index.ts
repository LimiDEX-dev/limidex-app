import { axios } from "../base";
import { JsonRpcResponse } from "../types";

import { RemoveLimitOrderParams } from "./types";
import { urls } from "./urls";

export const removeLimitOrder = (
  params: RemoveLimitOrderParams,
): Promise<JsonRpcResponse<boolean>> =>
  axios.post("", {
    method: urls.removeLimitOrder,
    params,
  });
