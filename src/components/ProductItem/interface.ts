export interface Product {
  id: number;
  name: string;
  imageUri: string;
  summ: number;
  fullSumm: number;
  discount: number;
  cashback: number;
}

export interface PropsInterface {
  item: Product;
  isBig?: boolean;
  noMargin?: boolean;
}
