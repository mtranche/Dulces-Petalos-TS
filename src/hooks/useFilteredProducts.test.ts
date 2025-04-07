import { renderHook } from '@testing-library/react';
import { useFilteredProducts } from './useFilteredProducts';
import { Product } from '../domain/Product';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rosa',
    binomialName: 'Rosa gallica',
    price: 12.99,
    imgUrl: '',
    wateringsPerWeek: 2,
    fertilizerType: 'nitrogen',
    heightInCm: 30,
    status: 'new',
  },
  {
    id: '2',
    name: 'Tulipán',
    binomialName: 'Tulipa gesneriana',
    price: 9.99,
    imgUrl: '',
    wateringsPerWeek: 2,
    fertilizerType: 'nitrogen',
    heightInCm: 25,
    status: 'default',
  },
];

describe('useFilteredProducts', () => {
  it('returns all products if query is empty', () => {
    const { result } = renderHook(() =>
      useFilteredProducts('', mockProducts)
    );

    expect(result.current).toHaveLength(2);
  });

  it('returns filtered products by name', () => {
    const { result } = renderHook(() =>
      useFilteredProducts('rosa', mockProducts)
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].name).toBe('Rosa');
  });

  it('returns filtered products by binomial name', () => {
    const { result } = renderHook(() =>
      useFilteredProducts('tulipa', mockProducts)
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].name).toBe('Tulipán');
  });

  it('returns no products if query does not match', () => {
    const { result } = renderHook(() =>
      useFilteredProducts('no existe', mockProducts)
    );

    expect(result.current).toHaveLength(0);
  });

  it('is case insensitive', () => {
    const { result } = renderHook(() =>
      useFilteredProducts('TuLiPáN', mockProducts)
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].name).toBe('Tulipán');
  });
});
