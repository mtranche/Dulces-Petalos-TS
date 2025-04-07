// src/components/Card.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';
import { Product } from '../domain/Product';

const renderWithRouter = (ui: React.ReactNode) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('Card Component', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'Rosa',
    binomialName: 'Rosa gallica',
    imgUrl: 'https://example.com/rosa.jpg',
    price: 12.99,
    wateringsPerWeek: 2,
    fertilizerType: 'nitrogen',
    heightInCm: 100,
    status: 'new',
  };

  it('renders the product name and binomial name', () => {
    renderWithRouter(<Card product={mockProduct} />);
    expect(screen.getByRole('heading', { name: /rosa/i })).toBeInTheDocument();
    expect(screen.getByText(/rosa gallica/i)).toBeInTheDocument();
  });

  it('renders the product image with correct alt text and src', () => {
    renderWithRouter(<Card product={mockProduct} />);
    const image = screen.getByRole('img', { name: /productImageAlt/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.imgUrl);
  });

  it('renders the product price', () => {
    renderWithRouter(<Card product={mockProduct} />);
    expect(screen.getByText(/€12.99/i)).toBeInTheDocument();
  });

  it('renders the link to the product details', () => {
    renderWithRouter(<Card product={mockProduct} />);
    const link = screen.getByRole('link', {name:/viewDetails rosa/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/product/${mockProduct.id}`);
  });

  it('renders the ProductStatus if status is defined', () => {
    renderWithRouter(<Card product={mockProduct} />);
    const statusTag = screen.getByText(/NUEVO/i); 
    expect(statusTag).toBeInTheDocument();
    expect(statusTag).toHaveAttribute('aria-label', expect.stringContaining('Estado: NUEVO'));
  });

  it('does not render ProductStatus if no status is defined', () => {
    const noStatusProduct: Product = { ...mockProduct, status: undefined as any };
    renderWithRouter(<Card product={noStatusProduct} />);
    expect(screen.queryByLabelText(/estado del producto/i)).not.toBeInTheDocument();
  });
});
