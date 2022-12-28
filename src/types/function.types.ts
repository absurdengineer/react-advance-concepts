export interface CustomRange {
  (start: number, end: number): number[];
}

export interface GetPages {
  (currentPage: number, totalPages: number, maxNumberPages?: number): number[];
}

export interface HandlePageChange {
  (page: number): void;
}
