import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './src/locals/es/translation.json';
import translationEN from './src/locals/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: translationES },
    en: { translation: translationEN },
  },
  lng: 'es', // idioma por defecto
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
