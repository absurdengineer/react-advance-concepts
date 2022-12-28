import { HandlePageChange } from "./function.types";
import { Passenger } from "./resource.types";

export interface CardProps {
  data: Passenger;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  maxPages: number;
  limit: number;
  handlePageChange: HandlePageChange;
}
