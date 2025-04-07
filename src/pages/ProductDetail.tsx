import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import { useProductById } from '../hooks/useFetchProductById';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Button from '../components/Button';
import LanguageSwitcher from '../components/LanguageSwitcher';

function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);

  if (loading) return <Loader aria-label={t('loading_product')} />;
  if (!product && error) return <ErrorMessage message={error} />;

  return (
    <div id="detail-layout" className="detail-layout">
      <header>
        <Header />
      </header>
      <main className="container" role="main" aria-labelledby="product-title">
        <LanguageSwitcher />
        {error && <ErrorMessage message={error} />}

        <div className="product-detail">
          <Breadcrumb name={product.name} />

          <div className="detail-content">
            <div className="image">
              <img src={product.imgUrl} alt={t('productImageAlt', { name: product.name })} />
            </div>

            <div className="info">
              <h1 id="product-title">{product.name}</h1>
              <p className="binomial">{product.binomialName}</p>
              <h4 className="product-price" aria-label={`${t('productPrice')}: €${product.price.toFixed(2)} euros`}>
                €{product.price.toFixed(2)}
              </h4>

              <ul className="details bodyb2">
                <li>
                  {t('waterings_per_week', { count: product.wateringsPerWeek, suffix: product.wateringsPerWeek > 1 ? 'es' : '' })}
                </li>
                <li>
                  {t('fertilize_with', { fertilizer: t(`fertilizerTypes.${product.fertilizerType || 'undefined'}`) })}
                </li>
              </ul>

              <Button
                onClick={() => alert(`${t('add_to_cart')} ${product.name}`)}
                aria-label={t('add_to_cart')}
                className="add-to-cart"
              >
                {t('add_to_cart')}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
