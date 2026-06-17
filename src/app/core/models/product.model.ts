export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isBest?: boolean;
  description: string;
  fabric: string;
}