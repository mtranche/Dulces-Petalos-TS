import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('es')}>Español</button>
      <span className="separator">|</span>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
