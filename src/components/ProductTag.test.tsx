import { render, screen } from '@testing-library/react';
import ProductTag from './ProductTag';

describe('ProductTag', () => {
  it('renders "NUEVO" tag for status "new"', () => {
    render(<ProductTag status="new" />);
    const tag = screen.getByLabelText(/Estado: NUEVO/i); 
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent('NUEVO');
    expect(tag).toHaveClass('tag-new');
  });
  
  it('renders "PRÓXIMAMENTE" tag for status "comming_soon"', () => {
    render(<ProductTag status="comming_soon" />);
    const tag = screen.getByLabelText(/estado: PRÓXIMAMENTE/i);
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent('PRÓXIMAMENTE');
    expect(tag).toHaveClass('tag-comming_soon');
  });
  
  it('renders "AGOTADO" tag for status "out_of_stock"', () => {
    render(<ProductTag status="out_of_stock" />);
    const tag = screen.getByLabelText(/estado: AGOTADO/i);
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveTextContent('AGOTADO');
    expect(tag).toHaveClass('tag-out_of_stock');
  });

  it('does not render anything for status "default"', () => {
    const { container } = render(<ProductTag status="default" />);
    expect(container.firstChild).toBeNull();
  });
});
