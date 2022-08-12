import { AxiosResponse } from "axios";

export interface JsonRpcResponse<T>
  extends AxiosResponse<{
    id: string;
    jsonrpc: string;
    result: T;
  }> {}
