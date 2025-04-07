import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useFetchProducts } from './useFetchProducts';
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

describe('useFetchProducts', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('starts in loading state', () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    const { result } = renderHook(() => useFetchProducts());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it('sets products on successful fetch', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const { result } = renderHook(() => useFetchProducts());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.products).toHaveLength(2);
    expect(result.current.products[0].name).toBe('Rosa');
    expect(result.current.error).toBeNull();
  });

  it('sets error on failed fetch', async () => {
    (fetch as any).mockRejectedValueOnce(new Error('API failure'));

    const { result } = renderHook(() => useFetchProducts());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toMatch(/error/i);
  });
});