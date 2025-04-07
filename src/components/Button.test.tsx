import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders children text', () => {
    render(<Button>Comprar</Button>);
    const button = screen.getByRole('button', { name: /comprar/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Haz clic</Button>);
    const button = screen.getByRole('button', { name: /haz clic/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant class if provided', () => {
    render(<Button variant="secondary">Secundario</Button>);
    const button = screen.getByRole('button', { name: /secundario/i });
    expect(button).toHaveClass('custom-button', 'secondary');
  });
});
