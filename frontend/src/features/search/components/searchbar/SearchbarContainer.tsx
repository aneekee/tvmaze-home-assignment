import { useEffect, useState, type ChangeEvent } from 'react';
import { useDebounce } from 'use-debounce';
import { useLocation } from 'react-router-dom';

import { Searchbar } from './Searchbar';
import { useShowsSearch } from '../../hooks/useShowsSearch';

export const SearchbarContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query] = useDebounce(searchValue, 500);
  const location = useLocation();

  const isNotHomepage = location.pathname !== '/';

  useEffect(() => {
    if (isNotHomepage) {
      setSearchValue('');
    }
  }, [isNotHomepage]);

  useShowsSearch({ query });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Searchbar
      value={searchValue}
      onChange={onChange}
      disabled={isNotHomepage}
    />
  );
};
