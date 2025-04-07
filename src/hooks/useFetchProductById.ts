import { useEffect, useState } from 'react';
import { Product } from '../domain/Product';
import { adaptProduct } from '../adapters/ProductAdapter';

export function useProductById(id: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const apiv1 = 'https://dulces-petalos.jakala.es/api/v1/product';
    const apiv2 = 'https://dulces-petalos.jakala.es/api/v2/product';

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);        
       // const res = await fetch(`${apiv1}/${id}`); Funciona con v1 y v2
        const res = await fetch(`${apiv2}/${id}`); 
        if (!res.ok) throw new Error('⚠️ Error al obtener el producto');
        const data = await res.json();
        const adapted = adaptProduct(data);
        setProduct(adapted);
      } catch (err) {
        setError('⚠️ Error al obtener el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}
