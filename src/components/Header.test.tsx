import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  it('renders the logo with correct alt text and link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica que el logo esté presente con su texto alternativo
    const logo = screen.getByRole('img', { name: /logoAlt/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src');
    expect(logo.getAttribute('src')).toMatch(/logo\.png$/i);

    // Verifica el enlace de navegación
    const link = screen.getByRole('link', { name: /home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
