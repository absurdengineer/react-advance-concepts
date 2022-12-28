import { CardProps, PaginationProps } from "./prop.types";

export interface NoPropComponent {
  (): JSX.Element;
}

export interface CardComponent {
  (props: CardProps): JSX.Element;
}

export interface PaginationComponent {
  (props: PaginationProps): JSX.Element;
}
