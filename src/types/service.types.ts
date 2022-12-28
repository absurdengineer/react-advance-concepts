import { AxiosResponse } from "axios";

export interface GetPassengers {
  (page: number, config?: any): Promise<AxiosResponse<any, any>>;
}
