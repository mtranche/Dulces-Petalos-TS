import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import Search from '../components/Search';
import Card from '../components/Card';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import LanguageSwitcher from '../components/LanguageSwitcher';

import { Product } from '../domain/Product';

import { useFetchProducts } from '../hooks/useFetchProducts';
import { useFilteredProducts } from '../hooks/useFilteredProducts';

function ProductList() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const { products, isLoading, error } = useFetchProducts();
  const filtered = useFilteredProducts(query, products);

  return (
    <main className="container" role="main">
      <Header />      
      <LanguageSwitcher />
      
      <div className="content">
        <Search query={query} onChange={setQuery} aria-label={t('searchAria')} />

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />  }

        {!isLoading && !error && (
          <section className="product-grid" aria-labelledby={t('productListTitle')}>
            {filtered.map((product: Product, i:number) => (
              <Card key={`${product.id}-${i}`} product={product} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

export default ProductList;
