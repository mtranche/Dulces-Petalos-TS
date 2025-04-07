import { useTranslation } from 'react-i18next';

type ProductStatus = 'new' | 'default' | 'comming_soon' | 'out_of_stock';

interface Props {
  status: ProductStatus;
}

function ProductTag({ status }: Props) {
  const { t } = useTranslation();

  // Usamos las claves de traducción para obtener el estado
  const statusLabels: Record<ProductStatus, string> = {
    new: t('status_new'),
    default: t('status_default'), 
    comming_soon: t('status_comming_soon'),
    out_of_stock: t('status_out_of_stock'),
  };

  // Si el estado es "default", no renderizamos nada
  if (status === 'default') {
    return null;
  }

  return (
    <span 
      className={`product-tag tag-${status}`} 
      aria-label={`Estado: ${statusLabels[status]}`}
    >
      {statusLabels[status]} 
    </span>
  );
}

export default ProductTag;
