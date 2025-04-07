import { useTranslation } from 'react-i18next';

function Loading() {
  
  const { t } = useTranslation();

  return (
    <div className="loading-overlay"  role="status">
      <div className="loading-spinner" aria-busy="true" aria-label={t('loading')}>
        🌸
      </div>
    </div>
  );
}

export default Loading;
