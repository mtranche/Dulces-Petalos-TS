import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import { vi } from 'vitest';

describe('Search Component', () => {
  it('renders the search input with the correct placeholder and value', () => {
    const mockQuery = 'Rosa';
    const mockOnChange = vi.fn();

    render(<Search query={mockQuery} onChange={mockOnChange} />);

    // Verifica que el input esté presente
    const searchInput = screen.getByRole('searchbox', { name: /searchAriaLabel/i });  // Usar la clave de aria-label
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('placeholder');
    expect(searchInput).toHaveValue(mockQuery);
  });

  it('calls onChange when the input value changes', () => {
    const mockQuery = '';
    const mockOnChange = vi.fn();

    render(<Search query={mockQuery} onChange={mockOnChange} />);

    const searchInput = screen.getByRole('searchbox', { name: /searchAriaLabel/i });  // Usar la clave de aria-label

    // Simula un cambio en el input
    fireEvent.change(searchInput, { target: { value: 'Tulipán' } });

    // Verifica que la función onChange haya sido llamada con el nuevo valor
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('Tulipán');
  });
});
