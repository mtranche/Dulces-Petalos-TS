import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {  
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t('siteTitle'); 
  }, [t, i18n.language]);


  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<h1 className="http-error">⚠️ 404 - Página no encontrada</h1>} />
    </Routes>
  );
};

export default App;
