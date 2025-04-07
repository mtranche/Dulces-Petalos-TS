import { useTranslation } from 'react-i18next';

interface Props {
  message: string;  // Puede ser un mensaje de error directo o una clave de traducción.
  isTranslationKey?: boolean;  // Indicador de si el mensaje es una clave de traducción.
}

function ErrorMessage({ message, isTranslationKey = true }: Props) {
  const { t } = useTranslation();

  const translatedMessage = isTranslationKey ? t(message) : message;

  return (
    <div className="error-message" role="alert">
      {translatedMessage}
    </div>
  );
}

export default ErrorMessage;
