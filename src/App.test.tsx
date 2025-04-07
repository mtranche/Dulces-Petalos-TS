import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { vi } from 'vitest';

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

describe('App Component', () => {
  it('renders ProductList for the root route ("/")', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });

  it('renders ProductDetail for product detail route ("/product/:id")', async () => {
    // Sobrescribir el mock de fetch para este test específico
    vi.mocked(fetch).mockImplementationOnce(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProduct) // Devuelve un objeto, no un array
      }) as unknown as Promise<Response>
    );

    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <App />
      </MemoryRouter>
    );

    // Esperar a que los datos se carguen y el componente se renderice
    await waitFor(() => {
      // Buscar específicamente por el encabezado h1 con id="product-title"
      const heading = screen.getByRole('heading', { level: 1, name: /Rosa/i });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveAttribute('id', 'product-title');
    });
    
    // Verificar el resto del contenido
    expect(screen.getByText(/Rosa gallica/i)).toBeInTheDocument();
    expect(screen.getByText(/€12.99/i)).toBeInTheDocument();
  });

  it('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
  });
});