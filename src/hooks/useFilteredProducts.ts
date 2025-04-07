
import { useEffect, useState } from 'react';
import { Product } from '../domain/Product';

export function useFilteredProducts(query: string, products: Product[]) {
  const [filtered, setFiltered] = useState<Product[]>([]);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    const result = products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.binomialName.toLowerCase().includes(lowerQuery)
    );
    setFiltered(result);
  }, [query, products]);

  return filtered;
}
