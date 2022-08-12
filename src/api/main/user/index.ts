import { SetUserAuthParams } from "./types";
import { JsonRpcResponse } from "../types";
import { axios } from "../base";
import { urls } from "./urls";

export const setUserAuth = (
  params: SetUserAuthParams,
): Promise<JsonRpcResponse<SetUserAuthParams>> =>
  axios.post("", {
    method: urls.setUserAuth,
    params: [{ ...params }],
  });
