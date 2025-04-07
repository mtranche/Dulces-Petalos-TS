import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { useProductById } from './useFetchProductById';
import { Product } from '../domain/Product';
import { waitFor } from '@testing-library/react';

describe('useProductById', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'Rosa',
    binomialName: 'Rosa gallica',
    price: 12.99,
    imgUrl: 'https://example.com/rosa.jpg',
    wateringsPerWeek: 2,
    fertilizerType: 'nitrogen',
    heightInCm: 30,
    status: 'new',
  };

  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('starts in loading state', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    const { result } = renderHook(() => useProductById('1'));

    expect(result.current.loading).toBe(true);
    expect(result.current.product).toBeNull();
  });

  it('sets product on successful fetch', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    const { result } = renderHook(() => useProductById('1'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.loading).toBe(false);
    expect(result.current.product?.name).toBe('Rosa');
    expect(result.current.error).toBeNull();
  });

  it('sets error on failed fetch', async () => {
    (fetch as any).mockRejectedValueOnce(new Error('API failure'));

    const { result } = renderHook(() => useProductById('1'));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.loading).toBe(false);
    expect(result.current.product).toBeNull();
    expect(result.current.error).toMatch(/error/i);
  });
});


