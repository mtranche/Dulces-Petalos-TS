import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';
import { BrowserRouter } from 'react-router-dom';

describe('Breadcrumb Component', () => {
  it('renders the breadcrumb with the correct text and link', () => {
    render(
      <BrowserRouter>
        <Breadcrumb name="Productos" />
      </BrowserRouter>
    );

    // Verifica que el enlace al inicio esté presente
    const homeLink = screen.getByRole('link', { name: /inicio/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Verifica que el texto del breadcrumb sea correcto
    const breadcrumbText = screen.getByText(/productos/i);
    expect(breadcrumbText).toBeInTheDocument();
    expect(breadcrumbText).toHaveAttribute('aria-current', 'page');

    // Verifica que el ícono decorativo esté presente
    const chevronIcon = screen.getByTestId('chevron-icon');
    expect(chevronIcon).toBeInTheDocument();
    expect(chevronIcon).toHaveClass('chevron-right');
  });
});
