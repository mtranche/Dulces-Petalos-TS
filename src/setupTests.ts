import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import React from 'react';
expect.extend(matchers);


// Mock global de fetch
import { vi } from 'vitest';
beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          id: '1',
          name: 'Rosa',
          binomialName: 'Rosa chinensis',
          price: 10,
          imgUrl: 'https://example.com/rosa.jpg',
          wateringsPerWeek: 2,
          fertilizerType: 'nitrogen',
          heightInCm: 100,
          status: 'new',
        },
      ])
    })
  ));
});

afterEach(() => {
  vi.restoreAllMocks();
});

// Mock de la función `t` de i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: Record<string, any>) => {
      const translations: Record<string, string> = {
        status_new: 'NUEVO',
        status_comming_soon: 'PRÓXIMAMENTE',
        status_out_of_stock: 'AGOTADO',
        status_default: '',         
      };
      return translations[key] || key; 
    },
    i18n: {
      changeLanguage: vi.fn(),
    },
  }),
  Trans: ({ children }: { children: React.ReactNode }) => React.createElement('div', null, children),
}));