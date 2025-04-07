export interface Product {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringsPerWeek: number;
  fertilizerType: string;
  heightInCm: number;
  status: 'new' | 'default' | 'comming_soon' | 'out_of_stock';
}