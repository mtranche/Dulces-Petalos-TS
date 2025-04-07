import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { vi } from 'vitest';

const renderWithRouter = (initialEntry: string) => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProductDetail Component', () => {
  const mockProduct = {
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

  it('renders loading state initially', () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });
  
    renderWithRouter('/product/1');
    
    // Ahora esperamos que el ícono 🌸 esté presente en el loader
    expect(screen.getByRole('status')).toHaveTextContent('🌸');
  });
  it('renders error message when API call fails', async () => {
    (fetch as any).mockRejectedValueOnce(new Error('API error'));

    renderWithRouter('/product/1');

    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(/⚠️ Error al obtener el producto/i);
  });

  it('renders product details when API call succeeds', async () => {
    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    renderWithRouter('/product/1');

    // Esperamos a que aparezca el nombre del producto como heading
    const heading = await screen.findByRole('heading', { name: /rosa/i });
    expect(heading).toBeInTheDocument();

    // Verificamos que el resto de campos estén
    expect(screen.getByText(/Rosa gallica/)).toBeInTheDocument();
    expect(screen.getByText(/€12.99/)).toBeInTheDocument();
    expect(screen.getByText(/fertilize_with/)).toBeInTheDocument();
  });
});
