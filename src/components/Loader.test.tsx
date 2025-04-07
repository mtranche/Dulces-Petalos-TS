import { render, screen } from '@testing-library/react';
import Loading from './Loader';

describe('Loading Component', () => {
  it('renders a loading spinner with aria attributes', () => {
    render(<Loading />);
    const spinner = screen.getByLabelText(/loading/i);
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute('aria-busy', 'true');
  });
});
