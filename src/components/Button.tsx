interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

function Button({ children, variant = 'primary', ...props }: Props) {
  return (
    <button className={`custom-button ${variant}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
