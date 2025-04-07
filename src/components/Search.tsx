import { FC, ChangeEvent } from 'react';
import searchIcon from '../assets/Search.png';
import { useTranslation } from 'react-i18next';

interface Props {
  query: string;
  onChange: (value: string) => void;
}

const Search: FC<Props> = ({ query, onChange }) => {
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={t('searchPlaceholder')}
        value={query}
        onChange={handleChange}
        style={{ backgroundImage: `url(${searchIcon})` }}
        aria-label={t('searchAriaLabel')}
        role="searchbox"
      />
    </div>
  );
};

export default Search;
