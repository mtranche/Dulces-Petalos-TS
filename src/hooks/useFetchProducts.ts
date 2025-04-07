
import { useEffect, useState } from 'react';
import { Product } from '../domain/Product';
import { adaptProducts } from '../adapters/ProductAdapter';

const removeDuplicates = (products: Product[]): Product[] => {
  const seen = new Set();
  return products.filter((product) => {
    if (seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
};

export function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiv1 = 'https://dulces-petalos.jakala.es/api/v1/product';
  const apiv2 = 'https://dulces-petalos.jakala.es/api/v2/product';

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError(null); 
        //const response = await fetch(apiv1); funciona con v1 y v2
        const response = await fetch(apiv2);
        if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const data = await response.json();
        //quita los productos repetidos
        const uniqueProducts = removeDuplicates(data);
        const adapted = adaptProducts(uniqueProducts);
        setProducts(adapted);
      } catch (err) {
        setError('⚠️ Error al obtener productos');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, isLoading, error };
}
