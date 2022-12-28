import { GetPassengers } from "../types/service.types";
import httpService from "./http.service";

export const getPassengers: GetPassengers = (page = 1, config) =>
  httpService.get(`/passenger?page=${page}&size=30`, config);

const passengerService = {
  getPassengers: getPassengers,
};

export default passengerService;
