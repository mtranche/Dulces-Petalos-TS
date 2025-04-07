import { Link } from 'react-router-dom';
import chevronright from '../assets/Vector.svg';

interface BreadcrumbProps {
  name: string;
}

function Breadcrumb({ name } : BreadcrumbProps){
  return(
    <nav className="breadcrumb" aria-label="Ruta de navegación">
      <Link to="/">Inicio</Link>
      <span className="contains-chevron" aria-hidden="true">
        <img src={chevronright} className='chevron-right' alt="" data-testid="chevron-icon" />
      </span>
      <span aria-current="page"> {name}</span>
    </nav>
  )
}
export default Breadcrumb;