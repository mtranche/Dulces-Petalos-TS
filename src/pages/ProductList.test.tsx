import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';
import App from '../App';
import { Product } from '../domain/Product';

const renderWithRouter = (ui: React.ReactNode) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('ProductList Component', () => {
  it('renders loading state initially', () => {
    renderWithRouter(<ProductList />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders error message when API call fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValueOnce(new Error('API failure')));

    renderWithRouter(<ProductList />);
    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('⚠️ Error al obtener productos');
  });

  it('renders multiple products when API call succeeds', async () => {
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

    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    }));

    renderWithRouter(<ProductList />);

    const product1 = await screen.findByRole('heading', { name: /rosa/i });
    const product2 = await screen.findByRole('heading', { name: /tulipán/i });

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
    expect(screen.getByText(/€12.99/i)).toBeInTheDocument();
    expect(screen.getByText(/€9.99/i)).toBeInTheDocument();
  });

  it('filters products based on the search query', async () => {
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

    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    }));

    renderWithRouter(<ProductList />);

    await screen.findByText(/rosa gallica/i);

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'Rosa' } });

    await waitFor(() => {
      expect(screen.getByText('Rosa')).toBeInTheDocument();
      expect(screen.queryByText('Tulipán')).not.toBeInTheDocument();
    });
  });

  it('navigates to product detail page on product click', async () => {
    const mockProduct = {
      id: '1',
      name: 'Rosa',
      binomialName: 'Rosa gallica',
      price: 12.99,
      imgUrl: '',
      wateringsPerWeek: 2,
      fertilizerType: 'nitrogen',
      heightInCm: 30,
      status: 'new',
    };
  
    // Primer fetch: para la lista
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => [mockProduct],
    }));
  
    // Segundo fetch: para el detalle
    // Después del click, el detalle hace su propio fetch
    ;(fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });
  
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    const link = await screen.findByRole('link', { name: /viewDetails Rosa/i });
    fireEvent.click(link);
  
    const heading = await screen.findByRole('heading', { name: /rosa/i });
    expect(heading).toBeInTheDocument();
  });
});
