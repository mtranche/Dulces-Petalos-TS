import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav aria-label={t('home')}>
        <Link to="/" aria-label={t('home')}>
          <img src={logo} alt={t('logoAlt')} className="logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;