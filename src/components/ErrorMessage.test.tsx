import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {
  it('renders an error message with role alert', () => {
    render(<ErrorMessage message="Algo salió mal" />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/algo salió mal/i);
  });
});
