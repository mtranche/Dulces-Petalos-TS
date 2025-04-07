import { describe, it, expect } from 'vitest';
import { adaptProduct, adaptProducts } from './ProductAdapter';
import { Product } from '../domain/Product';

describe('adaptProduct', () => {
  it('adapta un producto con snake_case', () => {
    const apiProduct = {
      id: '1',
      name: 'Rosa',
      binomial_name: 'Rosa gallica',
      price: 10,
      image_url: 'https://example.com/image.jpg',
      week_waterings: 2,
      fertilizer_type: 'NPK',
      height_cm: 30,
    };

    const adapted = adaptProduct(apiProduct);

    const expected: Product = {
      id: '1',
      name: 'Rosa',
      binomialName: 'Rosa gallica',
      price: 10,
      imgUrl: 'https://example.com/image.jpg',
      wateringsPerWeek: 2,
      fertilizerType: 'NPK',
      heightInCm: 30,
      status: 'default',
    };

    expect(adapted).toEqual(expected);
  });

  it('mantiene camelCase si ya viene así', () => {
    const apiProduct = {
      id: '2',
      name: 'Tulipán',
      binomialName: 'Tulipa gesneriana',
      price: 15,
      imgUrl: 'https://example.com/tulipan.jpg',
      wateringsPerWeek: 3,
      fertilizerType: 'orgánico',
      heightInCm: 40,
      status: 'new',
    };

    const adapted = adaptProduct(apiProduct);

    expect(adapted).toEqual(apiProduct); 
  });
});

describe('adaptProducts', () => {
  it('adapta un array de productos', () => {
    const rawProducts = [
      {
        id: '1',
        name: 'Rosa',
        binomial_name: 'Rosa gallica',
        price: 10,
        image_url: 'https://example.com/image.jpg',
        week_waterings: 2,
        fertilizer_type: 'NPK',
        height_cm: 30,
      },
      {
        id: '2',
        name: 'Tulipán',
        binomial_name: 'Tulipa gesneriana',
        price: 15,
        image_url: 'https://example.com/tulipan.jpg',
        week_waterings: 3,
        fertilizer_type: 'orgánico',
        height_cm: 40,
      },
    ];

    const adapted = adaptProducts(rawProducts);

    expect(adapted).toHaveLength(2);
    expect(adapted[0].name).toBe('Rosa');
    expect(adapted[1].name).toBe('Tulipán');
  });
});
