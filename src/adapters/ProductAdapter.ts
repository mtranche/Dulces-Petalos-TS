import { Product } from '../domain/Product';

// Adapta un solo producto
export function adaptProduct(item: any): Product {
  return {
    id: item.id,
    name: item.name,
    binomialName: item.binomialName || item.binomial_name,
    price: item.price,
    imgUrl: item.imgUrl || item.image_url,
    wateringsPerWeek: item.wateringsPerWeek ?? item.week_waterings,
    fertilizerType: item.fertilizerType || item.fertilizer_type,
    heightInCm: item.heightInCm ?? item.height_cm,
    status: item.status ?? 'default',
  };
}

// Adapta un array de productos
export function adaptProducts(data: any[]): Product[] {
  return data.map(adaptProduct);
}
