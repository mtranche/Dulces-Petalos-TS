import { Link } from 'react-router-dom';
import { Product } from '../domain/Product';
import ProductTag from './ProductTag';
import { useTranslation } from 'react-i18next';

interface Props {
  product: Product;
}

function Card({ product }: Props) {  
  const { t } = useTranslation();
  
  return (
    <article className="product-card">
      <header className="product-heading">
        <h4>{product.name}</h4>
        <p className="product-binomial">{product.binomialName}</p>
      </header>

      <div className='product-content'>
        <img
          src={product.imgUrl}
          alt = {t('productImageAlt', { name: product.name })}
          className="product-image"
          loading="lazy"
        />

        <p className="product-price"aria-label={`${t('productPrice')}: ${product.price.toFixed(2)} euros`}>€{product.price.toFixed(2)}</p>

        <Link
          to={`/product/${product.id}`}
          className="go-to-button"
          aria-label={`${t('viewDetails')} ${product.name}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5 19L19 5" stroke="black" strokeWidth="2" />
            <path d="M6 5H19V18" stroke="black" strokeWidth="2" />
          </svg>
        </Link>

        {product.status && <ProductTag status={product.status} />}
      </div>
    </article>
  );
}

export default Card;